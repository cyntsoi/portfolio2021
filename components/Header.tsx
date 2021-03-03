import {
  HStack,
  VStack,
  Text,
  TextProps,
  StackProps,
  chakra,
  useColorMode,
  StylesProvider,
  useStyles,
  useMultiStyleConfig,
} from '@chakra-ui/react'
import Link, { LinkProps } from 'next/link'
import { PropsWithChildren, FC } from 'react'
import { useScrollPositionContext } from '../hooks/useScrollPosition'
import { DarkModeSwitch } from './DarkModeSwitch'
import Icons from './icons/'

const BORDER_COLORS = {
  light: 'gray.100',
  dark: 'gray.700',
}

const NavLink: FC<
  TextProps & Pick<LinkProps, 'href'> & { target?: string }
> = ({ href, ...textProps }) => {
  return (
    <Link href={href} passHref>
      <Text
        as="a"
        fontFamily="heading"
        fontSize={'1.0675rem'}
        fontWeight={400}
        {...textProps}
      />
    </Link>
  )
}

const NavItem: FC<PropsWithChildren<StackProps>> = ({
  children,
  ...stackProps
}) => {
  const { colorMode } = useColorMode()
  const styles = useStyles()
  return (
    <VStack
      sx={styles.item}
      px={2.5}
      mx={-5}
      _hover={{ backgroundColor: BORDER_COLORS[colorMode] }}
      {...stackProps}
    >
      {children}
    </VStack>
  )
}

const HeaderLeft: FC<Record<string, never>> = () => {
  return (
    <HStack spacing={6}>
      <NavItem _hover={{ backgroundColor: 'transparent' }} px={0} mx={0}>
        <NavLink href={'/'} fontWeight={500} fontSize={'1.125rem'}>
          cynthiaTsoi
        </NavLink>
      </NavItem>
      <HStack spacing={5} px={2.5}>
        <NavItem>
          <NavLink href={'/#about'}>about</NavLink>
        </NavItem>
        <NavItem>
          <NavLink href={'/#tech-stack'}>tech stack</NavLink>
        </NavItem>
        <NavItem>
          <NavLink href={'/#projects'}>projects</NavLink>
        </NavItem>
        <NavItem>
          <NavLink href={'/#contact'}>contact</NavLink>
        </NavItem>
      </HStack>
    </HStack>
  )
}

const HeaderRight = () => {
  return (
    <HStack>
      <HStack spacing={5} pl={2.5}>
        <NavItem>
          <NavLink px={2} target={'_blank'} href={'https://digitalchaos.ca/'}>
            view source <Icons.CodeIcon />
          </NavLink>
        </NavItem>
        <NavItem
          borderLeftWidth={1}
          className="border"
          _hover={{ backgroundColor: 'transparent' }}
        >
          <HStack spacing={4} px={2}>
            <NavLink
              px={0}
              mx={0}
              target={'_blank'}
              href={'https://digitalchaos.ca/'}
            >
              <Icons.LinkedInIcon />
            </NavLink>
            <NavLink
              px={0}
              mx={0}
              target={'_blank'}
              href={'https://digitalchaos.ca/'}
            >
              <Icons.GithubIcon />
            </NavLink>
            <NavLink
              px={0}
              mx={0}
              target={'_blank'}
              href={'https://digitalchaos.ca/'}
            >
              <Icons.CodepenIcon />
            </NavLink>
          </HStack>
        </NavItem>
        <NavItem w="header-height" position="relative" mr={0}>
          <DarkModeSwitch layerStyle="overlay" />
        </NavItem>
      </HStack>
    </HStack>
  )
}

export const Header: FC<Record<string, never>> = () => {
  const { current: scrollPos } = useScrollPositionContext()
  const styles = useMultiStyleConfig('Header', { isFixed: scrollPos > 60 })
  return (
    <chakra.nav sx={styles.wrapper}>
      <HStack sx={styles.container} id="header">
        <StylesProvider value={styles}>
          <HeaderLeft />
          <HeaderRight />
        </StylesProvider>
      </HStack>
    </chakra.nav>
  )
}
