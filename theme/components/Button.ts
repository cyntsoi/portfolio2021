import { colorMode } from '../foundations/colors'

const ButtonOffset = 6

export default {
  baseStyle: {
    borderRadius: 9,
    boxSizing: 'content-box',
    fontWeight: 400,
    fontSize: { base: '.875rem', md: '.9375rem' },
    fontFamily: 'heading',
  },
  variants: {
    outline: (props) => ({
      transform: `translateY(-${ButtonOffset}px)`,
      transition: 'all .1s',
      px: 3,
      borderWidth: '2px',
      color: colorMode.body(props),
      bg: colorMode.background(props),
      borderColor: 'currentColor',
      position: 'relative',
      ':hover, :active, :focus': {
        bg: colorMode.tint(props),
        transform: 'translateY(0px) !important;',
        ':before': {
          transform: 'translateY(0px)',
        },
      },
      ' > *': {
        position: 'relative',
        zIndex: 1,
      },
      _after: {
        content: '""',
        position: 'absolute',
        borderRadius: 'inherit',
        border: 'inherit',
        background: 'inherit',
        transition: 'inherit',
        w: '100%',
        h: '100%',
        pointerEvents: 'none',
        boxSizing: 'inherit',
      },
      _before: {
        content: '""',
        position: 'absolute',
        borderRadius: 'inherit',
        border: 'inherit',
        background: 'inherit',
        transition: 'inherit',
        w: '100%',
        h: '100%',
        pointerEvents: 'none',
        boxSizing: 'inherit',
        transform: `translateY(${ButtonOffset}px)`,
        ':hover, :active, :focus': {
          transform: 'translateY(0px)',
        },
      },
    }),
  },
}
