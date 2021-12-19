import { Box, Heading, Text } from 'theme-ui'

const HalfText = props => {
  const { heading, align } = props
  return (
    <>
      <Box
        sx={{
          width: 'auto',
          display: 'block',
          justifySelf: ['center', 'center', align == 'left' ? 'start' : 'end'],
          textAlign: ['left', 'left', align == 'left' ? 'left' : 'right'],
          maxWidth: '35ch',
        }}
      >
        <Heading
          sx={{
            lineHeight: '1.1',
            textAlign: ['left', 'left', align == 'left' ? 'left' : 'right'],
            color: 'primary'
          }}
          variant="subtitle"
        >
          {heading}
        </Heading>
        {props.children}
      </Box>
    </>
  )
}

export default HalfText
