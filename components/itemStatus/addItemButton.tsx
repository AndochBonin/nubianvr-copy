import { Button } from '@chakra-ui/react'
import { AiOutlinePlus } from 'react-icons/ai'
import Link from "next/link"

export default function AddItemButton() {
    return (
        <Link href="addItem">
            <Button
                size="sm"
                colorScheme="BlackAlpha"
                variant="outline"
                borderRadius="0"
                _hover={{ bg: "black", color: "white" }}
                _focus={{ borderColor: "black" }}
                leftIcon={<AiOutlinePlus/>}
            >
                Add Item
            </Button>
        </Link>
    )
}