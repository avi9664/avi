import { Link, Heading } from 'theme-ui'
const Description = props => {
  const { title, date, links } = props
  return links != null ? (
    <>
      <br />
      <br />
      <Heading>{title.toLowerCase()}</Heading>
      <i>{date}</i>
      <br />
      {props.children}
      <br />
      {links.map((info, index) => {
        let text = info[0]
        let href = info[1]
        let download;
        if (info.length === 3) {
          let download = info[2]
        }
        let link =
          download != null ? (
            <Link href={href} download={download} variant='primary'>
              {text}
            </Link>
          ) : (
            <Link href={href} variant='primary'>{text}</Link>
          )
        let lastIndex = links.length
        return index == lastIndex - 1 ? link : <>{link}, </>
      })}
    </>
  ) : (
    <>
      <br />
      <br />
      <Heading>{title.toLowerCase()}</Heading>
      <i>{date}</i>
      <br />
      {props.children}
    </>
  )
}

export default Description
