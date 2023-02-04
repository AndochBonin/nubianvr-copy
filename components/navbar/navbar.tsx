import Logo from "./logo"
import NavbarContainer from "./navbarContainer"
import SearchBar from "./searchBar"
import SignupButton from "./signupButton"
import LoginButton from "./loginButton"
import { ButtonGroup } from "@chakra-ui/react"

const Navbar = () => {
    return (
        <NavbarContainer borderBottom="1px" borderBottomColor="gray.300">
            <Logo
                color="white"
                paddingRight={[2, 5, 10, 20]}
            />
            <SearchBar />

            <ButtonGroup position="absolute" right={[2, 5, 10, 20]}>
                <LoginButton/>
                <SignupButton/>
            </ButtonGroup>
        </NavbarContainer>
        // a thin black/gray line
    )
}

export default Navbar