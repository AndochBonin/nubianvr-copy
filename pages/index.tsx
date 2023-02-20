import Head from 'next/head'
import Image from 'next/image'
import Categories from '../components/hero section/categories'
import Hero from '../components/hero section/hero'
import NewIn from '../components/hero section/newIn'
import styles from '../styles/Home.module.css'
import client from "../lib/prismadb"
import { authOptions } from "./api/auth/[...nextauth]"
import { Box, Card, CardBody, Flex, Text, Heading } from '@chakra-ui/react'
import { Item } from '@prisma/client'

export default function Home({ items }) {
  return (
    <div>
      <Hero />
      <Categories />

      <Box  px={[2, 5, 10, 20]}>
        <Heading as="h2" size="md" marginTop={8} marginBottom={4}>New In</Heading>
        <Flex pt={5} wrap="wrap" justify={["center", "center", "flex-start"]}>
          {
            items.map((item: Item) => (
              <Box m={2} cursor="pointer">
                <Card>
                  <CardBody>
                    <Image
                      src="/../public/noimage.png"
                      height="200px"
                      width="200px"
                      alt=""
                    />

                    <Heading size="sm">{item.name}</Heading>
                    <Text>{item.color}</Text>
                    <Flex justify="space-between">
                      
                      <Text as="b">GHC {item.price}</Text>
                    </Flex>
                  </CardBody>
                </Card>
              </Box>
            ))
          }
        </Flex>
      </Box>

    </div>
  )
}

export const getServerSideProps = async () => { // finding all user items


  const items = await client.item.findMany()

  return {
    props: {
      items
    }
  }
}