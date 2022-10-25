import { Box, Text, useStyleConfig } from '@chakra-ui/react';
import React from 'react'
import { NavLink } from "react-router-dom";

type Props = {
  url: string;
  label: string;
  icon?: string;
}

const NavbarTabMobile = (props: Props = {
  url: '',
  label: 'Tab',
  icon: 'circle'
}) => {
  const styles = useStyleConfig('NavbarTabMobile', {});

  return (
    <Box as={NavLink} end to={props.url} __css={styles} >
      <Box as='span' display={'block'} textAlign={'center'} className="material-symbols-outlined" >{props.icon}</Box>
      <Text as={'span'} fontSize='sm'>{props.label}</Text>
    </Box>
    
  )
}

export default NavbarTabMobile