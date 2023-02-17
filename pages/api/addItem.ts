import { PrismaClient } from '@prisma/client'
import { NextApiRequest, NextApiResponse } from "next"

const prisma = new PrismaClient()

export default async (req: NextApiRequest, res: NextApiResponse) => {
    if (req.method !== "POST") {
        return res.status(405).json({message: "Method not allowed"});
    }

    console.log("got to api")
    const itemData = JSON.parse(req.body)

    const savedItem = await prisma.item.create({
        data: itemData
    })

    res.json(savedItem)
}