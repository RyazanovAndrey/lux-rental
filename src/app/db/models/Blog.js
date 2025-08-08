import mongoose, { Schema } from "mongoose";

const blogSchema = new Schema({
    title: { type: String },
    content: { type: String },
    image: { type: String },
    date: {type: Date, default: Date.now() }
}, { timestamps: true })

export const Blog = mongoose.models.Blog || mongoose.model('Blog', blogSchema)