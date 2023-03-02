import AddItemButton from "../components/itemStatus/addItemButton"
import OrderTable from "../components/itemStatus/orderTable"
import VendorRevenueStat from "../components/itemStatus/vendorRevenueStat"
import client from "../lib/prismadb"
import { getServerSession } from "next-auth/next"
import { useSession } from "next-auth/react"
import { authOptions } from "./api/auth/[...nextauth]"
import { AiFillDelete, AiFillEdit } from "react-icons/ai"
import ConfirmationButton from "../components/itemStatus/confirmationButton"
import StatusBadge from "../components/itemStatus/statusBadge"
import {
    Box,
    Card,
    CardBody,
    Flex,
    Heading,
    Text,
    Badge,
    Hide,
    Button,
    ButtonGroup,
    Table,
    Thead,
    Tbody,
    Tfoot,
    Tr,
    Th,
    Td,
    TableCaption,
    TableContainer,
} from "@chakra-ui/react"
import Image from "next/image"
import Link from "next/link"
import { Item } from "@prisma/client"
import SellInfoAccordion from "../components/sellInfoAccordion"

const Sell = ({ user }) => {

    const userItems = user.items
    let userOrders = []

    userItems.map(
        (item) => {
            const itemOrders = item.orders
            userOrders = userOrders.concat(itemOrders)
        }
    )

    console.log(userOrders)


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
                        <TableContainer border="1px" borderRadius={8} borderColor="gray.300" mt={5}>
                            <Table variant="simple" size={["sm"]} width="100%">
                                <TableCaption>Click item status to change</TableCaption>
                                <Thead bg="gray.100">
                                    <Tr>
                                        <Th>Item</Th>
                                        <Th>Status</Th>
                                        <Th>Confirm / Decline</Th>
                                    </Tr>
                                </Thead>
                                <Tbody>
                                    {
                                        userItems.map(
                                            (item) => (
                                                item.orders.map(
                                                    (order) => (
                                                        <Tr>
                                                            <Td>{item.name}</Td>
                                                            <Td>
                                                                <StatusBadge prop="unconfirmed" />
                                                            </Td>
                                                            <Td>
                                                                <ButtonGroup>
                                                                    <ConfirmationButton prop="confirm" />
                                                                    <ConfirmationButton prop="decline" />
                                                                </ButtonGroup>

                                                            </Td>
                                                        </Tr>
                                                    )
                                                )
                                            )
                                        )
                                    }
                                </Tbody>
                            </Table>
                        </TableContainer>
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
                                            Orders will be scheduled for delivery when <Badge colorScheme='green'>Confirmed</Badge> and
                                            you will be contacted by a delivery agent for pickup of items.
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
                            <Box m={2} key={item.id}>
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
                                            <Link
                                                href={{
                                                    pathname: "/editItem/[itemID]",
                                                    query: {
                                                        itemID: item.id
                                                    }
                                                }}
                                            >
                                                <Button>
                                                    <AiFillEdit />
                                                </Button>
                                            </Link>
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

    if (!session) return

    const user = await client.user.findUnique({ // finding the user
        where: {
            email: session.user.email
        },
        include: {
            items: {
                include: {
                    orders: true
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

export default Sell

