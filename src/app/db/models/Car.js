import mongoose, { Schema } from "mongoose";

const carSchema = new Schema({
    image: { type: String },
    title: { type: String },
    people: { type: String },
    doors: { type: String },
    trans: { type: String },
    bags: { type: String },
    brand: { type: String },
    desc: { type: String },
    price: { type: String },
    category: { type: String }
}, { timestamps: true })

export const Car = mongoose.models.Car || mongoose.model('Car', carSchema)