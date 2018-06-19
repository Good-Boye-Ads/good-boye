console.log("\x1b[33m%s\x1b[0m", "API keys loaded successfully. *Cheer*");

exports.cloudinary = {
    cloud_name: process.env.CLOUDINARY_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_SECRET
};