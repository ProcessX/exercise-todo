import { defineStyleConfig } from '@chakra-ui/react';

const NavbarMobile = defineStyleConfig({
  baseStyle: {
    display: {base: 'flex', md: 'none'},
    h: 16,
    w: '100vw',
    pos: 'fixed',
    bottom: '0'
  },
})

export default NavbarMobile;