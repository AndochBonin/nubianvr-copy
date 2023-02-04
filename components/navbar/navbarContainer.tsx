import { Flex } from "@chakra-ui/react"

const NavbarContainer = ({ children, ...props}) => {
    return (
        <Flex
            as="nav"
            align="center"
            wrap="wrap"
            w="100%"
            bgColor="white"
            mb={2}
            p={5}
            paddingLeft = {[2, 5, 10, 20]}
            {...props}
        >
            {children}
        </Flex>
    )
}

export default NavbarContainer