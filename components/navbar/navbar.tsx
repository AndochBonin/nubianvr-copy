import Logo from "./logo"
import NavbarContainer from "./navbarContainer"
import SearchBar from "./searchBar"
import SignupButton from "./signupButton"
import LoginButton from "./loginButton"
import { ButtonGroup, Flex, Text } from "@chakra-ui/react"
import { useSession } from "next-auth/react"
import Link  from "next/link"
import SellButton from "./sellButton"

export default function Navbar() {

    const { data: session, status } = useSession()

    return (
        <NavbarContainer borderBottom="1px" borderBottomColor="gray.300">
            <Link href="/">
            <Logo
                color="white"
                paddingRight={[2, 5, 10, 20]}
                cursor="pointer"
            />
            </Link>
            <SearchBar />

            {
                status == "authenticated" ?

                    <Flex position="absolute" right={[2, 5, 10, 20]}>
                        <Text paddingRight={4}>
                            {session.user.name} 
                        </Text>
                        <SellButton />
                    </Flex>
                    
                    :

                    <ButtonGroup position="absolute" right={[2, 5, 10, 20]}>
                        <LoginButton />
                        <SignupButton />
                    </ButtonGroup>
            }


        </NavbarContainer>
        // a thin black/gray line
    )
}
