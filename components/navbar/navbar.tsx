import Logo from "./logo"
import NavbarContainer from "./navbarContainer"
import SearchBar from "./searchBar"
import SignupButton from "./signupButton"
import LoginButton from "./loginButton"
import { Box, ButtonGroup, Flex, Avatar, Menu, MenuButton, Button, MenuItem, MenuList, MenuDivider } from "@chakra-ui/react"
import { useSession } from "next-auth/react"
import Link from "next/link"
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
                        <Box pr={4}>
                            <SellButton />
                        </Box>
                        <Menu>
                            <MenuButton>
                                <Avatar name={session.user.name} src={session.user.image} size="sm" cursor="pointer" border="1px"/>
                            </MenuButton>
                            <MenuList>
                                <MenuItem>Orders</MenuItem>
                                <MenuItem>Account Details</MenuItem>
                                <MenuItem>Settings</MenuItem>
                                <MenuDivider />
                                <MenuItem>Sign Out</MenuItem>
                            </MenuList>
                        </Menu>
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
