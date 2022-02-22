import { Heading, VStack, Text, Box, HStack, Button, Image } from '@chakra-ui/react'
import { FaDiscord, FaTwitter } from 'react-icons/fa';
import React from 'react'

import L from '../images/samples/1.png'
import R from '../images/samples/2.png'

function Welcome() {
    return (
        <>
            <Box mx={32}>
                <HStack spacing={0}>
                    <Image src={L} w={[0, 0, 0, 48, 80]} display={["none", "none", "none", "block"]} />
                    <VStack spacing={16}>
                        <Box>
                            <Heading align="center" color="unset">Welcome to the</Heading><Heading align="center" size="4xl">Trippy Turtles Club</Heading>
                        </Box>
                        <Text align="center" w={["80%", "75%", "70%", "50%"]} fontSize={24}>Join  the  Trippiest  Turtles  in  the  NFT  space!</Text>
                        <Text align="center" w={["80%", "75%", "70%", "50%"]} fontSize={24}>We’re  a close-knit  community  of  10,000 tripped-out turtles stored  as  ERC-721  tokens  on the Ethereum compatible  Polygon  network.</Text>

                        <HStack spacing={8}>
                            <Button variant='solid' p={6} leftIcon={<FaDiscord />} _focus={{ outline: 0 }}>Join Now</Button>
                            <Button variant='solid' p={6} leftIcon={<FaTwitter />} _focus={{ outline: 0 }}>Follow Us</Button>
                        </HStack>
                    </VStack>
                    <Image src={R} w={[0, 0, 0, 48, 80]} display={["none", "none", "none", "block"]} />
                </HStack>
            </Box>
        </>
    )
}

export default Welcome