import { Box, Flex, Text, Heading } from "@chakra-ui/react"
import Image from "next/image"


export default function Categories() {

    const categories1 = [
        {
            name: "Tops",
            image: "/../public/tops1.png",
        },
        {
            name: "Bottoms",
            image: "/../public/bottoms1.png",
        },
        {
            name: "Dresses",
            image: "/../public/dresses1.png",
        }
    ]

    const categories2 = [
        {
            name: "Footwear",
            image: "/../public/footwear1.png",
        },
        {
            name: "Accessories",
            image: "/../public/accessories1.png",
        },
        {
            name: "Other",
            image: "/../public/others1.png",
        }
    ]

    return (
        <Box width="100vw">
            {/* make room for browser scroll wheel */}
            <Heading as="h2" size="md" marginTop={8} marginBottom={4} paddingLeft={[2, 5, 10, 20]}>Shop by Category</Heading>
            <Flex justify="center" wrap="wrap" marginX={[2, 5, 10, 20]}>
                {/* map categories into boxes: tops, bottoms, dresses, footwear, accessories, other */}
                <Flex wrap="nowrap" justify="center">
                    {categories1.map(category => (
                        <Box marginBottom={4} marginX={3.5} key={category.name}>
                            <Image
                                src={category.image}
                                width="200px"
                                height="200px"
                                alt=""
                            />
                            <Box textAlign="center">
                                <Text as="b">{category.name}</Text>
                            </Box>
                        </Box>
                    ))}
                </Flex>
                <Flex wrap="nowrap" justify="center">
                    {categories2.map(category => (
                        <Box marginBottom={4} marginX={3.5} key={category.name}>
                            <Image
                                src={category.image}
                                width="200px"
                                height="200px"
                                alt=""
                            />
                            <Box textAlign="center">
                                <Text as="b">{category.name}</Text>
                            </Box>
                        </Box>
                    ))}
                </Flex>
            </Flex>
        </Box>
    )
}