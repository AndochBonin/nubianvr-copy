import {
  Flex,
  Card,
  CardBody,
  Text,
  Image,
  Grid,
  GridItem,
} from "@chakra-ui/react"

export default function CharacterSection(props: any) {
  return (
    <Grid templateColumns="repeat(5, 1fr)">
      {props.result.map((character: any) => (
        <GridItem p={0}>
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
        </GridItem>
      ))}
    </Grid>
  )
}
