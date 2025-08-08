import { connectDb } from "../../db/connect.js";
import { Brand } from "../../db/models/Brand.js";

export async function GET() {

    await connectDb()
    const brands = await Brand.find()

    return Response.json(brands)
}

export async function POST(request) {

    const { title } = await request.json()

    const brand = await Brand.create({ title })
    return Response.json(brand, { status: 201 })
}