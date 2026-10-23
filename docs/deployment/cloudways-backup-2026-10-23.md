# Cloudways data backup — 2026-10-23

Taken before the Cloudways subscription is cancelled. The site itself no longer depends
on Cloudways (see `cloudflare-cutover-2026-10-22.md`); this preserves the only data that
cannot be rebuilt from git.

## What was on the server

Server `1540806.cloudwaysapps.com` (Debian 12, 25 GB), running two applications:

| App folder | Role | Domains |
|---|---|---|
| `vhxmfujkar` | production | `www.sunlitsolarroof.com`, `sunlitsolarroof.com`, `wordpress-1540806-5953724.cloudwaysapps.com` |
| `echumpnbzf` | staging | `wordpress-1540806-6632385.cloudwaysapps.com` only |

The staging app was a clone of production — its `.wordpress_staging_backup_20260824`
matched the production archive file for file, except for cached `perfmatters` fonts.
Only the production copy was archived.

Each app held a full WordPress installation in a hidden directory plus three small
snapshots of the Astro pages:

```
.wordpress_production_backup_20260824/    1.1 GB  (wp-content 1019 MB, uploads 543 MB)
.seo_20260824_production_backup/          1.2 MB
.seo_20260824_production_candidate/       116 KB
.sunlit_ga4_explicit_backup_20260825/     3.0 MB
.sunlit_measurement_backup_20260825/      3.0 MB
```

## What was captured

| File | Size | MD5 |
|---|---|---|
| `sunlit-wordpress-2026-10-23.tar.gz` | 669,635,545 B (639 MB) | `24096d4d42cc946ef2a826ea70637841` |
| `sunlit-db-2026-10-23.sql.gz` | 5,053,030 B (4.8 MB) | `4df5e7607e5229330d11aecfa45ceee6` |

The database dump is MariaDB 10.11 for database `vhxmfujkar`, the database referenced by
the archived `wp-config.php`.

Local copies live at `D:\backups\cloudways\`. The dumps were transferred through R2
because the direct link from the server ran at ~15 KB/s while the server had 117 MB/s to
Cloudflare; temporary R2 objects were deleted after the download, and the server-side
working files were removed.

## Verification

- MD5 of both files matches between the server and the local copy byte for byte.
- The archive lists 45,948 entries, including `wp-config.php`, `wp-content` (41,663),
  `wp-includes` (3,122) and `wp-admin` (614); 4,871 files under `wp-content/uploads`.
- The SQL dump opens with `MariaDB dump 10.19` and `CREATE DATABASE`-level statements.

## Restoring, if it is ever needed

```bash
tar xzf sunlit-wordpress-2026-10-23.tar.gz -C /some/empty/root
mysql -u <user> -p <database> < <(gunzip -c sunlit-db-2026-10-23.sql.gz)
```

Then point a PHP webroot at `.wordpress_production_backup_20260824/` and correct
`wp-config.php` (the archived version points at the old Cloudways database host).

## Keep

Retain both files for at least a year: legacy WordPress URLs and their Search Console
history can resurface long after cutover. They are not in the repository and should not
be committed — the database contains customer enquiry data.
