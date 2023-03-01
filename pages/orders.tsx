import client from "../lib/prismadb"
import { getServerSession } from "next-auth/next"
import { authOptions } from "./api/auth/[...nextauth]"
import { Box, Button, Card, CardBody, Flex, Heading, Link, Stack, Text } from "@chakra-ui/react"
import Image from "next/image"
import { AiFillEdit } from "react-icons/ai"


const Orders = ({ user }) => {

    const userOrders = user.orders

    return (

        <Flex justify="center" width="100vw" align="center" height="calc(100vh - 100px)">
            <Box>
                {
                    userOrders.map((order) => (



                        <Box m={2} key={order.id}>
                            <Card variant="outline" direction="row" border="1px" borderColor="gray.300">
                                <Box>
                                    <Image
                                        src="/../public/noimage.png"
                                        height="80px"
                                        width="80px"
                                        alt=""
                                    />
                                </Box>
                                <CardBody>

                                    <Stack direction="row" spacing="48px">
                                        <Box>
                                            <Text>{order.item.name}</Text>
                                        </Box>
                                        <Box>
                                            <Text>Ordered on: {order.createdAt.toLocaleDateString("en-GH")}</Text>
                                        </Box>
                                    </Stack>

                                </CardBody>
                            </Card>
                        </Box>
                    ))
                }
            </Box>

        </Flex>

    )

}

export const getServerSideProps = async (context) => { // finding all user orders

    const session = await getServerSession(context.req, context.res, authOptions)

    if (!session) return

    const user = await client.user.findUnique({ // finding the user
        where: {
            email: session.user.email
        },
        include: {
            orders: {
                include: {
                    item: true
                }
            }
        }
    })

    return {
        props: {
            user
        }
    }
}

export default Orders