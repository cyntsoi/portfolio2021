import { extendTheme } from '@chakra-ui/react'

/* Global Styles */
import styles from './styles'

/* Foundations */
import fonts from './foundations/fonts'
import colors from './foundations/colors'
import sizes from './foundations/sizes'
import breakpoints from './foundations/breakpoints'
import layerStyles from './foundations/layerStyles'
import textStyles from './foundations/textStyles'

/* Components */
import Button from './components/Button'
import Container from './components/Container'
import Header from './components/Header'
import Heading from './components/Heading'
import Text from './components/Text'
import SkipLink from './components/SkipLink'

/* Override Chakra default theme and component styles */
const theme = extendTheme({
  styles,
  colors,
  layerStyles,
  textStyles,
  fonts,
  breakpoints: breakpoints as any,
  sizes,
  components: {
    Button: Button as any,
    Container,
    Header,
    Heading: Heading as any,
    Text,
    SkipLink,
  },
})

export default theme
