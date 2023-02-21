import { Button } from '@chakra-ui/react'
import Link from "next/link"
import { useState } from 'react'


export default function BuyNowButton() {
    const [isLoading, setIsLoading] = useState(false)
    return (
        <Link href="/finalConfirmation">
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
            >
                Buy Now
            </Button>
        </Link>
    )
}