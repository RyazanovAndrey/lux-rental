import mongoose, { Schema } from "mongoose";

const userSchema = new Schema({
    login: { type: String },
    email: { type: String, require: true, unique: true },
    password: { type: String, require: true, unique: true }
}, { timestamps: true })

export const User = mongoose.models.User || mongoose.model('User', userSchema)