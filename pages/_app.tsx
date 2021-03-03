import {ChakraProvider} from '@chakra-ui/react'

import theme from '../theme/'
import {Global} from '@emotion/react'
import {AppProps} from 'next/app'


const Fonts = () => (
    <Global
        styles={`
      @font-face {
        font-family: 'GT Eesti Display';
        font-style: normal;
        font-weight: 300;
        font-display: swap;
        src: url(/fonts/GT-Eesti-Display-Light-2.woff2) format('woff2'), url(/fonts/GT-Eesti-Display-Light-2.woff) format('woff'),url(/fonts/GT-Eesti-Display-Light-2.ttf) format('truetype');
      }
       @font-face {
        font-family: 'GT Eesti Display';
        font-style: normal;
        font-weight: 400;
        font-display: swap;
        src: url(/fonts/GT-Eesti-Display-Regular-2.woff2) format('woff2'), url(/fonts/GT-Eesti-Display-Regular-2.woff) format('woff'),url(/fonts/GT-Eesti-Display-Regular-2.ttf) format('truetype');
      }
      @font-face {
        font-family: 'GT Eesti Display';
        font-style: normal;
        font-weight: 500;
        font-display: swap;
        src: url(/fonts/GT-Eesti-Display-Medium-2.woff2) format('woff2'), url(/fonts/GT-Eesti-Display-Medium-2.woff) format('woff'),url(/fonts/GT-Eesti-Display-Medium-2.ttf) format('truetype');
      }
        @font-face{
        font-family: 'Sailec';
        font-style:normal;
        font-weight: 400;
        font-display:swapl
        src: url(/fonts/Sailec-Regular.woff2) format('woff2'), url(/fonts/Sailec-Regular.woff);
        }
      `}
    />
)

function MyApp({Component, pageProps}: AppProps) {
    return (
        <ChakraProvider resetCSS theme={theme}>
            <Fonts/>
            <Component {...pageProps} />
        </ChakraProvider>
    )
}

export default MyApp