import React from 'react'
import { Box, VStack, Image, Heading, SimpleGrid, Text } from '@chakra-ui/react'

import a from '../images/members/1.png'
import b from '../images/members/2.png'
import c from '../images/members/3.png'
import d from '../images/members/4.png'
import e from '../images/members/5.png'
import f from '../images/members/6.png'



function TeamMember({ src, name, role }) {
    return (
        <>
            <Box>
                <VStack spacing={8}>
                    <Image rounded="20%" src={src} />
                    <Box align="center">
                        <Text textTransform="uppercase" color="accent">{name}</Text>
                        <Text textTransform="capitalize">{role}</Text>
                    </Box>
                </VStack>
            </Box>
        </>
    )
}

function Team() {
    return (
        <>
            <Box mx={32}>
                <Heading align="center" color="unset">Our</Heading><Heading align="center" pb={12} size="4xl">Team</Heading>
                <SimpleGrid spacing={[12, 24, 32, 48]} columns={["1", "1", "2", "3"]}>
                    <TeamMember name="nishfoshizzle" role="project lead" src={a} />
                    <TeamMember name="amg0405" role="marketing" src={b} />
                    <TeamMember name="duds" role="artist" src={c} />
                    <TeamMember name="gau aadmi" role="pr / marketing" src={d} />
                    <TeamMember name="mr mohawk" role="project consultant" src={e} />
                    <TeamMember name="tvhd" role="blockchain developer" src={f} />
                </SimpleGrid>
            </Box>
        </>
    )
}

export default Team