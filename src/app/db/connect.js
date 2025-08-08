import mongoose from "mongoose";

export const connectDb = async () => {
    try {
        await mongoose.connect(process.env.MONGO)
    } catch (error) {
        console.log('Error data...')
    }
}