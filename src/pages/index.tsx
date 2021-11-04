import { Box, Text } from '@chakra-ui/react'
import MotionBox from 'components/motion/Box'

const Home = () => {
  return (
    <Box mb={8} w="full" title="test">
      <Text fontSize="3xl">
        Hello there <WavingHand /> !
      </Text>
      <Text fontSize="2xl">Time to build something cool!</Text>
    </Box>
  )
}

const WavingHand = () => (
  <MotionBox
    sx={{
      marginBottom: '-20px',
      marginRight: '-45px',
      paddingBottom: '20px',
      paddingRight: '45px',
      display: 'inline-block',
    }}
    animate={{ rotate: 20 }}
    transition={{
      yoyo: 3,
      from: 0,
      duration: 0.3,
      ease: 'easeInOut',
    }}
  >
    👋
  </MotionBox>
)

export default Home
