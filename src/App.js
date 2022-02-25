import React from 'react'
import Nav from './components/Nav'
import Home from './components/Home'
import Story from './components/Story';
import Roadmap from './components/Roadmap';
import Welcome from './components/Welcome';
import Team from './components/Team';
import Footer from './components/Footer'
import FAQ from './components/FAQ'
import bg from './images/body-bg.jpeg'

import Carousel from './components/Carousel';

import { Box } from '@chakra-ui/react';



function App() {
  return (
    <>
      <Box bgImage={bg} bgAttachment={["unset", "unset", "fixed", "fixed"]} overflowX='hidden'>
        <Home>
          <Nav />
        </Home>
        <Welcome />
        <Carousel />
        <Story />
        <Roadmap />
        <Team />
        <FAQ />
        <Footer />
      </Box>
    </>
  );
}

export default App;
