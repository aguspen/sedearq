const fs = require('fs');
const path = require('path');

const imageMappings = {
  '1. Sede Arq Casa Estancias- Fachada 22.jpg': 'casa-jj-hero.jpg',
  '3. Sede Arq Casa Estancias- Living 5.jpg': 'casa-jj-1.jpg',
  '6. Sede Arq Casa Estancias- Cocina 6.jpg': 'casa-jj-2.jpg',
  '10. Sede Arq Casa Estancias- Baño 1.jpg': 'casa-jj-3.jpg',
  '13. Sede Arq Casa Estancias- Baño 5.jpg': 'casa-jj-4.jpg',
  '16. Sede Arq Casa Estancias- Galeria 15.jpg': 'casa-jm-hero.jpg',
  '17. Sede Arq Casa Estancias- Contrafrente 4.jpg': 'casa-jm-1.jpg',
  'Hero-image.jpg': 'hero-image.jpg',
  'Sede-Equipo.jpg': 'equipo-sede.jpg',
  'LOGO SEDE - fondo blanco - WEB.jpg': 'logo-sede-blanco.jpg',
};

const publicDir = path.join(__dirname, '../public');

// Create backup directory
const backupDir = path.join(publicDir, 'backup');
if (!fs.existsSync(backupDir)) {
  fs.mkdirSync(backupDir);
}

// Backup and rename files
Object.entries(imageMappings).forEach(([oldName, newName]) => {
  const oldPath = path.join(publicDir, oldName);
  const newPath = path.join(publicDir, newName);
  const backupPath = path.join(backupDir, oldName);

  if (fs.existsSync(oldPath)) {
    // Create backup
    fs.copyFileSync(oldPath, backupPath);
    console.log(`Backed up ${oldName} to ${backupPath}`);

    // Rename file
    fs.renameSync(oldPath, newPath);
    console.log(`Renamed ${oldName} to ${newName}`);
  } else {
    console.log(`Warning: ${oldName} not found`);
  }
});

console.log('Image renaming complete. Backups are stored in the public/backup directory.'); 