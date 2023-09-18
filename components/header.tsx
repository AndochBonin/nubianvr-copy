import { Box, Center, Heading } from "@chakra-ui/react"

export default function Header() {
  return (
    <Box>
      <Box bgColor="#53389E" color="white" height="120px" py="8">
        <Center>
          <Heading>Characters of the Star Wars Universe</Heading>
        </Center>
      </Box>
      <Box my={12}>
        <Center>
          <Heading color="black" size="md">
            Star Wars Characters
          </Heading>
        </Center>
      </Box>
    </Box>
  )
}
