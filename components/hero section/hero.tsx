import { Box, Button, Flex } from "@chakra-ui/react"
import Image from "next/image"
import Link from "next/link"
import { Text } from "@chakra-ui/react"

export default function Hero() {


    return (
        <Box width="100vw" height="100%" marginTop="10px" justifyContent="center">

            <Flex justify="center" wrap="wrap">
                <Link href="/">
                    <Box  border="1px" borderColor="gray.300" marginX={[2, 5]} marginBottom={5} width="670px" cursor="pointer"> {/* shop menswear */}
                        <Image
                            src="/../public/Shop Menswear.png"
                            width={670}
                            height={400}
                            alt=""
                            priority
                        />
                        <Flex justify="space-between">
                            <Text fontSize="lg" as="b" m={2}>Menswear</Text>
                            <Button
                                size="sm"
                                borderColor="gray.400"
                                variant="outline"
                                borderRadius="0"
                                _hover={{ bg: "black", color: "white" }}
                                _focus={{ borderColor: "black" }}
                                margin={2}
                            >
                                Shop
                            </Button>
                        </Flex>
                    </Box>
                </Link>

                <Link href="/">
                    <Box border="1px" borderColor="gray.300" marginX={[2, 5]} marginBottom={5} width="670px" cursor="pointer"> {/* shop womenswear */}
                        <Image
                            src="/../public/Shop Womenswear.png"
                            width={670}
                            height={400}
                            alt=""
                            priority
                        />
                        <Flex justify="space-between">
                            <Text fontSize="lg" as="b" m={2}>Womenswear</Text>
                            <Button
                                size="sm"
                                borderColor="gray.400"
                                variant="outline"
                                borderRadius="0"
                                _hover={{ bg: "black", color: "white" }}
                                _focus={{ borderColor: "black" }}
                                margin={2}
                            >
                                Shop
                            </Button>
                        </Flex>
                    </Box>
                </Link>

            </Flex>
        </Box>
    )
}