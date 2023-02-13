import { ChakraProvider } from '@chakra-ui/react'
import theme from '../styles/theme'



function MyApp({ Component, pageProps }) {

  return (  <ChakraProvider theme={theme} resetCSS>
    <Component {...pageProps} />
  </ChakraProvider>
)
}


export default MyApp