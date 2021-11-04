import { extendTheme } from '@chakra-ui/react'
import colors from './colors'
import Button from './components/button'
import fonts from './fonts'

const theme = extendTheme({
  fonts,
  colors,
  components: {
    Button,
  },
})

export default theme
