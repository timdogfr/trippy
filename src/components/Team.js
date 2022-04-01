import React from 'react'
import { Box, VStack, Image, Heading, SimpleGrid, Text, Center } from '@chakra-ui/react'


import a from '../images/team/Nishfoshizzle.png'
import b from '../images/team/AMG0405.png'
import c from '../images/team/Duds.png'
import d from '../images/team/Gau_Aadmi.jpg'
import e from '../images/team/Mr_Mohawk.png'
import f from '../images/team/TCVDH.png'
import g from '../images/team/Wibbo.png'
import h from '../images/team/thabo.png'



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
        <Box pb={32}>
            <Box>
                <Heading align="center">Our</Heading><Heading color="accent" align="center" pb={12} size="4xl">Team</Heading>
            </Box>
            <Box mx={[32, 32, 16, 16, 32]} id="Team">
                <Center>
                    <SimpleGrid spacing="6vw" columns={["1", "2", "3", "4"]} rowGap={8} >
                        <TeamMember name="Nishfoshizzle" role="project lead" src={a} />
                        <TeamMember name="AMG0405" role="marketing" src={b} />
                        <TeamMember name="Duds" role="artist" src={c} />
                        <TeamMember name="Gau Aadmi" role="pr / marketing" src={d} />
                        <TeamMember name="Mr Mohawk" role="project consultant" src={e} />
                        <TeamMember name="KingThabo" role="Marketing" src={h} />
                        <TeamMember name="TCVDH" role="blockchain developer" src={f} />
                        <TeamMember name="Wibbo" role="Graphic Designer" src={g} />
                    </SimpleGrid>
                </Center>
            </Box>

        </Box>
    )
}

export default Team