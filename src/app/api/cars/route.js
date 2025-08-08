import { connectDb } from "../../db/connect.js";
import { Car } from "../../db/models/Car.js";
import { writeFile } from "node:fs/promises";

// GET
export async function GET(request) {
    await connectDb()
    const cars = await Car.find()

    return Response.json(cars)
}


// POST
export async function POST(request) {

    const formData = await request.formData()

    const { title, desc, people, doors, trans, bags, brand, price, category, image } = Object.fromEntries(formData)

    const fileName = Date.now()

    const arrayBuffer = await image.arrayBuffer()
    const buffer = Buffer.from(arrayBuffer)

    const path = `./public/cars/${fileName}_${image.name}`
    await writeFile(path, buffer)

    const imageName = `/cars/${fileName}_${image.name}`

    const newCar = {
        title, desc, people, doors, trans, bags, brand, price, category, image: imageName
    }

    await Car.create(newCar)
    return Response.json({ message: '' }, { status: 201 })
}