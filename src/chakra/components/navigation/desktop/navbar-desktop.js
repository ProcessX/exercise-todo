import { defineStyleConfig } from '@chakra-ui/react'

const NavbarDesktop = defineStyleConfig({
  baseStyle: {
    display: {base: 'none', md: 'block'},
      fontVariationSettings: "'FILL' 1",
  },
})

export default NavbarDesktop;