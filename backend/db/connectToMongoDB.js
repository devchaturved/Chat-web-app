import mongoose from "mongoose";

const connectToMongoDB = async () => {
    try {
        await mongoose.connect(process.env.MongoDB_url);
        console.log("Connected to MongoDB");
    } catch (error) {
        console.log("Error connection to MongoDB",error.massage);
    }
};

export default connectToMongoDB;