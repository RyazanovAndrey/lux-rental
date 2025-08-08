import { writeFile } from "node:fs/promises";
import { connectDb } from "../../db/connect.js";
import { Category } from "../../db/models/Category.js";


// GET
export async function GET() {
    await connectDb()
    const category = await Category.find()

    return Response.json(category)
}

// POST
export async function POST(request) {
    const formData = await request.formData()

    const image = formData.get('image')
    const title = formData.get('title')

    const arrayBuffer = await image.arrayBuffer()
    const buffer = Buffer.from(arrayBuffer)

    const newName = Date.now()

    const path = `./public/category/${newName}_${image.name}`
    await writeFile(path, buffer)

    const ImageCategory = `/category/${newName}_${image.name}`

    const newCategory = {
        title,
        image: ImageCategory
    }

    await Category.create(newCategory)
    return Response.json({ message: 'ok' }, { status: 201 })
}