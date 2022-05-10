import React from 'react'
import { Box } from '@chakra-ui/react'
import banner from '../images/banner.jpg'

function Home({ children }) {
    return (
        <>
            <Box h="100vh" bgImage={banner} bgPos="center" borderColor="accent" borderBottomWidth="6px">
                {children}
                {/* <Box
                    position="absolute"
                    width="100%"
                    left='50%'
                    top='9.5%'
                    transform="translate(-50%, -50%)"
                    display={["none", "none", "none", "block"]}
                    zIndex={1}
                >
                    <Heading color="white" align="center" size="3xl">Welcome to the</Heading>
                    <Heading color="accent" align="center" fontSize="100px">
                        Trippy Turtles Club</Heading>
                </Box>
                <Box
                    position="absolute"
                    width="100%"
                    left='49.7%'
                    top='9.6%'
                    transform="translate(-50%, -50%)"
                    display={["none", "none", "none", "block"]}
                    zIndex={0}
                >
                    <Heading color="black" align="center" size="3xl">Welcome to the</Heading>
                    <Heading color="black" align="center" fontSize="100px">
                        Trippy Turtles Club</Heading>
                </Box> */}
            </Box>
        </>
    )
}

export default Home



// 
