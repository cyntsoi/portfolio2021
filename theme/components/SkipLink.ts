import { colorMode } from '../foundations/colors'

export default {
  baseStyle: (props) => ({
    _focusWithin: {
      all: 'unset',
      fontFamily: 'heading',
      borderRadius: 5,
      position: 'absolute',
      backgroundColor: colorMode.background(props),
      color: colorMode.body(props),
      width: 'auto',
      display: 'block',
      padding: '1.3rem 1.1rem',
      lineHeight: 1,
      fontWeight: 500,
      fontSize: '1.0675rem',
      top: '8.5rem',
      left: 4,
    },
  }),
}
