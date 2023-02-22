
import Head from "next/head"
import { Flex, Text } from '@chakra-ui/react'



export default function Home() {
  return (
    <>
      <Head>
        <title>DinussBarbearia</title>
      </Head>
        <Flex background="colorscover.900" height="100vh" alignItems="center" justifyContent="center">
          <Text color="#FFFF">Página Home</Text>
        </Flex>
  
    </>
  )
}