import React from 'react'
import { Box } from '@chakra-ui/react'
import banner from '../images/banner.jpg'

function Home({ children }) {
    return (
        <>
            <Box h="80vh" bgImage={banner} bgPos="center" borderBottomRadius={["0%", "0%", "10%", "20%"]} borderColor="accent" borderBottomWidth="6px">
                {children}
            </Box>
        </>
    )
}

export default Home