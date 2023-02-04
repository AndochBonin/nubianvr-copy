import React from "react"
import { Button } from "@chakra-ui/react"
import Link from "next/link"
import SignupButton from "./signupButton"

export default function LoginButton() {


    return (
        <Link href="/login">
            <Button
                size="sm"
                colorScheme="BlackAlpha"
                variant="outline"
                borderRadius="0"
                _hover={{ bg: "black", color: "white" }}
                _focus={{ borderColor: "black" }}
            >
                Login
            </Button>
        </Link>
    )
}