import { Box } from "@chakra-ui/react"
import Navbar from "./navbar/navbar";

const PageLayout = ({ children }) => {
    return (
        <Box width="100vw" height="100%">
            <Box width="100vw" position="fixed" top="0" height="100px" zIndex={10}> {/* Header */}
                <Navbar/>
            </Box>
            <Box position="absolute" top="100px"> {/* Page content */}
                {children}
            </Box>
        </Box>
    )
};

export default PageLayout;