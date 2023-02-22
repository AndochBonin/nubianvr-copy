import { PrismaClient } from '@prisma/client'
import { NextApiRequest, NextApiResponse } from "next"

const prisma = new PrismaClient()

export default async (req: NextApiRequest, res: NextApiResponse) => {
    if (req.method !== "POST") {
        return res.status(405).json({message: "Method not allowed"});
    }

    console.log("got to api")
    const itemData = JSON.parse(req.body)
    console.log(itemData.id)

    const savedItem = await prisma.item.update({
        where: {
            id: itemData.id,
        },
        data: itemData
    })

    res.json(savedItem)
}