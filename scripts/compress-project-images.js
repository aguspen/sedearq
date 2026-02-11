const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

// Proyectos a comprimir
const PREFIXES = [
  'CASA-GOLF-',
  'CASA-AB-',
  'CASA-FC-',
  'CASA-VALERIA-',
];

// Configuración básica de compresión
const MAX_WIDTH = 2000; // px
const QUALITY = 80; // JPG quality 0–100

async function compressImage(filePath) {
  const tempPath = filePath + '.tmp';

  try {
    const image = sharp(filePath);
    const metadata = await image.metadata();

    let pipeline = image;

    if (metadata.width && metadata.width > MAX_WIDTH) {
      pipeline = pipeline.resize(MAX_WIDTH, null, {
        fit: 'inside',
        withoutEnlargement: true,
      });
    }

    await pipeline
      .jpeg({ quality: QUALITY })
      .toFile(tempPath);

    fs.unlinkSync(filePath);
    fs.renameSync(tempPath, filePath);

    console.log(`✅ Comprimida: ${path.basename(filePath)} (ancho máx ${MAX_WIDTH}px, calidad ${QUALITY})`);
  } catch (err) {
    console.error(`❌ Error al comprimir ${filePath}:`, err.message);
    if (fs.existsSync(tempPath)) {
      fs.unlinkSync(tempPath);
    }
  }
}

async function run() {
  const publicDir = path.join(__dirname, '../public');
  const files = fs.readdirSync(publicDir);

  const targetFiles = files.filter((name) => {
    return (
      name.toLowerCase().endsWith('.jpg') &&
      PREFIXES.some((prefix) => name.startsWith(prefix))
    );
  });

  if (targetFiles.length === 0) {
    console.log('No se encontraron imágenes de los proyectos objetivo para comprimir.');
    return;
  }

  console.log('Comenzando compresión de imágenes para:', PREFIXES.join(', '));

  for (const name of targetFiles) {
    const fullPath = path.join(publicDir, name);
    // eslint-disable-next-line no-await-in-loop
    await compressImage(fullPath);
  }

  console.log('✅ Listo. Imágenes comprimidas.');
}

run().catch((err) => {
  console.error('Error inesperado en el script de compresión:', err);
  process.exit(1);
});

