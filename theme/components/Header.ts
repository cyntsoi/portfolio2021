import { colorMode } from '../foundations/colors'

export default {
  // The parts of the component
  parts: ['wrapper', 'container', 'item'],
  // The base styles for each part
  baseStyle: (props) => ({
    wrapper: {
      h: 'header-height',
      w: '100%',
      position: 'relative',
      zIndex: 10,
    },
    container: {
      justifyContent: 'space-between',
      top: 0,
      bg: colorMode.background(props),
      borderBottomWidth: 1,
      borderColor: colorMode.border(props),
      position: props.isFixed ? 'fixed' : 'static',
      pl: 5,
      w: '100%',
    },
    item: {
      justifyContent: 'center',
      transition: 'all 0.2s',
      h: 'header-height',
    },
  }),
  // The size styles for each part
  sizes: {},
  // The variant styles for each part
  variants: {},
  // The default `size` or `variant` values
  defaultProps: {},
}
