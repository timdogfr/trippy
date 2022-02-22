import React from 'react'
import { Box } from '@chakra-ui/react'
import banner from '../images/banner.jpg'

function Home({ children }) {
    return (
        <>
            <Box h="100vh" bgImage={banner} bgPos="center" borderColor="accent" borderBottomWidth="6px">
                {children}
            </Box>
        </>
    )
}

export default Home