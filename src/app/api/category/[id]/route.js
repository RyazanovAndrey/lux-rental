import { unlink } from "node:fs/promises"
import { connectDb } from "../../../db/connect.js"
import { Category } from "../../../db/models/Category.js"

export async function DELETE(request, { params }) {
    const { id } = await params

    const findCategory = await Category.findById(id)
    unlink(`./public${findCategory.image}`)

    await Category.findByIdAndDelete(id)

    return Response.json({ message: 'Delete ok!' }, { status:  200})
}