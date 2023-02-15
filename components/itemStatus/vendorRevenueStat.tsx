import {
    Stat,
    StatLabel,
    StatNumber,
    StatHelpText,
    StatArrow,
    StatGroup,
    Box,
    Flex,
} from '@chakra-ui/react'
import AddItemButton from './addItemButton'

const VendorRevenueStat = () => {

    let revenue = 0.00

    return (
        <Flex justify="center">
            <Box width="100%" border="1px" borderColor="gray.300" py={4} borderRadius={3}>
                <Stat ml={[2, 5]}>
                    <StatLabel>Revenue</StatLabel>
                    <StatNumber>GHC {revenue}</StatNumber>
                    <StatHelpText>Feb 12 - Feb 28</StatHelpText>
                </Stat>
            </Box>
        </Flex>
    )
}

export default VendorRevenueStat