import React, { ComponentProps, FC } from 'react'
import Icon, { IconProps } from '@chakra-ui/icon'

export const withChakraIcon = (
  Component: ComponentProps<typeof Icon>['as']
): FC<IconProps> => {
  return (iconProps) => {
    return <Icon as={Component} {...iconProps} />
  }
}
