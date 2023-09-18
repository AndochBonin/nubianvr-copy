import { Box, Center, Spinner, Text } from "@chakra-ui/react"

export default function LoadingSpinner() {
  return (
    <Box my={10}>
      <Center>
        <Spinner size="xl" />
      </Center>
      <Center>
        <Text size="xl"> Please wait... </Text>
      </Center>
    </Box>
  )
}
