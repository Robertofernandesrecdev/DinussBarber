import {useState, useContext} from 'react'
import Head from "next/head"
import Image from "next/image"
import logoimg from '../../../public/images/logobarber.jpg'
import { Flex, Text, Center, Input, Button } from '@chakra-ui/react'
import Link from "next/link"
import { canSSRGuest } from '../../utils/canSSRGuest'

import { AuthContext } from '../../context/AuthContext'

export default function Register() {
    const { signUp} = useContext(AuthContext);

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    async function handleRegister() {
        // console.log({name}) // console.log({email}) // console.log({password})
        if (name === '' && email === '' && password === '') {
            return;
        }

        await signUp({name, email, password})
    }


  return (
    <>
      <Head>
        <title>Crie sua conta na DinussBarbearia</title>
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
                      placeholder="Nome da barbearia"
                      type="text"
                      mb={3}
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                  />  
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
                      _hover={{ bg: "#3d4169" }}
                      onClick={handleRegister}
                  >
                      Cadastrar
                  </Button>

                  <Center mt={1}>
                      <Link href="/login">
                          <Text color="#FFF" cursor="pointer" >Já possui uma conta? <strong>Faça login..</strong></Text>
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