import { PrismaClient } from '@prisma/client'
import { NextApiRequest, NextApiResponse } from "next"

const prisma = new PrismaClient()

export default async (req: NextApiRequest, res: NextApiResponse) => {
    if (req.method !== "POST") {
        return res.status(405).json({message: "Method not allowed"});
    }

    console.log("got to api")
    const itemData = JSON.parse(req.body)

    const deletedItem = await prisma.item.delete({
        where: {
            id: itemData.id
        }
    })

    res.json(deletedItem)
}


