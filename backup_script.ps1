# GatsbyJS Upgrade Backup Script
# This script creates a backup before the upgrade process

$timestamp = Get-Date -Format "yyyyMMdd_HHmmss"
$projectDir = "D:\DEV\JS\topidesta"
$backupDir = "D:\DEV\JS\topidesta_backup_$timestamp"

Write-Host "Creating backup of GatsbyJS project..." -ForegroundColor Cyan
Write-Host "Source: $projectDir" -ForegroundColor Gray
Write-Host "Destination: $backupDir" -ForegroundColor Gray

# Create backup directory
New-Item -ItemType Directory -Path $backupDir -Force | Out-Null

# Copy all files except node_modules, .cache, and public
Write-Host "`nCopying project files..." -ForegroundColor Yellow

$excludeDirs = @('node_modules', '.cache', 'public', '.git')
$items = Get-ChildItem -Path $projectDir -Exclude $excludeDirs

foreach ($item in $items) {
    Copy-Item -Path $item.FullName -Destination $backupDir -Recurse -Force
    Write-Host "  Copied: $($item.Name)" -ForegroundColor Green
}

Write-Host "`nBackup completed successfully!" -ForegroundColor Green
Write-Host "Backup location: $backupDir" -ForegroundColor Cyan
Write-Host "`nYou can restore from this backup if needed." -ForegroundColor Gray
