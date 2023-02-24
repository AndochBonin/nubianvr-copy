import { Box, Flex, Input, Button, FormControl, FormLabel, Divider, Center, Text } from "@chakra-ui/react"
import Link from "next/link"
import { useRouter } from "next/router"
import { FC, useState } from "react"
import { FcGoogle } from 'react-icons/fc'
import { signIn, getSession } from "next-auth/react";

const AuthForm: FC<{ mode: "login" | "signup" }> = ({ mode }) => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [isLoading, setIsLoading] = useState(false)
    const router = useRouter()

    // const handleSubmit = async (e) => {
    //     e.preventDefault()
    //     setIsLoading(true)

    //     await auth(mode, { email, password })
    //     setIsLoading(false)
    //     router.push("/")
    // }


    return (
        <Box height="100vh" width="100%" bg="white" color="black">

            <Flex justify="center" align="center" height="calc(100vh - 100px)">
                <Box width={["300px", "500px"]} padding="50px" bg="white" borderRadius="5px" border="1px" borderColor="gray.300">
                    <form>
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

                                type="submit"
                                isLoading={isLoading}
                            >
                                {mode === "login" ? "Login" : "Sign Up"}
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
                            onClick={()=>{
                                signIn("google", { callbackUrl: "/" })

                            }}
                        >
                            <Center>
                                <Text>Continue with Google</Text>
                            </Center>
                        </Button>
                    </Center>

                    <Flex pt={6}>
                        <p>{mode === "login" ? "Don't have an account? " : "Already have an account? "}</p>
                        <Button
                            size="sm"
                            variant="link"
                            paddingLeft="4px"
                            color="black"
                            _focus={{ borderColor: "white" }}
                        >
                            <Link href={mode === "login" ? "/signup" : "/login"}>
                                {mode === "login" ? "Sign up" : "Login"}
                            </Link>
                        </Button>
                    </Flex>

                </Box>
            </Flex>
        </Box>
    )
}

export default AuthForm