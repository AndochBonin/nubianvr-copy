import {
    Box,
    Button,
    Flex,
    FormControl,
    FormLabel,
    Heading,
    Input,
    Select,
} from "@chakra-ui/react"

import { useState } from "react"
import { useSession } from "next-auth/react"


function refreshPage() {
    window.location.reload()
}


export default function AddItem() {

    const [name, setName] = useState("")
    const [color, setColor] = useState("")
    const [condition, setCondition] = useState("")
    const [category, setCategory] = useState("")
    const [sex, setSex] = useState("")
    const [price, setPrice] = useState(0)
    const [size, setSize] = useState("")
    const [image, setImage] = useState("")
    const [isLoading, setIsLoading] = useState(false)
    const { data: session, status } = useSession()

    const handleSubmit = async (e) => {
        console.log("got to handle submit")
        e.preventDefault()
        setIsLoading(true)

        const item = {
            name: name,
            color: color,
            condition: condition,
            category: category,
            sex: sex,
            price: price,
            size: size,
            url: "/",
            user: {
                connect: {
                    email: session.user.email
                }
            }
        }


        try {
            await saveItem(item)
        } catch (err) {
            console.log(err)
        }

        setIsLoading(false)
        refreshPage()
    }

    async function saveItem(item) {
        console.log("got to save item")
        const response = await fetch("/api/addItem", {
            method: "POST",
            body: JSON.stringify(item)
        })

        if (!response.ok) {
            throw new Error(response.statusText)
        }

        return await response.json()
    }

    return (
        <Flex width="100vw" justify="center">
            <Box bg="white" color="black" paddingX={[2, 5, 10, 20]}>
                <Box>
                    <Heading marginY={8}>Add an Item</Heading>
                    <form onSubmit={handleSubmit}>

                        <Box>
                            <Box pb={6}>
                                <FormControl>
                                    <FormLabel>Add Image</FormLabel>
                                    <Input
                                        type="file"
                                        borderRadius="2"
                                        focusBorderColor="black"
                                        _hover={{ borderColor: "black" }}
                                        accept="image/*"
                                        pt={1}
                                        pl={1}
                                        onChange={(e) => { setImage(e.target.value) }}
                                    />
                                </FormControl>
                            </Box>

                            <Flex justify="space-between">
                                <Box width="100%" mr={4} pb={6}>
                                    <FormControl>
                                        <FormLabel>Category</FormLabel>
                                        <Select
                                            placeholder="Select Category"
                                            size="md"
                                            borderRadius="2"
                                            focusBorderColor="black"
                                            _hover={{ borderColor: "black" }}
                                            onChange={(e) => { setCategory(e.target.value) }}
                                        >
                                            <option value='Tops'>Tops</option>
                                            <option value='Bottoms'>Bottoms</option>
                                            <option value='Dresses'>Dresses</option>
                                            <option value='Footwear'>Footwear</option>
                                            <option value='Accessories'>Accessories</option>
                                            <option value='Other'>Other</option>
                                        </Select>
                                    </FormControl>
                                </Box>

                                <Box width="100%" pb={6}>
                                    <FormControl>
                                        <FormLabel>Men / Women</FormLabel>
                                        <Select
                                            placeholder="Select Category"
                                            size="md"
                                            borderRadius="2"
                                            focusBorderColor="black"
                                            _hover={{ borderColor: "black" }}
                                            onChange={(e) => { setSex(e.target.value) }}
                                        >
                                            <option value='Menswear'>Menswear</option>
                                            <option value='Womenswear'>Womenswear</option>
                                        </Select>
                                    </FormControl>
                                </Box>
                            </Flex>
                        </Box>

                        <Box>
                            <Flex justify="space-between" width="100%">
                                <Box width="100%" mr={4} pb={6}>
                                    <FormControl>
                                        <FormLabel>Item Name</FormLabel>
                                        <Input
                                            type="text"
                                            placeholder="Item Name"
                                            borderRadius="2"
                                            focusBorderColor="black"
                                            _hover={{ borderColor: "black" }}
                                            onChange={(e) => { setName(e.target.value) }}
                                        />
                                    </FormControl>
                                </Box>
                                <Box width="100%" pb={6}>
                                    <FormControl>
                                        <FormLabel>Color</FormLabel>
                                        <Input
                                            placeholder="Color"
                                            borderRadius="2"
                                            focusBorderColor="black"
                                            _hover={{ borderColor: "black" }}
                                            onChange={(e) => { setColor(e.target.value) }}
                                        />
                                    </FormControl>
                                </Box>
                            </Flex>


                            <Flex justify="space-between" width="100%">
                                <Box width="100%" mr={4} pb={6}>
                                    <FormControl>
                                        <FormLabel>Condition</FormLabel>
                                        <Select
                                            placeholder="Select Condition"
                                            size="md"
                                            borderRadius="2"
                                            focusBorderColor="black"
                                            _hover={{ borderColor: "black" }}
                                            onChange={(e) => { setCondition(e.target.value) }}
                                        >
                                            <option value='New'>New</option>
                                            <option value='Barely Used'>Barely Used</option>
                                            <option value='Used'>Used</option>
                                        </Select>
                                    </FormControl>
                                </Box>
                                <Box width="100%" pb={6}>
                                    <FormControl>
                                        <FormLabel>Price (GHC)</FormLabel>
                                        <Input
                                            type="number"
                                            placeholder="Price"
                                            borderRadius="2"
                                            focusBorderColor="black"
                                            _hover={{ borderColor: "black" }}
                                            onChange={(e) => { setPrice(e.target.valueAsNumber) }}
                                        />
                                    </FormControl>
                                </Box>
                            </Flex>

                            <Flex justify="space-between" width="100%">
                                <Box width="100%" pb={6} mr={4}>
                                    <FormControl>
                                        <FormLabel>Size</FormLabel>
                                        <Input
                                            type="text"
                                            placeholder="Size"
                                            borderRadius="2"
                                            focusBorderColor="black"
                                            _hover={{ borderColor: "black" }}
                                            onChange={(e) => { setSize(e.target.value) }}
                                        />
                                    </FormControl>
                                </Box>

                                <Box width="100%">
                                    <FormControl>
                                        <FormLabel>Submit</FormLabel>
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
                                            Add Item
                                        </Button>
                                    </FormControl>
                                </Box>

                            </Flex>
                        </Box>

                    </form>
                </Box>
            </Box>
        </Flex>
    )
}