import React from 'react'
import { Box, Heading, Accordion, AccordionButton, AccordionIcon, AccordionItem, AccordionPanel, Text } from '@chakra-ui/react'
import { ArrowForwardIcon } from '@chakra-ui/icons'

function FAQItem({ question, children }) {
    return (
        <>
            <AccordionItem>
                <h2>
                    <AccordionButton _focus={{ outline: 0 }}>
                        <Box py={6} flex='1' textAlign='left' color="white">
                            {question}
                        </Box>
                        <AccordionIcon />
                    </AccordionButton>
                </h2>
                <AccordionPanel py={8} color="accent" align='left'>
                    {children}
                </AccordionPanel>
            </AccordionItem>
        </>
    )
}


function FAQ() {
    return (
        <Box mx={[4, 4, 32, 64]} align="center" my={64} id="FAQ">
            <Box>
                <Heading align="center">The</Heading><Heading color="accent" align="center" pb={24} size="4xl">FAQ</Heading>
            </Box>
            <Accordion w="100%" allowToggle>
                <FAQItem question="When is presale mint?">
                    <Text color="accent">March 31st</Text>
                </FAQItem>
                <FAQItem question="When is public mint?">
                    <Text color="accent">April 1st</Text>
                </FAQItem>
                <FAQItem question="How much is mint?">
                    <Text color="accent">• Phase 0 <ArrowForwardIcon mx={4} /> 0-200 <ArrowForwardIcon mx={4} /> for giveaway & team</Text>
                    <Text color="accent">• Phase 1 <ArrowForwardIcon mx={4} /> 201-700 <ArrowForwardIcon mx={4} /> free mint - (submission of wallet address, maximum of 2 free mints per submitted wallet)</Text>
                    <Text color="accent">• Phase 2 <ArrowForwardIcon mx={4} /> 701-1200 <ArrowForwardIcon mx={4} /> 10 matic (unlimited mint, max of 5 mints per transaction)</Text>
                    <Text color="accent">• Phase 3 <ArrowForwardIcon mx={4} /> 1201 - 2500 <ArrowForwardIcon mx={4} /> 15 matic (unlimited mint, max of 5 mints per transaction)</Text>
                    <Text color="accent">• Phase 4 <ArrowForwardIcon mx={4} /> 2501 - 7500 <ArrowForwardIcon mx={4} /> 20 matic (unlimited mint, max of 5 mints per transaction)</Text>
                    <Text color="accent">• Phase 5 <ArrowForwardIcon mx={4} /> 7501 - 10000 <ArrowForwardIcon mx={4} /> 25 matic (unlimited mint, max of 5 mints per transaction)</Text>

                </FAQItem>
            </Accordion>
        </Box >
    )
}

export default FAQ