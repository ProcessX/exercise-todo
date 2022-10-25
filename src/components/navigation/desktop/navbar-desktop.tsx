import React from 'react'
import { Box, useStyleConfig } from '@chakra-ui/react'

type Props = {}

const NavbarDesktop = (props: Props) => {
  const styles = useStyleConfig('NavbarDesktop', {});

  return (
    <Box __css={styles}>NavbarDesktop</Box>
  )
}

export default NavbarDesktop