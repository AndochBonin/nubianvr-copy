import {
    Accordion,
    AccordionItem,
    AccordionButton,
    AccordionPanel,
    AccordionIcon,
    Box,
} from '@chakra-ui/react'

export default function SellInfoAccordion() {
    return (
        <Box width={["300px", "300px", "300px", "500px", "780px"]} bgColor="blue.100" borderRadius="5px">
            <Accordion allowToggle>
                <AccordionItem>
                    <h2>
                        <AccordionButton>
                            <Box as="span" flex='1' textAlign='left'>
                                Site Commission Information
                            </Box>
                            <AccordionIcon />
                        </AccordionButton>
                    </h2>
                    <AccordionPanel pb={4}>
                        We take just a 10% commission on each sale so make sure to price your items accordingly.
                    </AccordionPanel>
                </AccordionItem>
            </Accordion>
        </Box>
    )
}