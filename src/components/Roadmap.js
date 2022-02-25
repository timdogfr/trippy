import React from 'react'
import { Box, Heading, Text, VStack, Stack, HStack } from '@chakra-ui/react'
import { SettingsIcon, CalendarIcon, TimeIcon, StarIcon, CheckCircleIcon } from '@chakra-ui/icons'

function RoadmapItem({ n, children, icon }) {
    return (
        <>
            <HStack w={["95%", "90%", "85%", "65%"]} spacing={8}>
                <Box>
                    {icon}
                </Box>
                <Box w="100%" rounded="12px" borderWidth="2px" borderColor="white" p={8} bgColor="rgba(0, 0, 0, 0.5)">
                    <Stack direction={["column", "column", "row", "row"]} spacing={8} align="center">
                        <Heading color="accent" transform="rotate(-13deg)" mx={8}>{n}</Heading>
                        <VStack spacing={8} align="left">
                            {children}
                        </VStack>
                    </Stack>
                </Box>
            </HStack>
        </>
    )
}

function Roadmap() {
    return (
        <>
            <Box my={64} id="Roadmap">
                <VStack align="center" spacing={4}>
                    <Box>
                        <Heading align="center">Our</Heading><Heading color="accent" align="center" pb={8} size="4xl">Roadmap</Heading>
                    </Box>
                    <RoadmapItem n="10%" icon={<SettingsIcon color="white" fontSize="32px" />}>
                        <Text>Start of Paid collabs</Text>
                    </RoadmapItem>
                    <RoadmapItem n="25%" icon={<CalendarIcon color="white" fontSize="32px" />}>
                        <Text>2 honorary 1/1s in a different collection and 2 x $500 will also be raffled amongst the holders</Text>
                        <Text>2x $500 to be raffled</Text>
                    </RoadmapItem>
                    <RoadmapItem n="50%" icon={<TimeIcon color="white" fontSize="32px" />}>
                        <Text>10% of mints go into saving the turtles and ocean clean up. (Organizations will be voted by the community)</Text>
                        <Text>4 honorary 1/1s in a different collection and 4x $750 will also be raffled amongst the holders.</Text>
                        <Text>Celebrity and influencer marketing</Text>
                        <Text>Paid advertising with social media pages</Text>
                    </RoadmapItem>
                    <RoadmapItem n="75%" icon={<StarIcon color="white" fontSize="32px" />}>
                        <Text>Merchandising design will be dropped and community will be able to send in their ideas & designs too</Text>
                        <Text>Eight honorary 1/1s in a different collection and 4x $1000 will be raffled amongst the holders</Text>
                    </RoadmapItem>
                    <RoadmapItem n="100%" icon={<CheckCircleIcon color="white" fontSize="32px" />}>
                        <Text>To commemorate 100% sell out, we will donate another 10% to saving the turtles and Ocean Clean-up initiatives based on the community's vote</Text>
                        <Text>Ten honorary 1/1s in a different collection and 5x $1500 will be raffled amongst the holders</Text>
                        <Text>Monthly giveaways for holders</Text>
                        <Text fontSize="lg" fontStyle="italic" align="center">Merchandise Sales</Text>
                        <Text>20% of the profits from merchandise sales will be distributed to 2 lucky holders every quarterly - 20% of the profits from merchandise sales goes to charity every quarterly</Text>
                        <Text fontSize="lg" fontStyle="italic" align="center">Secondary Market Sales</Text>
                        <Text>10% of royalties earned from secondary market sales to go towards charity every month.
                            10% goes to the team every month.
                            Remaining 80% goes into the treasury every month</Text>
                        <Text>Begin work on 3D turtles or mutant turtles (Community chosen)</Text>
                        <Text>Free 3D or Mutant turtle for holders who hold more than 10 TTC NFTs</Text>
                        <Text>3D or mutant turtles available for mint to all holders. Total supply capped at 4000 available mints (including a maximum supply of 1000 airdropped to holders of 10 or more TTC.</Text>
                        <Text>Holders vote on the direction of the project for the future</Text>
                        <Text fontSize="lg" fontStyle="italic" align="center">Into the Metaverse? P2E? More PFP drops? That's for Roadmap 2.0</Text>
                    </RoadmapItem>
                </VStack>
            </Box>
        </>
    )
}

export default Roadmap