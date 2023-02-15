import { Button } from '@chakra-ui/react'
import Link from "next/link"

export default function SellButton() {
    return (
        <Link href="/sell">
            <Button
                size="sm"
                colorScheme="BlackAlpha"
                variant="outline"
                borderRadius="0"
                _hover={{ bg: "black", color: "white" }}
                _focus={{ borderColor: "black" }}
                px={5}
            >
                Sell
            </Button>
        </Link>
    )
}