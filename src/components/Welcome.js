import React from 'react'
import { Heading, VStack, Text, Box, HStack, Button, Image, Link, Stack } from '@chakra-ui/react'
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
                            <Heading align="center">Welcome to</Heading><Heading color="accent" align="center" size="4xl">The Funky Horse Pub</Heading>
                        </Box>
                        <Text align="center" w={["80%", "75%", "70%", "70%"]} fontSize={24}>Join  the  Funky  Horse  Pub  in  the  NFT  space! We’re  a  community  of  10,000 hand-drawn Funkys  stored  as  ERC-721  tokens  on the Avalanche  network.</Text>

                        <Stack direction={["column", "column", "row", "row"]} spacing={8}>
                            {/* <Link target="_blank" rel="noopener noreferrer" href="https://discord.com/invite/TrippyTurtlesClub" _hover={{}}>
                                <Button variant='solid' p={6} leftIcon={<FaDiscord />} borderRadius={80} bgColor="accent" color="black" borderColor="accent" borderWidth="2px" _focus={{ outline: 0 }} _hover={{ bgColor: "transparent", color: "white" }}>Join Now</Button>
                            </Link>
                            <Link target="_blank" rel="noopener noreferrer" href="https://twitter.com/_trippyturtles_" _hover={{}}>
                                <Button variant='solid' p={6} leftIcon={<FaTwitter />} borderRadius={80} bgColor="accent" color="black" borderColor="accent" borderWidth="2px" _focus={{ outline: 0 }} _hover={{ bgColor: "transparent", color: "white" }}>Follow Us</Button>
                            </Link> */}
                            <Link target="_blank" rel="noopener noreferrer" href="https://thefunkyhorsemint.com" _hover={{ textDecoration: 'none' }}>
                                <Button
                                    variant='solid'
                                    p={10}
                                    // rightIcon={<FaArrowRight />}
                                    borderRadius={80}
                                    bgColor="accent"
                                    fontSize='32'
                                    color="black"
                                    borderColor="accent"
                                    borderWidth="2px"
                                    _focus={{ outline: 0 }}
                                    _hover={{ bgColor: "transparent", color: "white", transform: "rotate(-3deg)" }}
                                >
                                    Mint Now
                                </Button>
                            </Link>
                        </Stack>
                    </VStack>
                    <Image src={R} style w={[0, 0, 0, 48, 80]} display={["none", "none", "none", "block"]} rounded="100%" style="transform: scaleX(-1);"/>
                </HStack>
            </Box >
        </>
    )
}

export default Welcome
