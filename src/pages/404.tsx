import { Box, Button, Heading, Image, useColorMode } from '@chakra-ui/react'
import MotionBox from 'components/motion/Box'
import Link from 'next/link'

const Page404 = () => {
  const { colorMode } = useColorMode()

  return (
    <>
      <MotionBox
        animate={{ y: 20 }}
        transition={{ repeat: Infinity, duration: 2, repeatType: 'reverse' }}
        width={['100%', '70%', '60%', '60%']}
        margin="0 auto"
      >
        <Image src="/404-image.svg" alt="Error 404 not found Illustration" />
      </MotionBox>

      <Box marginY={4}>
        <Heading textAlign="center">Page not Found.</Heading>

        <Box textAlign="center" marginTop={4}>
          <Link href="/" passHref>
            <Button
              backgroundColor={colorMode === 'light' ? 'gray.300' : 'teal.500'}
            >
              Go to Homepage
            </Button>
          </Link>
        </Box>
      </Box>
    </>
  )
}

export default Page404
