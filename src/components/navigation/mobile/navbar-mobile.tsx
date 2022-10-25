import React from 'react'
import NavbarTabMobile from './navbar-tab-mobile';
import { Flex, useStyleConfig } from '@chakra-ui/react'

type Props = {}

type PageInfo = {
  url: string;
  label: string;
  icon?: string;
}

const pages: PageInfo[] = [
  {
    url: '/',
    label: 'Home',
    icon: 'home'
  },
  {
    url: '/archive',
    label: 'Archive',
    icon: 'inventory_2'
  },
  {
    url: '/settings',
    label: 'Settings',
    icon: 'settings'
  }
];

const NavbarMobile = (props: Props) => {
  const styles = useStyleConfig('NavbarMobile', {});

  let tabs = pages.map((page, i) => {
    return (
      <Flex key={`navbar-tab-mobile-${i+1}`} w={'100%'} justifyContent='center' alignItems={'center'}>
        <NavbarTabMobile {...page}/>
      </Flex>
    )
  });
  
  return (
    <Flex dir='row' __css={styles}>
      {tabs}
    </Flex>
  )
}

export default NavbarMobile