import { unlink } from "node:fs/promises"
import { connectDb } from "../../../db/connect.js"
import { Brand } from "../../../db/models/Brand.js"

export async function DELETE(request, { params }) {
    const { id } = await params

    const findBrand = await Brand.findById(id)
    unlink(`./public${findBrand.image}`)

    await Brand.findByIdAndDelete(id)

    return Response.json({ message: 'Delete ok!' }, { status:  200})
}