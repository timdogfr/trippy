import React from 'react'
import { Heading, VStack, Text, Box, HStack, Button, Image, Link, Stack } from '@chakra-ui/react'
import { FaDiscord, FaTwitter } from 'react-icons/fa';
import L from '../images/samples/15.png'
import R from '../images/samples/2.png'

function Welcome() {
    return (
        <>
            <Box mx={[4, 4, 16, 32]} my={64}>
                <HStack spacing={0}>
                    <Image src={L} w={[0, 0, 0, 48, 80]} display={["none", "none", "none", "block"]} rounded="100%" />
                    <VStack spacing={16}>
                        <Box>
                            <Heading align="center">Welcome to the</Heading><Heading color="accent" align="center" size="4xl">Trippy Turtles Club</Heading>
                        </Box>
                        <Text align="center" w={["80%", "75%", "70%", "70%"]} fontSize={24}>Join  the  Trippiest  Turtles  in  the  NFT  space! We’re  a close-knit  community  of  10,000 tripped-out turtles stored  as  ERC-721  tokens  on the Ethereum compatible  Polygon  network.</Text>

                        <Stack direction={["column", "column", "row", "row"]} spacing={8}>
                            <Link target="_blank" rel="noopener noreferrer" href="https://discord.com/invite/TrippyTurtlesClub" _hover={{}}>
                                <Button variant='solid' p={6} leftIcon={<FaDiscord />} borderRadius={80} bgColor="accent" color="black" borderColor="accent" borderWidth="2px" _focus={{ outline: 0 }} _hover={{ bgColor: "transparent", color: "white" }}>Join Now</Button>
                            </Link>
                            <Link target="_blank" rel="noopener noreferrer" href="https://twitter.com/_trippyturtles_" _hover={{}}>
                                <Button variant='solid' p={6} leftIcon={<FaTwitter />} borderRadius={80} bgColor="accent" color="black" borderColor="accent" borderWidth="2px" _focus={{ outline: 0 }} _hover={{ bgColor: "transparent", color: "white" }}>Follow Us</Button>
                            </Link>
                        </Stack>
                    </VStack>
                    <Image src={R} w={[0, 0, 0, 48, 80]} display={["none", "none", "none", "block"]} rounded="100%" />
                </HStack>
            </Box >
        </>
    )
}

export default Welcome