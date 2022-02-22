import { Box } from '@chakra-ui/react'
import React from 'react'
import banner from '../images/banner.jpg'


function Home({ children }) {
    return (
        <>
            <Box h="80vh" bgImage={banner} borderBottomRadius="20%" borderColor="accent" borderBottomWidth="6px">
                {children}
            </Box>
        </>
    )
}

export default Home