import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import '@fontsource/poppins/700.css'
import '@fontsource/poppins/400.css'

import { extendTheme, ChakraProvider } from '@chakra-ui/react'

const config = {
  initialColorMode: 'light',
  useSystemColorMode: false,
}

const theme = extendTheme({
  config,
  fonts: {
    heading: 'Poppins, sans-serif',
    body: 'Poppins, sans-serif',
  },
  colors: {
    accent: "#af0"
  },
  components: {
    Heading: {
      baseStyle: {
        textTransform: "uppercase",
        color: "#af0"
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
    Icon: {
      baseStyle: {

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
