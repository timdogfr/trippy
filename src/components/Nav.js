import React from 'react'
import { Spacer, Stack, Image, Box, IconButton, Link } from '@chakra-ui/react'
import logo from '../images/nav_logo.png'
import NavIcons from './NavIcons'

function Nav() {
    return (
        <Box
            as="nav"
            align="center"
            wrap="wrap"
            w="100%"
            bg={"transparent"}
            px={32}
        >
            <Stack
                spacing={0}
                align="center"
                justify='stretch'
                direction={["column", "column", "row", "row"]}
            >
                <Image src={logo} w={["380px", "380px", "240px", "240px"]} />
                <Spacer />
                <NavIcons />

            </Stack>
        </Box >
    )
}

export default Nav