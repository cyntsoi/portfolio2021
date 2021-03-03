import { colorMode } from './foundations/colors'

export default {
  global: (props) => ({
    html: {
      scrollBehavior: 'smooth',
      '@media (prefers-reduced-motion)': {
        scrollBehavior: 'auto',
      },
    },
    body: {
      color: colorMode.body(props),
      bg: colorMode.background(props),
    },
    // color mode utils
    '.border': {
      borderColor: colorMode.border(props),
    },
    '.bg-tint': {
      bg: colorMode.tint(props),
    },
    '.bg-hover-tint': {
      _hover: {
        bg: colorMode.tint(props),
      },
    },
  }),
}
