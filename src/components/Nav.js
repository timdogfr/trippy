import React from 'react'
import { Spacer, Stack, Image, Box } from '@chakra-ui/react'
import logo from '../images/nav_logo.png'
import NavIcons from './NavIcons'
import MenuItems from './MenuItems'

function Nav() {
    return (
        <Box
            as="nav"
            align="center"
            wrap="wrap"
            w="100%"
            bgGradient="linear(to-b, black, rgb(0,0,0,0.8), rgb(0,0,0,0.6), rgb(0,0,0,0))"
            px={32}
            pt={5}
        >
            <Stack
                spacing={0}
                align="center"
                justify='space-evenly'
                direction={["column", "column", "column", "row"]}
            >
                <MenuItems />
                <Spacer />
                <Image src={logo} w={["380px", "380px", "300px", "300px"]} />
                <Spacer />
                <NavIcons />

            </Stack>
        </Box >
    )
}

export default Nav