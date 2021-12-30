import { Button, Container, Box, Heading, Text, Grid, Image } from 'theme-ui'
import BigLink from '../components/bigLink'
import HalfMoon from '../components/halfmoon'
import HalfText from '../components/halftext'
import Divider from '../components/divider'

function random(array) {
  return array[Math.floor(Math.random() * array.length)]
}

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
          `${theme.space[4]}px ${theme.space[4]}px`,
          `${theme.space[5]}px ${theme.space[4]}px`,
          `${theme.space[5]}px ${theme.space[5]}px`,
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
          <Box
            sx={{
              ml: 'auto',
              mr: ['auto', 'auto', 0],
              width: '144px',
              height: '144px',
              boxShadow: theme => {
                let stop = Math.random() * 50 + 10
                return ` inset 0px 0px 0px ${stop}px ${theme.colors.text}`
              },
              transition: 'box-shadow 0.15s',
              borderRadius: '100%',
            }}
            src="/images/pfp.png"
          />
          <Heading variant="ultratitle">avi wong</Heading>
          <Text sx={{ mt: 1 }}>
            interdisciplinary student
            <br /> sf → pittsburgh | they/them
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
        <Box
          sx={{
            height: theme => `${theme.space[5]}px`,
            gridColumn: ['', '', '1 / 3'],
          }}
        ></Box>
        <Divider w="105px" h="57px" src="/images/arrow2.svg" />
        <Box
          sx={{
            height: theme => `${theme.space[5]}px`,
            gridColumn: ['', '', '1 / 3'],
          }}
          id="engineer"
        ></Box>
        <HalfMoon src="/images/microscope.svg" align="left" />
        <HalfText
          align="left"
          heading="sustainably seeking."
        >
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
        <Box
          sx={{
            height: theme => `${theme.space[5]}px`,
            gridColumn: ['', '', '1 / 3'],
          }}
        ></Box>
        <Divider w="229px" h="32px" src="/images/backbone.svg" />
        <Box
          sx={{
            height: theme => `${theme.space[5]}px`,
            gridColumn: ['', '', '1 / 3'],
          }}
          id="writer"
        ></Box>
        <HalfText align="right" heading="dreamily drafting.">
          <Text>
            I’m also a Cantonese-American writer from the Bay Area who grew up
            on a blend of kung fu TV dramas, historical & fantasy YA novels,
            high doses of cosmic queer radiation, and crispy Hong Kong egg
            waffles.
            <br />
            <br />
            Although I grew up in a supportive community, I had no queer Asian
            role models, so I feared that being queer and being Chinese were
            mutually exclusive.
            <br />
            <br />
            Now, I craft stories about complex queer characters of color for
            other readers to relate to, like a cheeky nonbinary detective with
            questionable loyalties and a sapphic warrior leading a band of
            demonhunters.
          </Text>
        </HalfText>
        <HalfMoon src="/images/quill.svg" align="right" />
        <Box
          sx={{
            height: theme => `${theme.space[5]}px`,
            gridColumn: ['', '', '1 / 3'],
          }}
        ></Box>
        <Divider w="314px" h="73px" src="/images/clouds.svg" />
        <Box
          sx={{
            height: theme => `${theme.space[5]}px`,
            gridColumn: ['', '', '1 / 3'],
          }}
          id="etcetera"
        ></Box>
        <HalfMoon src="/images/piano.svg" align="left" />
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
            to{' '}
            {random([
              'Unknown Mortal Orchestra',
              'Khruangbin',
              'HYUKOH',
              'Flying Lotus',
              'ADG7',
              'SE SO NEON',
            ])}
            , and feed my addiction to black tea.
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
          <hr style={{ width: '50%', marginBottom: '40px' }} />
          <Text>
            Fonts are Cabinet Grotesk (heading) & Lora (body). Icons from icons8.com. Designed by me on
            Figma & Next.js in 2021.
          </Text>
        </Box>
      </Grid>
    </Container>
  </>
)

export default About
