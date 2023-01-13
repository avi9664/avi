import {
  Button,
  Container,
  Box,
  Heading,
  Text,
  Grid,
  Image,
  Link,
} from 'theme-ui'
import BigLink from '../components/bigLink'
import HalfText from '../components/halftext'
import Divider from '../components/divider'
import Description from '../components/description'

function random(array) {
  return array[Math.floor(Math.random() * array.length)]
}

const About = () => (
  <>
    <Container
      sx={{
        display: 'block',
        mx: 'auto',
        px: [3, 1, 2],
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
            <br /> sf → pittsburgh | he/they
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
            // gridColumn: ['', '', '1 / 3'],
          }}
        ></Box>
        <Divider w="105px" h="57px" src="/images/arrow2.svg" />
        <Box
          sx={{
            height: theme => `${theme.space[5]}px`,
            gridColumn: ['', '', '1 / 3'],
            mx: 'auto',
            width: '0px',
            position: 'inline',
          }}
          id="engineer"
        ></Box>
        <HalfText heading="sustainably seeking.">
          <Text>
            I’m currently pursuing a degree in Materials Science and Engineering
            with an additional major in Engineering and Public Policy at
            Carnegie Mellon University. I want to develop sustainable materials
            that can replace the plastic, concrete, and heavy metals we use
            today, and I’m interested in exploring nature for inspiration. But
            I’m also interested in the social, cultural, and economic dynamics
            in our world that lead us to use the materials we see everyday, and
            how we can change them through public policy.
            <br />
            <br />I also do a bit of programming both to solve engineering
            problems and just for fun: running simulations, building websites,
            squinting at MATLAB code, and cleaning up giant piles of data.
            <br />
            <br />
            Here are some of my favorite personal projects I’ve done, in
            programming and beyond:
            <Description
              title="Where On Earth Is That?!"
              date="November 2022"
              links={[
                ['GitHub', 'https://github.com/avi9664/tp'],
                ['Design Docs', '/pdfs/tp-proposal.pdf', 'avi_w_tp_proposal'],
              ]}
            >
              A geographic game programmed with Python for 15-112: Fundamentals
              of Programming and CS at CMU. I filtered through giant piles of
              OpenStreetMap data to make this game.
              <br />
              Built with Python (NumPy, Pandas, Pyrosm, & cmu-112-graphics)
            </Description>
            <Description
              title="Polymer Playground"
              date="May-August 2022"
              links={[
                [
                  'Colab',
                  'https://colab.research.google.com/drive/1oJC5Df7gfRVj-IC10ftGJPdA4dDv5HBz?usp=sharing',
                ],
              ]}
            >
              A Monte Carlo simulation mimicking the random growth of tangly
              polymer molecules.
              <br />
              Built with Python (NumPy, Pandas, Matplotlib)
            </Description>
            <Description
              title="Doodle Month"
              date="Feb-March 2021"
              links={[
                ['Website', 'https://doodle-month.vercel.app/'],
                ['GitHub', 'https://github.com/avi9664/doodle-month'],
              ]}
            >
              A website that generates a list of word or colour prompts,
              Inktober-style, for artists who want a month-long creative
              challenge.
              <br />
              Built with JavaScript (React, Next.js, Vercel, & Theme UI)
            </Description>
            <Description
              title="Smock Sensor"
              date="November 2022"
              links={[
                ['Design Docs', '/pdfs/99360 doc.pdf', 'avi_w_e_textiles_doc'],
              ]}
            >
              A fun little experiment with embroidery, conductive materials, and
              circuits as a part of the IDeATe class 99-360: E-Textiles with Lea
              Albaugh. I made two different stretch sensors using smocking, a
              traditional way of sewing cloth into scrunchy patterns.
            </Description>
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
        <HalfText heading="dreamily drafting.">
          <Text>
            Born and raised in the Bay Area, I grew up on a blend of kung fu TV
            dramas, historical & fantasy novels, high doses of cosmic gay
            radiation, and crispy Hong Kong egg waffles. I started writing short
            stories more often in high school, and now, I’m part of New Works
            Coffeehouse, a side troupe of my college’s student theatre! I write
            scripts that are performed as part of Scenefest, a compilation of
            short, original plays written by students. Here’s the scenes I’ve
            written so far:
            <Description title="Paw Paw" date='February 2022'>
              A lesbian accidentally schedules a lunch with her Chinese grandma
              at the same time as a date with her girlfriend, and she makes a
              surprising discovery.
            </Description>
            <Description title="Extra Turkey" date='August 2022'>
              Two roommates panic when a dead body appears in their freezer,
              mistaken for a very large bag of turkey. A collaboration with Esha
              Gupta.
            </Description>
            <Description title="Last Burn" date='October 2022'>
              In their very last moment together, two sworn archenemies, a
              prisoner and a general, muse about the past.
            </Description>
          </Text>
        </HalfText>
        {/* <HalfMoon src="/images/quill.svg" align="right" /> */}
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
        {/* <HalfMoon src="/images/piano.svg" align="left" /> */}
        <HalfText align="left" heading="happily hobbying.">
          <Text>
            Besides writing and sciencing, I’m a driver for Spirit Racing
            Systems, a buggy team in my university. That basically means that
            every weekend at 8am, you can find me zooming down an empty street
            at 30 miles an hour in a human-powered, human-built car.
            <br />
            <br />I am also involved with CMU’s student-run theatre troupe,
            Scotch’n’Soda Theatre; I played the synth for their October 2021
            production of <i>Rocky Horror</i>, was an assistant sound engineer
            for their February 2021 production of Sarah Ruhl's <i>Eurydice,</i>{' '}
            and am currently their props tech area co-head.
            <br />
            <br />
            Outside of all these commitments, I hike, run, play the piano,
            listen to music by{' '}
            {random([
              'Unknown Mortal Orchestra',
              'Khruangbin',
              'Sea Powers',
              'My Analog Journal',
              'Mdou Moctar',
              'Ahmed Malek',
              'Flying Lotus',
              'black midi',
              'Kali Uchis',
              'Black Country, New Road',
              'King Gizzard & the Lizard Wizard',
              'Daemonia Nymphe',
              'SE SO NEON',
            ])}
            , feed my addiction to black tea, read sometimes, and play video
            games.
            <br />
            <br />I love exploring new places; brainstorming new stories;
            dumping uncooked writing ideas into my Google Docs; reading science
            articles on Phys.org; doing funny shenanigans with friends; solving
            murder cases in <i>Disco Elysium</i>; head-banging to all kinds of
            rock music; and escaping out of hell in <i>Hades</i>.
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
            Fonts are Cabinet Grotesk (heading) & Lora (body). Icons from
            icons8.com. Designed by me on Figma & Next.js in 2021.
          </Text>
        </Box>
      </Grid>
    </Container>
  </>
)

export default About
