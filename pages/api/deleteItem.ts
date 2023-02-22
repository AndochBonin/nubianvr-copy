import { NextApiRequest, NextApiResponse } from "next"
import client from '../../lib/prismadb'


export default async (req: NextApiRequest, res: NextApiResponse) => {
    if (req.method !== "POST") {
        return res.status(405).json({message: "Method not allowed"});
    }

    console.log("got to api")
    const itemData = JSON.parse(req.body)

    const deletedItem = await client.item.delete({
        where: {
            id: itemData.id
        }
    })

    res.json(deletedItem)
}


