import mongoose, { Schema } from "mongoose";

const brandSchema = new Schema({
    title: { type: String },
}, { timestamps: true })

export const Brand = mongoose.models.Brand || mongoose.model('Brand', brandSchema)