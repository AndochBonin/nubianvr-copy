import { Box, Flex, Heading, Text, Divider } from "@chakra-ui/react"
import Image from 'next/image'
import client from "../../lib/prismadb"

export default function ItemPage({ item }) {
    return (
        <Box mt={[5, 10]} mx={[2, 5, 10, 20]}>
            <Flex justify="center">
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
                    <Heading size="lg">GHC {item.price}</Heading>
                </Box>
            </Flex>
        </Box>
    )
}

export const getServerSideProps = async ({ query }) => {
    const item = await client.item.findUnique({
        where: {
            id: query.itemID
        }
    })

    return {
        props: {
            item
        }
    }
}
