import React, { FC } from 'react'
import {
    Popover,
    PopoverTrigger,
    PopoverContent,
    PopoverHeader,
    PopoverBody,
    PopoverFooter,
    PopoverArrow,
    PopoverCloseButton,
    PopoverAnchor,
    Button,
    ButtonGroup,
    Text,
    useDisclosure
} from '@chakra-ui/react'

const ConfirmationButton: FC<{ prop: "confirm" | "decline" }> = ({ prop }) => {


    const confirm = {
        color: "green",
        buttonText: "Confirm",
        heading: "Confirm Order",
        dialog: "Are you sure? You can't undo this action."
    }

    const decline = {
        color: "red",
        buttonText: "Decline",
        heading: "Decline Order",
        dialog: "Are you sure? You can't undo this action.",
    }

    const mode = prop == "confirm" ? confirm : decline

    const initialFocusRef = React.useRef()
    const { onOpen, onClose, isOpen } = useDisclosure()


    return (
        <>
            <Popover
                initialFocusRef={initialFocusRef}
                isOpen={isOpen}
                onClose={onClose}
                placement='bottom'
                closeOnBlur={false}
            >
                <PopoverTrigger>
                    <Button colorScheme={mode.color} onClick={onOpen} size="xs" _focus={{ borderColor: "black" }}>{mode.buttonText}</Button>
                </PopoverTrigger>
                <PopoverContent _focus={{ borderColor: "black" }}>
                    <PopoverHeader fontWeight='semibold'>{mode.heading}</PopoverHeader>
                    <PopoverArrow />
                    <PopoverCloseButton />
                    <PopoverBody _focus={{ borderColor: "black" }}>
                        {mode.dialog}
                    </PopoverBody>
                    <PopoverFooter display='flex' justifyContent='flex-end'>
                        <ButtonGroup size='sm'>
                            <Button variant='solid' ref={initialFocusRef} onClick={onClose} _focus={{ borderColor: "black" }}>
                                Cancel
                            </Button>
                            <Button colorScheme={mode.color} onClick={onClose} _focus={{ borderColor: "black" }}>
                                {mode.buttonText}
                            </Button>
                        </ButtonGroup>
                    </PopoverFooter>
                </PopoverContent>
            </Popover>
        </>
    )
}

export default ConfirmationButton