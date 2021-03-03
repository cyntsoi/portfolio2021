import { colorMode } from '../theme/foundations/colors'
import { useColorMode } from '@chakra-ui/color-mode'

export const useColor = (key: keyof typeof colorMode) => {
  const { colorMode: current } = useColorMode()
  return colorMode[key]({ colorMode: current })
}

export default useColor
