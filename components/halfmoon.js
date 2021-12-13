import { Box, Image } from 'theme-ui'

const HalfMoon = props => {
  const { src, align }= props
  return (
    <>
      <Box
        sx={{
          display: ['none', 'none', 'block'],
          pt: [3],
          pb: [2],
        }}
      >
        <Image
          src={src}
          sx={{
            display: ['none', 'none', 'block'],
            ml: align == 'left' ? 'auto' : 0,
            mr: align == 'right' ? 'auto' : 0,
            mt: [1],
            height: '100%',
            width: 'auto',
          }}
        />
      </Box>
    </>
  )
}

export default HalfMoon
