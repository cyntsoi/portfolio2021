import React, { FC, PropsWithChildren, Fragment } from 'react'
import { DarkMode, LightMode, useColorMode } from '@chakra-ui/color-mode'

const InvertWrappers = {
  dark: LightMode,
  light: DarkMode,
}

export const InvertColorMode: FC<PropsWithChildren<any>> = ({ children }) => {
  const { colorMode } = useColorMode()
  const Wrapper =
    typeof InvertWrappers[colorMode] !== 'undefined'
      ? InvertWrappers[colorMode]
      : Fragment
  return <Wrapper>{children}</Wrapper>
}
