import { Heading, Link } from 'theme-ui'

const BigLink = props => {
    const { text, loc } = props;
  return (
    <>
      <Link href={loc}>
        <Heading sx={{
            color: 'background',
            fontSize: [7],
            WebkitTextStrokeColor: (theme) => `${theme.colors.text}`,
            WebkitTextStrokeWidth: '1.2px',
            textAlign: text =="writer" ? ['right', 'right', 'left'] : 'left',
            lineHeight: '1.5',
        }} variant="ultratitle">{text}</Heading>
      </Link>
    </>
  )
}

export default BigLink
