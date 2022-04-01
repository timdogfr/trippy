import React from 'react'
import { Box, Heading, Text, VStack, Stack, HStack, Badge } from '@chakra-ui/react'
import { SettingsIcon, CalendarIcon, TimeIcon, StarIcon, CheckCircleIcon, TriangleUpIcon, ArrowForwardIcon } from '@chakra-ui/icons'

function RoadmapItem({ n, children, icon, ...rest }) {
    return (
        <>
            <HStack w={["95%", "90%", "85%", "65%"]} spacing={8}>
                <Box>
                    {icon}
                </Box>
                <Box w="100%" rounded="12px" borderWidth="2px" borderColor="white" p={8} bgColor="rgba(0, 0, 0, 0.5)">
                    <Stack direction={["column", "column", "column", "column"]} spacing={8}>
                        <Heading align='center' color="accent" transform="rotate(-0deg)" mx={0} {...rest}>{n}</Heading>
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

                    <RoadmapItem n='Phase 0' icon={<SettingsIcon color="white" fontSize="32px" />}>
                        <Text fontSize="lg" fontStyle="italic"><Badge colorScheme='purple' p={2} px={4} rounded={10}>0 - 200 Mints</Badge></Text>
                        <Text>• The first 200 mints will be reserved for team and giveaways </Text>
                        <Text>• This includes marketing giveaways</Text>
                    </RoadmapItem>

                    <RoadmapItem n="Phase 1" icon={<CalendarIcon color="white" fontSize="32px" />}>
                        <Text fontSize="lg" fontStyle="italic"><Badge colorScheme='purple' p={2} px={4} rounded={10}>201 - 700 <ArrowForwardIcon /> Free Mint</Badge></Text>
                        <Text>• Up to 250 members who are able to mint a maximum of 2 TTC NFTs for free.</Text>
                        <Text>• Focus on community growth & organic marketing </Text>
                        <Text>• Community events </Text>
                    </RoadmapItem>

                    <RoadmapItem n="Phase 2" icon={<TimeIcon color="white" fontSize="32px" />}>
                        <Text fontSize="lg" fontStyle="italic"><Badge colorScheme='purple' p={2} px={4} rounded={10}>701 - 1200 <ArrowForwardIcon /> 10 matic</Badge></Text>
                        <Text>• Paid advertising with social media pages with large followings </Text>
                        <Text>• Giveaways to promote</Text>
                    </RoadmapItem>

                    <RoadmapItem n="Phase 3" icon={<StarIcon color="white" fontSize="32px" />} >
                        <Text fontSize="lg" fontStyle="italic"><Badge colorScheme='purple' p={2} px={4} rounded={10}>1201 - 2500 <ArrowForwardIcon /> 15 matic</Badge></Text>
                        <Text>• Two honorary 1/1s in a separate collection and 2x $500 will be raffled amongst the holders </Text>
                    </RoadmapItem>

                    <RoadmapItem n="Phase 4" icon={<CheckCircleIcon color="white" fontSize="32px" />} >
                        <Text fontSize="lg" fontStyle="italic"><Badge colorScheme='purple' p={2} px={4} rounded={10}>2501 - 7500 <ArrowForwardIcon /> 20 matic</Badge></Text>
                        <Text>• Merchandising design will be dropped and community will be able to send in their ideas & designs</Text>
                        <Text>• Eight honorary 1/1s in a different collection and 4x $1000 will be raffled amongst the holders </Text>
                    </RoadmapItem>

                    <RoadmapItem n="Phase 5" icon={<TriangleUpIcon color="white" fontSize="32px" />} >
                        <Text fontSize="lg" fontStyle="italic"><Badge colorScheme='purple' p={2} px={4} rounded={10}>7501 - 10000 <ArrowForwardIcon /> 25 matic</Badge></Text>
                        <Text>• To commemorate 100% sell out, we will donate 10% to saving the turtles and ocean clean up initiatives based on the community's vote but that’s not all…</Text>
                        <Text>• Ten honorary 1/1s in a different collection and 5x $1000 will be raffled amongst the holders </Text>
                        <Text>• Monthly giveaways for holders </Text>
                        <Text>• Merchandise sales </Text>
                        <Text>• 100% of the profits from merchandise sales goes to charity every quarterly </Text>
                        <Text>• Secondary market sales </Text>
                        <Text>• 20% goes to the team every month </Text>
                        <Text>• 40% goes into sweeping the floor which will either be used for giveaways or sent to a burner wallet every month which will reduce the supply eventually increasing the value of the TTC NFTs.</Text>
                        <Text>• Remaining 40% goes into the treasury every month</Text>
                    </RoadmapItem>
                </VStack>
            </Box>
        </>
    )
}

export default Roadmap