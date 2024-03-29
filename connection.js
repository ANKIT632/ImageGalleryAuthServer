import mongoose from "mongoose";

export default async function connectDB() {
    try {
        await mongoose.connect("mongodb://localhost/ImageGallery");
        console.log("Connected to DB");
    } catch (error) {
        console.log("Error connecting to DB", error);
    }
}