import { Box, Flex, Heading } from "@chakra-ui/react"
import AddItemButton from "../components/itemStatus/addItemButton"
import OrderTable from "../components/itemStatus/orderTable"
import VendorRevenueStat from "../components/itemStatus/vendorRevenueStat"


export default function Sell() {
    return (
        <Box width="100vw">
            <Flex wrap="wrap">
                <Box mt={10} mx={[2, 5, 10, 20]} overflowX="scroll">
                    <Flex justify="space-between">
                        <Box width="100%">
                            <VendorRevenueStat />
                        </Box>
                    </Flex>
                    <Box mt={10}>
                        <Heading color="black">Orders</Heading>
                        <OrderTable />
                    </Box>

                </Box>

                <Box mt={10} mx={[2, 5, 10, 20]}>
                    <Flex justify="space-between">
                        <Heading color="black" mr={[3,6]}>Your Items</Heading>
                        <Box mt={2}>
                            <AddItemButton />
                        </Box>
                    </Flex>
                </Box>
            </Flex>
        </Box>
    )
}

