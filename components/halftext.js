import { Box, Heading, Text, Container } from 'theme-ui'

const HalfText = props => {
  const { heading, align } = props
  return (
    <Container sx={{ gridColumn: ['', '', '1 / 3'] }}>
      <Box
        sx={{
          display: 'block',
          mx: 'auto',
          justifySelf: 'center',
          maxWidth: ['35ch', '60ch'],
        }}
      >
        <Heading
          sx={{
            lineHeight: '1.1',
            textAlign: 'center',
            color: 'text',
          }}
          variant="subtitle"
        >
          {heading}
        </Heading>
        {props.children}
      </Box>
    </Container>
  )
}

export default HalfText
