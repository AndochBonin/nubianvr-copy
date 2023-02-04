import { PrismaClient } from "@prisma/client"
import bcrypt from "bcrypt"
import { shopsData } from "./itemsData"

const prisma = new PrismaClient()

const run = async () => {
    await Promise.all(
        shopsData.map(async (shop) => {
            return prisma.shop.upsert({
                where: { name: shop.name },
                update: {},
                create: {
                    name: shop.name,
                    items: {
                        create: shop.items.map(item => ({
                            name: item.name,
                            price: item.price,
                            url: item.url
                        }))
                    }
                }
            })
        })
    )
    const salt = bcrypt.genSaltSync()
    const user = await prisma.user.upsert({
       where: { email: "user@test.com" },
        update: {},
        create: {
            email: "user@test.com",
            password: bcrypt.hashSync("password", salt)
        }
    })
}

run()
    .catch(e => {
        console.error(e)
        process.exit(1)
    })
    .finally(async () => {
        await prisma.$disconnect()
    })

