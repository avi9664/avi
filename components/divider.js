import { Box, Image } from 'theme-ui'
import theme from '../lib/theme'
import { useColorMode } from 'theme-ui'

const Divider = props => {
  const { src, id } = props
  const [colorMode] = useColorMode()
  return (
    <>
      <Box
        sx={{
          gridColumn: ['', '', '1 / 3'],
          ml: 0,
        }}
      >
        <Image
          sx={{
            display: 'block',
            mx: 'auto',

            filter: colorMode == 'dark' ?
            'invert(94%) sepia(12%) saturate(86%) hue-rotate(108deg) brightness(102%) contrast(95%)' 
            :
              'invert(3%) sepia(5%) saturate(3045%) hue-rotate(161deg) brightness(103%) contrast(93%)',
          }}
          src={src}
        />
        <Box id={id}></Box>
      </Box>
    </>
  )
}

export default Divider
