import {
  Box,
  Card,
  CardBody,
  Flex,
  Text,
  Heading,
  Center,
  Image,
  ButtonGroup,
  Button,
  Spinner,
} from "@chakra-ui/react"
import { useEffect, useState } from "react"
import CharacterSection from "../components/characterSection"
import Header from "../components/header"
import LoadingSpinner from "../components/loadingSpinner"

export default function Home() {
  const [swapiUrl, setSwapiUrl] = useState(
    "https://swapi.dev/api/people/?page=1"
  )
  const [isLoading, setLoading] = useState(true)
  const [data, setData] = useState(null)

  useEffect(() => {
    fetch(swapiUrl)
      .then((res) => res.json())
      .then((data) => {
        setData(data)
        setLoading(false)
      })
  }, [swapiUrl])

  const handleNextClick = () => {
    if (isLoading) return
    if (data.next != null) {
      setSwapiUrl(data.next)
      setLoading(true)
    }
  }

  const handlePreviousClick = () => {
    if (isLoading) return
    if (data.previous != null) {
      setSwapiUrl(data.previous)
      setLoading(true)
    }
  }

  console.log(data)

  return (
    <Box>
      <Header />
      <Box>
        {!isLoading ? (
          <Box>
            <CharacterSection result={data.results} />
            <Box>
              <Center>
                <ButtonGroup gap="4">
                  <Button
                    colorScheme="blackAlpha"
                    onClick={handlePreviousClick}
                  >
                    Previous
                  </Button>
                  <Button colorScheme="blackAlpha" onClick={handleNextClick}>
                    Next
                  </Button>
                </ButtonGroup>
              </Center>
            </Box>
          </Box>
        ) : (
          <LoadingSpinner />
        )}
      </Box>
    </Box>
  )
}
