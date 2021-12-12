import { Button, Container, Box, Heading, Text, Grid, Image } from 'theme-ui'
import BigLink from '../components/bigLink'
import HalfMoon from '../components/halfmoon'
import HalfText from '../components/halftext'
import Divider from '../components/divider'

const About = () => (
  <>
    <Container
      sx={{
        display: 'block',
        mx: 'auto',
        px: [1, 1, 2],
        py: [4],
        mt: [6, 6, 6],
        width: ['auto', '100%'],
      }}
    >
      <Grid
        gap={theme => [
          `${theme.space[6]}px ${theme.space[4]}px`,
          `${theme.space[7]}px ${theme.space[4]}px`,
          `${theme.space[7]}px ${theme.space[5]}px`,
        ]}
        columns={[1, 1, 2]}
        sx={{ mx: 'auto' }}
      >
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
            sx={{
              ml: 'auto',
              mr: ['auto', 'auto', 0],
              width: '144px',
              height: '144px',
              borderRadius: '100%',
            }}
            src="/images/pfp.jpg"
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
            pt: [1],
          }}
        >
          <BigLink text="engineer" loc="#engineer" />
          <BigLink text="writer" loc="#writer" />
          <BigLink text="etcetera" loc="#etcetera" />
        </Box>
        <Divider id="engineer" src="/images/arrow2.svg" />
        <HalfMoon src="/images/coast.svg" align="left" />
        <HalfText align="left" heading="sustainably seeking.">
          <Text>
            My hometown is in a biodiversity hotspot, so I grew up learning
            about endangered butterflies, cleaning up our lagoon, and caring for
            native plants. As a result, I’m passionate about sustainability.{' '}
            <br />
            <br />
            In my B.S. in Materials Science and Engineering, I want to search
            for biodegradable or recyclable materials to reduce the tons of
            waste we create each year, and also find ways to make a
            minimal-waste, carbon-neutral economy a reality.
            <br />
            <br />I also like coding random things for fun! I primarily do
            webdev, using Next.js, Node.js, and Python in my projects. I’ve also
            dabbled a tiny bit in machine learning.
          </Text>
        </HalfText>
        <Divider id="writer" src="/images/backbone.svg" />
        <HalfText align="right" heading="dreamily drafting.">
          <Text>
            I’m also a Cantonese-American writer from the Bay Area who grew up
            on a mix of Chinese kung fu TV dramas, strong blends of black tea
            (both hot and cold), high doses of cosmic gay radiation, and Hong
            Kong egg waffles.
            <br />
            <br />
            I didn't have many queer Asian role models growing up, and so I
            feared that being queer and Chinese were contradictory qualities.
            <br />
            <br />
            Now, I’m trying to fill that hole with complex queer characters of
            color for other readers to relate to, like a nonbinary ex-detective
            on the run or a sapphic pirate in love with a mermaid.
          </Text>
        </HalfText>
        <HalfMoon src="/images/hk.svg" align="right" />
        <Divider id="etcetera" src="/images/clouds.svg" />
        <HalfMoon src="/images/closet.svg" align="left" />
        <HalfText align="left" heading="happily hobbying.">
          <Text>
            Besides writing and sciencing, I regularly drive my human-powered
            buggy around Schenley Park on practice rolls with my team, Spirit
            Racing Systems.
            <br />
            <br />
            I am also involved with CMU’s student-run theatre troupe,
            Scotch’n’Soda Theatre; I played the synth for their recent
            production of Rocky Horror and am currently their props tech area
            co-head.
            <br />
            <br />
            Outside of all these commitments, I doodle, play the piano, listen
            to Unknown Mortal Orchestra, and feed my addiction to black tea.
          </Text>
        </HalfText>
        <Box
          sx={{
            gridColumn: ['', '', '1 / 3'],
            justifySelf: 'center',
            textAlign: 'center',
            mt: [5],
            mb: [3],
            width: ['75%', '50%'],
          }}
        >
          <hr style={{width: '50%', marginBottom: '40px'}}/>
          <Text>
            Fonts are Cabinet Grotesk (heading) & Lora (body). Designed by me on Figma & Next.js in 2021.
          </Text>
        </Box>
      </Grid>
    </Container>
  </>
)

export default About
