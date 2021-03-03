import React, { FC } from 'react'
import { ButtonProps, Button as CButton } from '@chakra-ui/button'
import { Box } from '@chakra-ui/react'

export const Button: FC<ButtonProps & { href?: string }> = ({
  children,
  ...props
}) => {
  // wrapping button text with span, otherwise it will be covered by the :after element
  return (
    <CButton variant="outline" {...props}>
      <Box as="span">{children}</Box>
    </CButton>
  )
}
