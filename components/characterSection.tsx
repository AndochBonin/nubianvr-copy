import {
  Flex,
  Card,
  CardBody,
  Text,
  Image,
  Grid,
  GridItem,
  Center,
} from "@chakra-ui/react"

export default function CharacterSection(props: any) {
  return (
    <Center>
      <Flex justifyContent="center" gap="2" wrap="wrap">
        {props.result.map((character: any) => (
          <Card key={character.name} m={4}>
            <CardBody p={0}>
              <Image src="https://picsum.photos/300" width={400} height={200} />
              <Text as="b">{character.name}</Text>
              <Text>Gender: {character.gender}</Text>
              <Text>Height: {character.height} cm</Text>
              <Text>Hair Color: {character.hair_color}</Text>
              <Text>Skin Color: {character.skin_color}</Text>
            </CardBody>
          </Card>
        ))}
      </Flex>
    </Center>
  )
}
