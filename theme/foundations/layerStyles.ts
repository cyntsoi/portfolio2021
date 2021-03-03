import { useColorModeValue } from '@chakra-ui/color-mode'
import { colorMode } from './colors'

// position="absolute" top="0" left="0" w="100%" h="100%"/

export default {
  overlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    w: '100%',
    h: '100%',
  },
  'bg-white': (props) => ({
    bg: colorMode.background(props),
    color: colorMode.body(props),
  }),
  border: () => ({
    borderColor: useColorModeValue('gray.200', 'gray.700'),
  }),
}
