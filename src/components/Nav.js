import { Spacer, Stack, Image, Box, IconButton } from '@chakra-ui/react'

import { FaDiscord, FaTwitter, FaInstagram, FaShip } from 'react-icons/fa';

import React from 'react'

function MenuIcon({ name, icon, ...rest }) {
    return (
        <>
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
        </>
    )
}

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
                direction={["column", "row", "row", "row"]}
            >
                <Image src="./nav_logo.png" h="140px" />
                <Spacer />
                <Stack direction="row" spacing={5}>
                    <MenuIcon name="Discord" icon={<FaDiscord />} />
                    <MenuIcon name="Twitter" icon={<FaTwitter />} />
                    <MenuIcon name="Instagram" icon={<FaInstagram />} />
                    <MenuIcon name="OpenSea" icon={<FaShip />} disabled />
                </Stack>

            </Stack>
        </Box >
    )
}

export default Nav