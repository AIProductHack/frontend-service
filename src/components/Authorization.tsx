import {
    Button,
    Box,
    Center,
    Flex,
    Image,
    Text,
    Input,
    Radio,
    Spacer,
    Link,
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    useDisclosure
} from '@chakra-ui/react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

function Authorization() {
    const navigate = useNavigate()

    const backendUrl = process.env.BACKEND_API

    const { isOpen, onOpen, onClose } = useDisclosure()

    const [name, setName] = useState("")
    const [surname, setSurname] = useState("")
    const [email, setEmail] = useState("")
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [rememberMe, setRememberMe] = useState(false)
    const [msg, setMsg] = useState("")

    const login = () => {
        fetch(`${backendUrl}/api/auth/`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                "username": username,
                "password": password,
                "rememberMe": rememberMe
            })
        })
            .then((res) => res.json())
            .then((data) => {
                if (data["success"]) {
                    navigate('/')
                }
                else setMsg(data["message"])
            })
    }
    const signUp = () => {
        fetch(`${backendUrl}/api/register/`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                "username": username,
                "password": password, 
                "email": email,
                "name": name,
                "surname": surname
            })
        })
        onClose()
    }
    return (
        <Center>
            <Flex
                bgImage="url('/mountains.png')"
                bgRepeat='no-repeat'
                bgSize='100% 100%'
                h='100vh'
                w='118.6vh'
                justifyContent='center'>
                <Center>
                    <Image src='logo_mps-04.png' h='7vh' />
                </Center>
            </Flex>
            <Flex
                h='100vh'
                w='59.3vh'
                justifyContent='center'>
                <Box mt={70} ml={5} mr={5} w='51.7vh' h='33vh'>
                    <Text fontSize='2xl' fontStyle='Roboto'>Login</Text>
                    <Box mt='3vh'>
                        <Text as='b' fontStyle='Roboto'>Username</Text>
                        <Input
                            mt='1vh'
                            size='sm'
                            placeholder='Username'
                            onChange={(e: any) => setUsername(e.target.value)}></Input>
                    </Box>
                    <Box mt='2vh'>
                        <Text as='b' fontStyle='Roboto'>Password</Text>
                        <Input
                            mt='1vh'
                            size='sm'
                            placeholder='Password'
                            onChange={(e: any) => setPassword(e.target.value)}></Input>
                    </Box>
                    <Text mt='1vh' color='red'>{msg}</Text>
                    <Flex mt='2vh'>
                        <Radio fontStyle='Roboto' onChange={(e: any) => setRememberMe(true)}>Remember Me</Radio>
                        <Spacer />
                        <Center mr={3}>
                            <Link color='blue.500' onClick={onOpen}>
                                Sign up
                            </Link>
                            <Modal isOpen={isOpen} onClose={onClose}>
                                <ModalOverlay />
                                <ModalContent>
                                    <ModalHeader>Registration</ModalHeader>
                                    <ModalCloseButton />
                                    <ModalBody>
                                        <Text>Name</Text>
                                        <Input onChange={(e: any) => { setName(e.target.value) }}></Input>
                                        <Text>Surname</Text>
                                        <Input onChange={(e: any) => { setSurname(e.target.value) }}></Input>
                                        <Text>Username</Text>
                                        <Input onChange={(e: any) => { setUsername(e.target.value) }}></Input>
                                        <Text>Email</Text>
                                        <Input onChange={(e: any) => { setEmail(e.target.value) }}></Input>
                                        <Text>Password</Text>
                                        <Input type='password' onChange={(e: any) => { setPassword(e.target.value) }}></Input>
                                    </ModalBody>

                                    <ModalFooter>
                                        <Button colorScheme='blue' mr={3} onClick={signUp}>
                                            Sign up
                                        </Button>
                                    </ModalFooter>
                                </ModalContent>
                            </Modal>
                        </Center>
                        <Button bg='#2196F3' color='white' onClick={login}>Login</Button>
                    </Flex>
                </Box>
            </Flex>
        </Center>

    )
}

export default Authorization;