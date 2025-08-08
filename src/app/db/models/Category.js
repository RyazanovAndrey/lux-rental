import mongoose, { Schema } from "mongoose";

const categorySchema = new Schema({
    title: { type: String },
    image: { type: String },
}, { timestamps: true })

export const Category = mongoose.models.Category || mongoose.model('Category', categorySchema)