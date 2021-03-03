import React, { FC } from 'react'
import { HStack, Text } from '@chakra-ui/layout'

export const TopBanner: FC<{ html: string }> = ({ html }) => {
  return (
    <HStack
      justify="center"
      textStyle="title-xs"
      px={4}
      h="header-height-sm"
      w="100%"
      textAlign="center"
      bgGradient="linear(to-r,gray.300,yellow.400,pink.200)"
    >
      <Text dangerouslySetInnerHTML={{ __html: html }} />
    </HStack>
  )
}
