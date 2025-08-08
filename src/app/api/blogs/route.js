import { writeFile } from "node:fs/promises";
import { connectDb } from "../../db/connect.js";
import { Blog } from "../../db/models/Blog.js";

export async function GET() {

    await connectDb()
    const blog = await Blog.find()

    return Response.json(blog)
}

export async function POST(request) {
    const formData = await request.formData()

    const image = formData.get('image')

    const arrayBuffer = await image.arrayBuffer()
    const buffer = Buffer.from(arrayBuffer)

    const currentName = Date.now()

    const path = `./public/blog/${currentName}_${image.name}`
    await writeFile(path, buffer)

    const newBlogItem = {
        title: formData.get('title'),
        content: formData.get('content'),
        image: `/blog/${currentName}_${image.name}`
    }

    await Blog.create(newBlogItem)

    return Response.json({ messsage: 'ok!' }, { status: 201 })
}