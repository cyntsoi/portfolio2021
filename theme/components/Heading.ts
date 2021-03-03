import { colorMode } from '../foundations/colors'

export default {
  baseStyle: (props) => ({
    color: colorMode.title(props),
    fontWeight: 400,
    lineHeight: 1.45,
    fontSize: { base: '1.5rem', md: '1.8rem' },
  }),
  variants: {
    subheading: {
      fontSize: { base: '1.125rem', md: '1.375rem' },
      lineHeight: 1.7,
    },
  },
  sizes: {
    sm: {
      fontSize: { base: '1.125rem', md: '1.4375rem' },
    },
  },
  defaultProps: {
    size: {},
  },
}
