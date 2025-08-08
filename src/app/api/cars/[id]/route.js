import { unlink } from "node:fs/promises"
import { connectDb } from "../../../db/connect.js"
import { Car } from "../../../db/models/Car.js"

export async function GET(request, { params }) {
    const { id } = await params

    await connectDb()
    const car = await Car.findById(id)

    return Response.json(car)
}

export async function DELETE(request, { params }) {
    const { id } = await params

    const findCar = await Car.findById(id)
    unlink(`./public${findCar.image}`)

    await Car.findByIdAndDelete(id)

    return Response.json({ message: 'Delete ok!' }, { status:  200})
}