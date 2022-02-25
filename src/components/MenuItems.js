import React from 'react'
import { Stack } from '@chakra-ui/react'
import { Link as Link2 } from '@chakra-ui/react';
import { Link } from 'react-scroll';

function MenuItem({ name, to }) {
    return (
        <>
            <Link2 color="accent" fontSize={17}>
                <Link
                    color="accent"
                    to={to}
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                >
                    {name}
                </Link>
            </Link2>
        </>
    )
}

function MenuItems() {
    return (
        <Stack spacing={8} display={["none", "none", "none", "block"]} direction={["column", "column", "row", "row"]} align="center">
            <MenuItem name="Roadmap" to="Roadmap" />
            <MenuItem name="Story" to="Story" />
            <MenuItem name="Team" to="Team" />
            <MenuItem name="FAQ" to="FAQ" />
        </Stack>
    )
}

export default MenuItems