import { defineStyleConfig } from '@chakra-ui/react'

const NavbarTabMobile = defineStyleConfig({
  baseStyle: {
    color: 'neutral.300',
    _hover: { color: 'accent.500' },
    _activeLink: {
      color: 'accent.500',
      fontVariationSettings: "'FILL' 1",
    }
  },
})

export default NavbarTabMobile;