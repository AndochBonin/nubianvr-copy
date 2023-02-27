import {
    Box,
    Button,
    Flex,
    FormControl,
    FormErrorMessage,
    FormLabel,
    Heading,
    Input,
    NumberInput,
    NumberInputField,
    Select,
} from "@chakra-ui/react"


import Link from "next/link"
import { useState, useEffect } from "react"
import { useSession } from "next-auth/react"
import client from "../../lib/prismadb"
import { AiFillDelete } from "react-icons/ai"
import { useRouter } from "next/router"


function refreshPage() {
    window.location.reload()
}




export default function EditItem({ item }) {

    const { push } = useRouter()

    const itemID = item.id
    const [name, setName] = useState(item.name)
    const [color, setColor] = useState(item.color)
    const [condition, setCondition] = useState(item.condition)
    const [category, setCategory] = useState(item.categery)
    const [sex, setSex] = useState(item.sex)
    const [price, setPrice] = useState(item.price)
    const [size, setSize] = useState(item.size)
    const [image, setImage] = useState("")
    const [isLoading, setIsLoading] = useState(false)
    const { data: session, status } = useSession()


    const isFormError = () => {
        if (name != "" && !name.match(/^[a-z\d\-\s]+$/i)) return true
        return false
    }

    const handleSubmit = async (e) => {
        console.log("got to handle submit")
        e.preventDefault()
        setIsLoading(true)

        const item = {
            id: itemID,
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
        const response = await fetch("../api/editItem", {
            method: "POST",
            body: JSON.stringify(item)
        })

        if (!response.ok) {
            throw new Error(response.statusText)
        }

        return await response.json()
    }


    async function deleteItem(item) {
        console.log("got to delete item")
        const response = await fetch("../api/deleteItem", {
            method: "POST",
            body: JSON.stringify(item)
        })
        if (!response.ok) {
            throw new Error(response.statusText)
        }
        return await response.json()
    }

    async function handleDelete() {
        console.log("got to handle delete")
        setIsLoading(true)

        const item = {
            id: itemID,
            name: name,
            color: color,
            condition: condition,
            category: category,
            sex: sex,
            price: parseFloat(price),
            size: size,
            url: "/",
            user: {
                connect: {
                    email: session.user.email
                }
            }
        }


        try {
            await deleteItem(item)
        } catch (err) {
            console.log(err)
        }
        setIsLoading(false)
        push("/sell")
    }



    return (
        <Flex width="100vw" justify="center">
            <Box bg="white" color="black" paddingX={[2, 5, 10, 20]}>
                <Box>
                    <Flex marginY={8}>
                        <Heading>Edit Item: {item.name}</Heading>
                        <Button
                            marginX={4}
                            mt={2}
                            colorScheme="red"
                            onClick={handleDelete}
                            isLoading={isLoading}
                        >
                            <AiFillDelete color="white" />
                        </Button>
                    </Flex>
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
                                    <FormControl isRequired>
                                        <FormLabel>Category</FormLabel>
                                        <Select
                                            placeholder={item.category}
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
                                    <FormControl isRequired>
                                        <FormLabel>Men / Women</FormLabel>
                                        <Select
                                            placeholder={item.sex}
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
                                    <FormControl isRequired isInvalid={isFormError()}>
                                        <FormLabel>Item Name</FormLabel>
                                        <Input
                                            type="text"
                                            placeholder={item.name}
                                            borderRadius="2"
                                            focusBorderColor="black"
                                            _hover={{ borderColor: "black" }}
                                            onChange={(e) => { setName(e.target.value) }}
                                        />
                                        {!isFormError ? (
                                            <></>
                                        ) : (
                                            <FormErrorMessage>Name should only contain alphanumeric characters.</FormErrorMessage>
                                        )}
                                    </FormControl>
                                </Box>
                                <Box width="100%" pb={6}>
                                    <FormControl isRequired>
                                        <FormLabel>Color</FormLabel>
                                        <Input
                                            placeholder={item.color}
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
                                    <FormControl isRequired>
                                        <FormLabel>Condition</FormLabel>
                                        <Select
                                            placeholder={item.condition}
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
                                    <FormControl isRequired>
                                        <FormLabel>Price (GHC)</FormLabel>
                                        <NumberInput min={0} precision={2}>
                                            <NumberInputField
                                                placeholder={item.price}
                                                borderRadius="2"
                                                borderColor="black"
                                                _hover={{ borderColor: "black" }}
                                                onChange={(e) => {
                                                    setPrice(e.target.value)
                                                }}
                                            />
                                        </NumberInput>
                                    </FormControl>
                                </Box>
                            </Flex>

                            <Flex justify="space-between" width="100%">
                                <Box width="100%" pb={6} mr={4}>
                                    <FormControl isRequired>
                                        <FormLabel>Size</FormLabel>
                                        {
                                            category == "Footwear" ?
                                                <NumberInput max={50} min={36} precision={2}>
                                                    <NumberInputField
                                                        placeholder="Shoe Size"
                                                        borderRadius="2"
                                                        borderColor="black"
                                                        _hover={{ borderColor: "black" }}
                                                        onChange={(e) => { setSize(e.target.value) }}
                                                    />
                                                </NumberInput>

                                                :

                                                <Select
                                                    placeholder="Select Size"
                                                    size="md"
                                                    borderRadius="2"
                                                    focusBorderColor="black"
                                                    _hover={{ borderColor: "black" }}
                                                    onChange={(e) => { setSize(e.target.value) }}
                                                >
                                                    <option value='XS'>XS</option>
                                                    <option value='S'>S</option>
                                                    <option value='M'>M</option>
                                                    <option value='L'>L</option>
                                                    <option value='XL'>XL</option>
                                                    <option value='XXL'>XXL</option>
                                                </Select>
                                        }
                                    </FormControl>
                                </Box>

                                <Box width="100%">
                                    <FormControl>
                                        <FormLabel>Submit</FormLabel>
                                        <Button
                                            size="md"
                                            borderColor="black"
                                            bg="white"
                                            color="black"
                                            variant="outline"
                                            borderRadius="0"
                                            _hover={{ bg: "black", color: "white" }}
                                            _focus={{ borderColor: "black" }}
                                            width="100%"
                                            type="submit"
                                            isLoading={isLoading}
                                        >
                                            Save Changes
                                        </Button>
                                    </FormControl>
                                </Box>

                            </Flex>

                            <Box width="100%">
                                <Link href="/sell">
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
                                    >
                                        Cancel
                                    </Button>
                                </Link>
                            </Box>
                        </Box>

                    </form>
                </Box>
            </Box>
        </Flex>
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