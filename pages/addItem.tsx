import {
    Box,
    Button,
    Center,
    Divider,
    Flex,
    FormControl,
    FormLabel,
    Heading,
    Input,
    Link,
    Select,
    Text,
} from "@chakra-ui/react"


export default function AddItem() {
    return (
        <Box bg="white" color="black" paddingX={[2, 5, 10, 20]}>
            <Box>
                <Heading marginY={8}>Add an Item</Heading>
                <form>

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
                                        placeholder="Item Name"
                                        borderRadius="2"
                                        focusBorderColor="black"
                                        _hover={{ borderColor: "black" }}
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
                                        placeholder="Price"
                                        borderRadius="2"
                                        focusBorderColor="black"
                                        _hover={{ borderColor: "black" }}
                                    />
                                </FormControl>
                            </Box>
                        </Flex>

                        <Flex justify="space-between" width="100%">
                            <Box width="100%" pb={6} mr={4}>
                                <FormControl>
                                    <FormLabel>Size</FormLabel>
                                    <Input
                                        placeholder="Size"
                                        borderRadius="2"
                                        focusBorderColor="black"
                                        _hover={{ borderColor: "black" }}
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
    )
}