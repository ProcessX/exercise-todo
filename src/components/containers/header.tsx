import { Flex, Spacer, useStyleConfig } from '@chakra-ui/react'
import React from 'react'
import NavbarDesktop from '../navigation/desktop/navbar-desktop';

type Props = {}

const Header = (props: Props) => {
  const styles = useStyleConfig('Header', {});

  return (
    <Flex __css={styles}>
      <p>Logo</p>
      <Spacer/>
      <NavbarDesktop/>
    </Flex>
  )
}

export default Header