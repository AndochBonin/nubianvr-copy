import { Box, Input, InputGroup, InputLeftElement } from "@chakra-ui/react"
import { MdSearch } from "react-icons/md"

export default function SearchBar() {
    return (
        <Box>
            <InputGroup>
                <InputLeftElement
                    pointerEvents="none"
                    children={<MdSearch color="grey" />}
                />
                <Input
                    placeholder="Search"
                    variant="outline"
                    width={["100px", "150px", "200px", "400px", "550px"]}
                    borderRadius="2"
                    focusBorderColor="black"
                    _hover={{borderColor: "black"}}
                />
            </InputGroup>
        </Box>
    )
}