import { Box, Flex, Heading, Text, Divider, Button,  } from "@chakra-ui/react"
import Image from 'next/image'
import Link from "next/link"
import { useState } from "react"
import client from "../../lib/prismadb"
import { useSession } from "next-auth/react"
import { useRouter } from "next/router"


export default function ItemPage({ item }) {

    const [isLoading, setIsLoading] = useState(false)
    const { data: session, status } = useSession()
    const { push } = useRouter()

    const handleBuyNow = async () => {
        setIsLoading(true)



        if (!session) {
            push("/login")
            return
        }

        if (session.user.email == item.user.email) {
            alert("This item was posted by you!")
            setIsLoading(false)
            return
        }

        const order = {
            orderType: "outgoing",
            user: {
                connect: {
                    email: session.user.email
                }
            },
            item: {
                connect: {
                    id: item.id
                }
            }
        }

        try {
            await saveOrder(order)
        } catch (err) {
            console.log(err)
        }
        setIsLoading(false)
        push("/")
    }

    async function saveOrder(order) {
        console.log("got to save order")
        const response = await fetch("/api/addOrder", {
            method: "POST",
            body: JSON.stringify(order)
        })

        if (!response.ok) {
            throw new Error(response.statusText)
        }

        return await response.json()
    }

    return (
        <Box mt={[5, 10]} mx={[2, 5, 10, 20]}>
            <Flex justify="center" wrap="wrap">
                <Box mr={[2, 5, 10, 20]}>
                    <Heading size="xl" mb={10}>{item.name}</Heading>
                    <Image
                        src="/../public/noimage.png"
                        height="600px"
                        width="600px"
                        alt=""
                    />
                </Box>

                <Box mt={[5, 20]} mx={[2, 5, 10, 20]}>
                    <Heading size="md" mb={5}>{item.name}</Heading>
                    <Heading size="sm" mb={2}>{item.sex} - {item.category}</Heading>
                    <Text mb={2}>Color - {item.color}</Text>
                    <Text mb={2}>Size - {item.size}</Text>
                    <Text mb={5}>Condition - {item.condition}</Text>
                    <Heading size="lg" mb={5}>GHC {item.price}</Heading>


                    <Button
                        size="md"
                        borderColor="black"
                        bg="black"
                        color="white"
                        variant="outline"
                        borderRadius="0"
                        _hover={{ bg: "white", color: "black" }}
                        _focus={{ borderColor: "black" }}
                        width="100%"
                        type="submit"
                        isLoading={isLoading}
                        onClick={handleBuyNow}
                    >
                        Buy Now
                    </Button>

                </Box>
            </Flex>
        </Box>
    )
}

export const getServerSideProps = async ({ query }) => {
    const item = await client.item.findUnique({
        where: {
            id: query.itemID
        },
        include: {
            user: true
        }
    })

    return {
        props: {
            item
        }
    }
}
