import React from 'react'
import { Stack, Link, IconButton } from '@chakra-ui/react'
import { FaDiscord, FaTwitter, FaInstagram, FaShip } from 'react-icons/fa';


function MenuIcon({ name, icon, to, ...rest }) {
    return (
        <>
            <Link href={to} target="_blank" rel="noopener noreferrer" >
                <IconButton
                    aria-label={name}
                    icon={icon}
                    color="accent"
                    bgColor="transparent"
                    _focus={{ outline: 0 }}
                    _hover={{ bgColor: "rgb(220, 220, 220, 0.2)" }}
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

function NavIcons({ children }) {
    return (
        <>
            <Stack spacing={5} direction={["column", "column", "row", "row"]} align="center">
                {children}
                <MenuIcon name="Discord" to="https://discord.com/invite/TrippyTurtlesClub" icon={<FaDiscord />} />
                <MenuIcon name="Twitter" to="https://twitter.com/_trippyturtles_" icon={<FaTwitter />} />
                <MenuIcon name="Instagram" to="https://www.instagram.com/trippyturtlesclub" icon={<FaInstagram />} />
                <MenuIcon name="OpenSea" to="" icon={<FaShip />} disabled />
            </Stack>
        </>
    )
}

export default NavIcons