const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const inputDir = '.';
const outputDir = path.join('public', 'images');

// Ensure output directory exists
if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
}

const files = fs.readdirSync(inputDir).filter(file => file.startsWith('SBM COMPANY PROFILE 2024 _page-') && file.endsWith('.jpg'));

files.forEach(async (file) => {
    const pageNum = file.match(/page-(\d+)/)[1];
    const outputFilename = `sbm-profile-page-${pageNum}.webp`;
    const outputPath = path.join(outputDir, outputFilename);

    console.log(`Processing ${file} -> ${outputFilename}`);

    try {
        await sharp(path.join(inputDir, file))
            .webp({ quality: 80 })
            .toFile(outputPath);
        console.log(`Successfully processed ${file}`);
    } catch (error) {
        console.error(`Error processing ${file}: ${error}`);
    }
});
