import { Box, Flex, Input, Button, FormControl, FormLabel, Divider, Center, Text } from "@chakra-ui/react"
import { useState } from "react"
import { FcGoogle } from 'react-icons/fc'
import { signIn, getSession } from "next-auth/react";

const Login = () => {

    const [email, setEmail] = useState("")
    const [isLoading, setIsLoading] = useState(false)

    const handleSubmit = (e) => {
        e.preventDefault()

        if (!email) return false

        signIn("email", { email, redirect: false })
    }


    return (
        <Box height="100vh" width="100%" bg="white" color="black">

            <Flex justify="center" align="center" height="calc(100vh - 100px)">
                <Box width={["300px", "500px"]} padding="50px" bg="white" borderRadius="5px" border="1px" borderColor="gray.300">
                    <form onSubmit={handleSubmit}>
                        <FormControl pb={2}>
                            <FormLabel>Email Address</FormLabel>
                            <Input
                                placeholder="Email"
                                type="email"
                                borderRadius="2"
                                borderColor="gray.400"
                                focusBorderColor="gray.400"
                                _hover={{ borderColor: "gray.400" }}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </FormControl>


                        <Flex justify="space-between">
                            <Button
                                size="sm"
                                bgColor="black"
                                color="white"
                                variant="outline"
                                borderRadius="0"
                                _hover={{ bg: "black" }}
                                _focus={{ borderColor: "black" }}
                                isLoading={isLoading}
                                type="submit"

                            >
                                Login
                            </Button>
                        </Flex>
                    </form>

                    <Divider marginTop={4} />

                    <Center p={6}>
                        <Button
                            w={"full"}
                            maxW={"xl"}
                            variant={"outline"}
                            leftIcon={<FcGoogle />}
                            onClick={() => {
                                signIn("google", { callbackUrl: "/" })

                            }}
                        >
                            <Center>
                                <Text>Continue with Google</Text>
                            </Center>
                        </Button>
                    </Center>



                </Box>
            </Flex>
        </Box>
    )
}

export default Login