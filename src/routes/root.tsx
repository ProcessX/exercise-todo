import { Box } from '@chakra-ui/react';
import React from 'react'
import { Outlet } from "react-router-dom";
import Header from '../components/containers/header';
import NavbarMobile from '../components/navigation/mobile/navbar-mobile';

type Props = {}

const Root = (props: Props) => {
  return (
    <Box as='div' className='page' w={'100vw'} height={'100vh'}>
      <Header/>
      <div id="detail">
          <Outlet />
      </div>
      <NavbarMobile/>
    </Box>
  )
}

export default Root