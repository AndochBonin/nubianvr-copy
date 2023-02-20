import { Box, Heading } from "@chakra-ui/react"
import client from "../../lib/prismadb"

export default function ItemPage({ item }) {
    return (
        <Box>
            <Heading size="sm">{item.name}</Heading>
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
