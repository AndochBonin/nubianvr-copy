import { NextApiRequest, NextApiResponse } from "next"
import client from '../../lib/prismadb'


export default async (req: NextApiRequest, res: NextApiResponse) => {
    if (req.method !== "POST") {
        return res.status(405).json({message: "Method not allowed"});
    }

    console.log("got to api")
    const itemData = JSON.parse(req.body)
    console.log(itemData)
    const savedItem = await client.item.create({
        data: itemData
    })

    res.json(savedItem)
}