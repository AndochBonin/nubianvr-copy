import AddItemButton from "../components/itemStatus/addItemButton"
import OrderTable from "../components/itemStatus/orderTable"
import VendorRevenueStat from "../components/itemStatus/vendorRevenueStat"
import client from "../lib/prismadb"
import { getServerSession } from "next-auth/next"
import { authOptions } from "./api/auth/[...nextauth]"
import {
    Box,
    Card,
    CardBody,
    Flex,
    Heading,
    Stack,
    Text,
    Badge,
    Show,
    Hide
} from "@chakra-ui/react"
import Image from "next/image"
import { Item } from "@prisma/client"
import SellInfoAccordion from "../components/sellInfoAccordion"

const Sell = ({ userItems }) => {
    return (
        <Box width="100vw">
            <Flex wrap="wrap-reverse" justify="space-between">

                <Box mt={[5, 10]} mx={[2, 5, 10, 20]} overflowX="scroll">
                    <Flex justify="space-between">
                        <Box width="100%">
                            <VendorRevenueStat />
                        </Box>
                    </Flex>
                    <Box mt={[5, 10]}>
                        <Heading color="black">Orders</Heading>
                        <OrderTable />
                    </Box>
                </Box>

                <Box mt={[2, 10]} mx={[2, 5, 10, 20]}>
                    <Box>
                        <SellInfoAccordion />
                    </Box>

                    <Hide below='md'>
                        <Box mt="120px" width="100%">
                            <Heading size="lg">Announcements</Heading>
                            <Flex justify="space-between" wrap="wrap">
                                <Box width={["200px", "350px"]} mt={5} border="1px" borderRadius="8px" padding={5} borderColor="gray.500">
                                    <Heading size='md' mb='2'>
                                        Item Approval
                                    </Heading>
                                    <Box>
                                        <Text>
                                            Items added by sellers will undergo a vetting process to make sure the details are correct before being uploaded to the site.
                                        </Text>
                                    </Box>
                                </Box>
                                <Box width={["200px", "350px"]} mt={5} border="1px" borderRadius="8px" padding={5} borderColor="gray.500">
                                    <Heading size='md' mb='2'>
                                        Delivery
                                    </Heading>
                                    <Box>
                                        <Text>
                                            Confirmed Orders will be scheduled for delivery and you will be contacted by a delivery company for pickup of items.
                                        </Text>
                                    </Box>
                                </Box>
                            </Flex>
                        </Box>
                    </Hide>
                </Box>
            </Flex>
            <Box mt={10} mx={[2, 5, 10, 20]}>
                <Flex justify="space-between">
                    <Heading color="black" mr={[3, 6]}>Your Items</Heading>
                    <Box mt={2}>
                        <AddItemButton />
                    </Box>
                </Flex>

                <Flex pt={5} wrap="wrap" justify={["center", "center", "flex-start"]}>
                    {
                        userItems.map((item: Item) => (
                            <Box m={2}>
                                <Card>
                                    <CardBody>
                                        <Image
                                            src="/../public/noimage.png"
                                            height="200px"
                                            width="200px"
                                            alt=""
                                        />

                                        <Heading size="sm">{item.name}</Heading>
                                        <Text>{item.color}</Text>
                                        <Flex justify="space-between">
                                            <Text as="b">GHC {item.price}</Text>
                                        </Flex>
                                    </CardBody>
                                </Card>
                            </Box>
                        ))
                    }
                </Flex>

            </Box>
        </Box>
    )
}


export const getServerSideProps = async (context) => { // finding all user items

    const session = await getServerSession(context.req, context.res, authOptions)


    const user = await client.user.findUnique({ // finding the user
        where: {
            email: session.user.email
        }
    })
    const userID = user.id  // getting user id

    const userItems = await client.item.findMany({ // finding all items where userID matches current users id
        where: {
            userId: userID
        }
    })

    return {
        props: {
            userItems
        }
    }
}

export default Sell

