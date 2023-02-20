import { Box, Heading } from "@chakra-ui/react"
import client from "../../lib/prismadb"
import { authOptions } from "../../pages/api/auth/[...nextauth]"
import { getServerSession } from "next-auth/next"
import { Item } from "@prisma/client"

export default function NewIn() {
    return (
        <Box width="100vw">
            <Heading as="h2" size="md" marginTop={8} marginBottom={4} paddingLeft={[2, 5, 10, 20]}>New In</Heading>
        </Box>
    )
}
