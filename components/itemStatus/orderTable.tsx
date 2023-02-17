import {
    Table,
    Thead,
    Tbody,
    Tfoot,
    Tr,
    Th,
    Td,
    TableCaption,
    TableContainer,
    ButtonGroup,
} from "@chakra-ui/react"

import ConfirmationButton from "./confirmationButton"
import StatusBadge from "./statusBadge"

export default function OrderTable() {

    const confirm: "confirm" | "decline" = "confirm"

    return (

        <TableContainer border="1px" borderRadius={8} borderColor="gray.300" mt={5}>
            <Table variant="simple" size={["sm"]} width="100%">
                <TableCaption>Click item status to change</TableCaption>
                <Thead bg="gray.100">
                    <Tr>
                        <Th>Item</Th>
                        <Th>Status</Th>
                        <Th>Confirm / Decline</Th>
                    </Tr>
                </Thead>
                <Tbody>
                    <Tr>
                        <Td>Nike Dunk Lows</Td>
                        <Td>
                            <StatusBadge prop="unconfirmed" />
                        </Td>
                        <Td>
                            <ButtonGroup>
                                <ConfirmationButton prop="confirm" />
                                <ConfirmationButton prop="decline" />
                            </ButtonGroup>

                        </Td>
                    </Tr>
                    <Tr>
                        <Td>Chanel Crop Top</Td>
                        <Td>
                            <StatusBadge prop="unconfirmed" />
                        </Td>
                        <Td>
                            <ButtonGroup>
                                <ConfirmationButton prop="confirm" />
                                <ConfirmationButton prop="decline" />
                            </ButtonGroup>
                        </Td>
                    </Tr>
                    <Tr>
                        <Td>Adidas Ultraboost</Td>
                        <Td>
                            <StatusBadge prop="unconfirmed" />
                        </Td>
                        <Td>
                            <ButtonGroup>
                                <ConfirmationButton prop="confirm" />
                                <ConfirmationButton prop="decline" />
                            </ButtonGroup>
                        </Td>
                    </Tr>
                </Tbody>
            </Table>
        </TableContainer>

    )
}