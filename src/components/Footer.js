import React from 'react'
import { Stack, Image, Box, IconButton, VStack, Text } from '@chakra-ui/react'

import { FaDiscord, FaTwitter, FaInstagram, FaShip } from 'react-icons/fa';

function FooterIcon({ name, icon, ...rest }) {
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


function Footer() {
    return (
        <Box mb={32}>
            <VStack
                spacing={12}
                align="center"
            >
                <Stack direction="row" align="center" spacing={5}>
                    <Image src="./nav_logo.png" h="140px" />
                    <FooterIcon name="Discord" icon={<FaDiscord />} />
                    <FooterIcon name="Twitter" icon={<FaTwitter />} />
                    <FooterIcon name="Instagram" icon={<FaInstagram />} />
                    <FooterIcon name="OpenSea" icon={<FaShip />} disabled />
                </Stack>
                <Text>
                    © 2022 TTC. All right reserved.
                </Text>
            </VStack>
        </Box>
    )
}

export default Footer