import fs from 'fs';
import path from 'path';
import sharp from 'sharp';

const directories = [
    path.join(process.cwd(), 'attached_assets'),
    path.join(process.cwd(), 'client', 'public')
];

const supportedExtensions = ['.png', '.jpg', '.jpeg'];

let totalBytesSaved = 0;
let filesProcessed = 0;

async function processDirectory(dir) {
    if (!fs.existsSync(dir)) return;

    const files = fs.readdirSync(dir);
    for (const file of files) {
        const fullPath = path.join(dir, file);
        const stat = fs.statSync(fullPath);

        if (stat.isDirectory()) {
            if (file === 'stock_images') {
                await processDirectory(fullPath);
            }
        } else {
            const ext = path.extname(file).toLowerCase();
            if (supportedExtensions.includes(ext)) {
                const outPath = path.join(dir, path.basename(file, path.extname(file)) + '.webp');

                console.log(`Converting ${file} to WebP...`);
                try {
                    // Keep quality between 80-90%
                    await sharp(fullPath)
                        .webp({ quality: 85 })
                        .toFile(outPath);

                    const originalSize = stat.size;
                    const newSize = fs.statSync(outPath).size;

                    totalBytesSaved += (originalSize - newSize);
                    filesProcessed++;

                    // Delete original
                    fs.unlinkSync(fullPath);
                } catch (err) {
                    console.error(`Error processing ${file}:`, err);
                }
            }
        }
    }
}

async function run() {
    for (const dir of directories) {
        await processDirectory(dir);
    }

    const mbSaved = (totalBytesSaved / (1024 * 1024)).toFixed(2);
    console.log(`\nConversion complete!`);
    console.log(`Processed ${filesProcessed} images files.`);
    console.log(`Saved approx ${mbSaved} MB of space.`);
}

run();
