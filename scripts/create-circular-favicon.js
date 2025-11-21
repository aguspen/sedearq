const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

async function createCircularFavicon() {
  const inputPath = path.join(__dirname, '../app/icon.png');
  const tempPath = path.join(__dirname, '../app/icon-temp.png');
  
  try {
    // Leer la imagen
    const image = sharp(inputPath);
    const metadata = await image.metadata();
    const size = Math.min(metadata.width, metadata.height);
    
    // Crear una máscara circular usando SVG
    const svgMask = `
      <svg width="${size}" height="${size}">
        <circle cx="${size / 2}" cy="${size / 2}" r="${size / 2}" fill="white"/>
      </svg>
    `;
    
    // Aplicar la máscara circular y redimensionar si es necesario
    await image
      .resize(size, size, {
        fit: 'cover',
        position: 'center'
      })
      .composite([
        {
          input: Buffer.from(svgMask),
          blend: 'dest-in'
        }
      ])
      .png()
      .toFile(tempPath);
    
    // Reemplazar el archivo original con el procesado
    fs.unlinkSync(inputPath);
    fs.renameSync(tempPath, inputPath);
    
    console.log('✅ Favicon circular creado exitosamente en app/icon.png');
  } catch (error) {
    console.error('❌ Error al crear el favicon circular:', error);
    // Limpiar archivo temporal si existe
    if (fs.existsSync(tempPath)) {
      fs.unlinkSync(tempPath);
    }
    process.exit(1);
  }
}

createCircularFavicon();
