import { unlink } from "node:fs/promises"
import { connectDb } from "../../../db/connect.js"
import { Blog } from "../../../db/models/Blog.js"

export async function GET(request, { params }) {

    const { id } = await params

    connectDb()
    const blog = await Blog.findById(id)

    return Response.json(blog)
}

export async function DELETE(request, { params }) {
    const { id } = await params

    const findCar = await Blog.findById(id)
    unlink(`./public${findCar.image}`)

    await Blog.findByIdAndDelete(id)

    return Response.json({ message: 'Delete ok!' }, { status:  200})
}