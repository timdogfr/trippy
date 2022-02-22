import React from 'react'
import { Box, Heading, Accordion, AccordionButton, AccordionIcon, AccordionItem, AccordionPanel } from '@chakra-ui/react'

function FAQItem({ question, answer }) {
    return (
        <>
            <AccordionItem>
                <h2>
                    <AccordionButton>
                        <Box py={6} flex='1' textAlign='left'>
                            {question}
                        </Box>
                        <AccordionIcon />
                    </AccordionButton>
                </h2>
                <AccordionPanel py={8} color="accent">
                    {answer}
                </AccordionPanel>
            </AccordionItem>
        </>
    )
}


function FAQ() {
    return (
        <Box mx={32} align="center">
            <Box>
                <Heading align="center" color="unset">The</Heading><Heading align="center" pb={24} size="4xl">FAQ</Heading>
            </Box>
            <Accordion w={["95%", "90%", "85%", "70%"]} allowToggle>
                <FAQItem question="How much is whitelist mint?" answer="Presale mint price is 20 matic" />
                <FAQItem question="How much is public mint?" answer="Public Sale mint price is 30 matic" />
                <FAQItem question="How many can a whitelisted member mint?" answer="Up to 5 NFT's per wallet" />
                <FAQItem question="How many can a non-whitelisted member mint?" answer="Up to 10 NFT's per transaction" />
            </Accordion>
        </Box >
    )
}

export default FAQ