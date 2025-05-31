# Definir el directorio de trabajo
$publicDir = Join-Path $PSScriptRoot "..\public"
$backupDir = Join-Path $publicDir "backup"

# Crear directorio de backup si no existe
if (-not (Test-Path $backupDir)) {
    New-Item -ItemType Directory -Path $backupDir | Out-Null
    Write-Host "Created backup directory at $backupDir"
}

# Definir el mapeo de nombres de archivos
$imageMappings = @{
    "1. Sede Arq Casa Estancias- Fachada 22.jpg" = "casa-jj-hero.jpg"
    "3. Sede Arq Casa Estancias- Living 5.jpg" = "casa-jj-1.jpg"
    "6. Sede Arq Casa Estancias- Cocina 6.jpg" = "casa-jj-2.jpg"
    "10. Sede Arq Casa Estancias- Baño 1.jpg" = "casa-jj-3.jpg"
    "13. Sede Arq Casa Estancias- Baño 5.jpg" = "casa-jj-4.jpg"
    "16. Sede Arq Casa Estancias- Galeria 15.jpg" = "casa-jm-hero.jpg"
    "17. Sede Arq Casa Estancias- Contrafrente 4.jpg" = "casa-jm-1.jpg"
    "Hero-image.jpg" = "hero-image.jpg"
    "Sede-Equipo.jpg" = "equipo-sede.jpg"
    "LOGO SEDE - fondo blanco - WEB.jpg" = "logo-sede-blanco.jpg"
    "1. Sede Arq Casa Estancias- Fachada 2.jpg" = "casa-dd-hero.jpg"
    "18. Sede Arq Casa Estancias- Arq 9.jpg" = "reforma-callao-hero.jpg"
}

# Procesar cada archivo
foreach ($oldName in $imageMappings.Keys) {
    $oldPath = Join-Path $publicDir $oldName
    $newPath = Join-Path $publicDir $imageMappings[$oldName]
    $backupPath = Join-Path $backupDir $oldName

    if (Test-Path $oldPath) {
        # Crear backup
        Copy-Item -Path $oldPath -Destination $backupPath -Force
        Write-Host "Backed up $oldName to $backupPath"

        # Renombrar archivo
        Rename-Item -Path $oldPath -NewName $imageMappings[$oldName] -Force
        Write-Host "Renamed $oldName to $($imageMappings[$oldName])"
    } else {
        Write-Host "Warning: $oldName not found"
    }
}

Write-Host "Image renaming complete. Backups are stored in the public/backup directory." 