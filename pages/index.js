import { Button, Container, Box, Heading, Text, Grid, Image } from 'theme-ui'
import BigLink from '../components/bigLink'
import bigLink from '../components/bigLink'

const About = () => (
  <>
    <Container
      sx={{
        mx: 'auto',
        px: [1, 1, 2],
        py: [4],
        mt: [2],
        width: ['auto', '100%'],
      }}
    >
      <Grid gap={[3, 3, 4]} columns={[1, 1, 2]} sx={{ mx: 'auto' }}>
        <Box
          sx={{
            width: ['auto'],
            textAlign: ['center', 'center', 'right'],
            display: 'flex',
            flexDirection: 'column',
            alignContent: 'center',
          }}
        >
          <Image
            sx={{ display: 'block', float: 'right', width: '144px', height: '144px', borderRadius: '100%',}}
            src="https://cdn.shopify.com/s/files/1/2198/0277/products/2001002_800x.jpg?v=1571713554"
          />
          <Heading variant="ultratitle">avi wong</Heading>
          <Text>
            interdisciplinary student
            <br /> sf → pittsburgh
            <br /> carnegie mellon ‘25
            <br /> awong8 [at] cmu [dot] edu
          </Text>
        </Box>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignContent: 'center',
          }}
        >
          <BigLink text="engineer" loc="#" />
          <BigLink text="writer" loc="#" />
          <BigLink text="et cetera" loc="#" />
        </Box>
      </Grid>
    </Container>
  </>
)

export default About
