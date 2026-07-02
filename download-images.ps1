$urlFile = (Get-ChildItem -LiteralPath "D:\Opencode\网站重构助手" -Filter "*URL*" | Select-Object -First 1).FullName
$outDir = "D:\Opencode\网站重构助手\wp-content\uploads"

$urls = Get-Content -LiteralPath $urlFile -Encoding UTF8 | Where-Object { $_ -match '^https?://' }
$total = $urls.Count
$done = 0
$ok = 0
$fail = 0
$skip = 0

Write-Output "URL file: $urlFile"
Write-Output "Total files: $total"
Write-Output "Output: $outDir"
Write-Output ""

[System.Net.ServicePointManager]::ServerCertificateValidationCallback = { $true }
[System.Net.ServicePointManager]::SecurityProtocol = [System.Net.SecurityProtocolType]::Tls12 -bor [System.Net.SecurityProtocolType]::Tls13

foreach ($url in $urls) {
    $done++
    $pct = [math]::Round($done / $total * 100, 1)
    $uri = [uri]$url
    $relPath = $uri.AbsolutePath.TrimStart('/')
    
    if (-not $relPath) {
        Write-Output "[$done/$total] SKIP: invalid URL"
        $skip++
        continue
    }
    
    $local = Join-Path $outDir $relPath
    $localDir = Split-Path $local -Parent
    
    if (Test-Path -LiteralPath $local) {
        $skip++
        continue
    }
    
    if (-not (Test-Path -LiteralPath $localDir)) {
        New-Item -ItemType Directory -Path $localDir -Force | Out-Null
    }
    
    try {
        $wc = New-Object System.Net.WebClient
        $wc.Headers.Add("User-Agent", "Mozilla/5.0")
        $wc.DownloadFile($url, $local)
        $wc.Dispose()
        $ok++
    } catch {
        Write-Output "[$done/$total $pct%] FAIL: $relPath"
        $fail++
        if (Test-Path -LiteralPath $local) {
            Remove-Item -LiteralPath $local -Force
        }
    }
    
    if ($done % 50 -eq 0) {
        Write-Output "[$done/$total $pct%] Progress: OK=$ok FAIL=$fail SKIP=$skip"
    }
}

Write-Output ""
Write-Output "DONE: OK=$ok FAIL=$fail SKIP=$skip TOTAL=$done"
Write-Output "Files at: $outDir"
