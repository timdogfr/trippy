import { Box, Stack, Image, VStack, Heading, Text, Spacer } from '@chakra-ui/react'
import React from 'react'

function Story() {
    return (
        <>
            <Box mx={32}>
                <Stack
                    direction={["column", "column", "column", "column", "row"]}
                    spacing={12}
                    align="center"
                    justify='space-between'
                >
                    <VStack spacing={8} w="100%">
                        <Box>
                            <Heading align="center" color="unset">Our</Heading><Heading align="center" pb={8} size="4xl">Story</Heading>
                        </Box>
                        <Text>
                            The  year  is  2420. Centuries of space-tourism and neglectful waste disposal on Earth have increased carbon emissions and general toxicity to unprecedented and uninhabitable levels. Most humans have retreated to colonies on Mars and other nearby planets. Earth is still a popular stop; unfortunately, it’s mostly for waste disposal. Humans aren’t planning on ruining their adopted home planet a second time.
                        </Text>
                        <Text>
                            Earth is a lost cause - a forgotten history. The blue planet is no longer recognizable by previous standards. Still, evolution found a way and accelerated with the few surviving species.
                        </Text>
                        <Text>
                            We thought dolphins were the most intelligent sea creatures; well, turtles ended up being the dark horses of the survival race. Evolving from the cute little creatures we used to know, a small group of turtles discovered fire and tools off a deserted island and what they thought was seaweed.
                        </Text>
                        <Text>
                            The rest is (a  new) history. This community of 10,000 turtles now reside on a secret island, resembling what we’d have imaged Atlantis to be like.
                        </Text>
                    </VStack>
                    <Spacer />
                    <Image src="https://uploads-ssl.webflow.com/61fa6391d5cbf61cdc749a3e/620d1709c015990c83952f73_Gau%20Admi2.png" w={["70%", "60%", "50%", "30%"]} rounded="100%" mx={16} />
                </Stack>
            </Box>
        </>
    )
}

export default Story