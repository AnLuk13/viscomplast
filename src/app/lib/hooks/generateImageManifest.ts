const fs = require("fs");
const path = require("path");
const { v4: uuidv4 } = require("uuid"); // Import uuid for unique IDs

const assetsDir = path.join(process.cwd(), "public/assets/images");
const outputFile = path.join(process.cwd(), "src/app/lib/assets-manifest.json");

const isImageFile = (file) => /\.(png|jpe?g|svg|gif)$/i.test(file);

function generateManifest() {
  const manifest = {};

  fs.readdirSync(assetsDir).forEach((folder) => {
    const folderPath = path.join(assetsDir, folder);

    if (fs.lstatSync(folderPath).isDirectory()) {
      const files = fs
        .readdirSync(folderPath)
        .filter(isImageFile)
        .map((file) => ({
          id: uuidv4(), // Generate a unique ID
          src: `/assets/images/${folder}/${file}`, // Path to the image
          alt: file.replace(/\.(png|jpe?g|svg|gif)$/i, ""), // Generate alt text by removing the file extension
        }));

      manifest[folder] = files;
    }
  });

  fs.writeFileSync(outputFile, JSON.stringify(manifest, null, 2), "utf-8");
  console.log("Image manifest generated:", outputFile);
}

generateManifest();
