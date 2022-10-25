import { Box, useStyleConfig } from '@chakra-ui/react'
import React, { ReactElement } from 'react'

type Props = {
  children: JSX.Element,
}

const FullWithRow = (props: Props) => {
  const styles = useStyleConfig('FullWidthRow', {});

  return (
    <Box __css={styles} className='fullWidthRow'>
      {props.children}
    </Box>
  )
}

export default FullWithRow