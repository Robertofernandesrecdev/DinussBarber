import {useState, useContext} from 'react'
import Head from "next/head"
import Image from "next/image"
import logoimg from '../../../public/images/logobarber.jpg'
import { Flex, Text, Center, Input, Button } from '@chakra-ui/react'
import Link from "next/link"
import { AuthContext } from '../../context/AuthContext'
import { canSSRGuest } from '../../utils/canSSRGuest'

export default function Login() {
  const {signIn} = useContext(AuthContext)

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  async function handleLogin() {

    //verificação evita gasto de processamenmto 
    if (email === '' || password === '') {
      return;
    }

    await signIn({
      email,
      password
    })
  }

  return (
    <>
      <Head>
        <title>DinussBarbearia - Faça login...</title>
      </Head>
        <Flex background="colorscover.900" height="100vh" alignItems="center" justifyContent="center">
              <Flex width={300} direction="column" p={13} rounded={10} >
                  <Center p={4}>
                      <Image
                          src={logoimg}
                          quality={100}
                          width={200}
                          object-fit="fill"
                          alt="Logo dinnusBarbearia"
                      />
                  </Center>

                  <Input
                      background="colorscover.400"
                      variant="filled"
                      color="#FFFF"
                      size="lg"
                      placeholder="email@email.com"
                      type="email"
                      mb={3}
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />  
                    <Input
                      background="colorscover.400"
                      variant="filled"
                      color="#FFFF"
                      size="lg"
                      placeholder="********"
                      type="text"
                      mb={6}
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                    /> 
                  
                  <Button
                      background="colorsbutton.cta"
                      mb={6}
                      color="gray.900"
                      size="lg"
                      _hover={{bg: "#3d4169"}}
                      onClick={handleLogin}
                  >
                      Acessar
                  </Button>

                  <Center mt={1}>
                      <Link href="/register">
                          <Text color="#FFF" cursor="pointer" >Ainda não possui uma conta? <strong>Cadastre-se</strong></Text>
                      </Link>
                  </Center>  

              </Flex> 
        </Flex>
  
    </>
  )
}

export const getServerSideProps = canSSRGuest(async (ctx) => {
  return {
    props:{}
  }
})