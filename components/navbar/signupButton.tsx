import React from "react"
import { Button } from '@chakra-ui/react'
import Link from "next/link"

export default function SignupButton() {



    return (
        <Link href="/signup">
            <Button
                size="sm"
                bgColor="black"
                color="white"
                borderColor="black"
                variant="outline"
                borderRadius="0"
                _hover={{ bg: "black" }}
                _focus={{ borderColor: "black" }}
            >
                Sign Up
            </Button>
        </Link>
    )
}