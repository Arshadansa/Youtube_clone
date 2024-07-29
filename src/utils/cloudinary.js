import { v2 as cloudinary } from "cloudinary";
import fs from "fs"; //form node

// Configuration
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_SECRET, // Click 'View Credentials' below to copy your API secret
});

//upload method

const uploadOnCloudinar = async () => {
  try {
    if (!localFilePath) return null;
    //upload
    const response = await cloudinary.uploader.upload(localFilePath, {
      resource_type: "auto",
    });
    //file has been uploaded successfully
    console.log("file has been uploaded successfully", response.url);
    return response;
  } catch (error) {
    //if file not uploaded then it remains in server so please unlink it bez of juck file
    fs.unlinkSync(localFilePath);
    return null;
  }
};

export { uploadOnCloudinar };
