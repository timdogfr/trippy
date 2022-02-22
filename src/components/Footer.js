import React from 'react'
import { Stack, Image, Box, IconButton, VStack, Text, Link } from '@chakra-ui/react'

import { FaDiscord, FaTwitter, FaInstagram, FaShip } from 'react-icons/fa';

import logo from '../images/nav_logo.png'

import NavIcons from './NavIcons'

function FooterIcon({ name, icon, to, ...rest }) {
    return (
        <>
            <Link href={to} target="_blank" rel="noopener noreferrer">
                <IconButton
                    aria-label={name}
                    icon={icon}
                    color="accent"
                    bgColor="transparent"
                    _focus={{ outline: 0 }}
                    fontSize='32px'
                    w="64px"
                    h="64px"
                    isRound
                    {...rest}
                />
            </Link>
        </>
    )
}


function Footer() {
    return (
        <Box pb={32}>
            <VStack
                spacing={12}
                align="center"
            >
                <NavIcons><Image src={logo} h="140px" /></NavIcons>

                <Text>
                    © 2022 TTC. All right reserved.
                </Text>
            </VStack>
        </Box>
    )
}

export default Footer