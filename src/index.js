import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import '@fontsource/poppins/700.css'
import '@fontsource/poppins/400.css'

import { extendTheme, ChakraProvider } from '@chakra-ui/react'


const theme = extendTheme({
  fonts: {
    heading: 'Poppins, sans-serif',
    body: 'Poppins, sans-serif',
  },
  colors: {
    accent: "#d2d3cf"
  },
  components: {
    Heading: {
      baseStyle: {
        textTransform: "uppercase",
        color: "white"
      },
      defaultProps: {
        size: "2xl"
      }
    },
    Tag: {
      baseStyle: {
        px: "2px",
        mx: "4px",
      },
      defaultProps: {
        colorScheme: 'green'
      }
    },
    Text: {
      baseStyle: {
        color: "white"
      }
    }
  }
})


ReactDOM.render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <App />
    </ChakraProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
