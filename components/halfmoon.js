import { Box, Flex, Image } from 'theme-ui'
import { useRef, useEffect, useState } from 'react'

const HalfMoon = props => {
  const { src, align } = props
  const parentRef = useRef(null)
  const [height, setHeight] = useState(0);
  useEffect(() => {
    if (parentRef.current) {
      setHeight(parentRef.current.offsetHeight - 24)
    }
  }, [parentRef])
  return (
    <>
      <Box
        sx={{
          display: ['none', 'none', 'block'],
          pt: [3],
          pb: [2],
        }}
        ref={parentRef}
      >
        <Box
          sx={{
            backgroundColor: 'text',
            ml: align == 'left' ? 'auto' : 0,
            mr: align == 'right' ? 'auto' : 0,
            overflow: 'hidden',
            mt: [1],
            height: height,
            display: 'flex',
            alignItems: 'center',
            borderRadius:
              align == 'left'
                ? `${height / 2}px 0 0 ${height / 2}px`
                : `0 ${height / 2}px ${height / 2}px 0`,
            width: height / 2,
          }}
        >
          <Image
            src={src}
            sx={{
              overflow: 'hidden',
              position: 'relative',
              width: `${height / 2}px`,
              height: 'auto',
              left: align == 'left' ? `-30px` : `30px`,
              filter: theme => `${theme.colors.inversesvgfilter}`,
            }}
          />
        </Box>
      </Box>
    </>
  )
}

export default HalfMoon
