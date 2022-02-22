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
import { Box } from '@chakra-ui/react';


function App() {
  return (
    <>
      <Box bgImage={bg} bgAttachment={["unset", "unset", "fixed", "fixed"]}>
        <Home>
          <Nav />
        </Home>
        <Welcome />
        <Roadmap />
        <Story />
        <Team />
        <FAQ />
        <Footer />
      </Box>
    </>
  );
}

export default App;
