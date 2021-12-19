import { Box, Image } from 'theme-ui'
import theme from '../lib/theme'
import { useColorMode } from 'theme-ui'

const Divider = props => {
  const { src, w, h, } = props
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
            height: h,
            width: w,
            filter: (theme) => `${theme.colors.svgfilter}`,
          }}
          src={src}
        />
      </Box>
    </>
  )
}

export default Divider
