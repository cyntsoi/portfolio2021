import React, { FC } from 'react'
import {
  Box,
  ButtonGroup,
  Container,
  Grid,
  GridItem,
  Heading,
  Text,
} from '@chakra-ui/react'
import { Button } from '../../components/Button'
import { Button as CButton } from '@chakra-ui/react'

export interface IProps {
  subheading?: string
  body?: string
}

const Hero: FC<IProps> = ({ subheading = '', body = '' }) => {
  return (
    <Container
      id="about"
      as="section"
      maxW="container.xl"
      pt={{ md: 44, base: 20 }}
      pb={{ md: 52, base: 28 }}
    >
      <Grid templateColumns="repeat(12, 1fr)" gap={8} px={{ base: 6, md: 0 }}>
        <GridItem colStart={{ md: 2 }} colSpan={{ base: 11, md: 4 }}>
          <Heading pr={{ md: 6 }}>{subheading}</Heading>
        </GridItem>
        <GridItem colStart={{ md: 7 }} colSpan={{ base: 11, md: 5 }}>
          <Box mr={{ md: -4 }}>
            <Text mb={12}>{body}</Text>
            <ButtonGroup spacing={4}>
              <Button as="a" href="#projects">
                View Projects
              </Button>
              <CButton variant="ghost">Say Hello!</CButton>
            </ButtonGroup>
          </Box>
        </GridItem>
      </Grid>
    </Container>
  )
}

Hero.defaultProps = {
  subheading: 'I am a creative, full-stack developer based in Ontario, Canada.',
  body:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur id diam et elit aliquam varius. Vestibulum finibus luctus dolor, vel condimentum eros hendrerit ac. Cras eu finibus tortor. Nam ac euismod augue, a tincidunt nisl.',
}

export default Hero
