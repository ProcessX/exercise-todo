import React, { useEffect } from 'react'
import { Box, Heading } from '@chakra-ui/react'
import FullWithRow from '../components/containers/full-width-row'
import CategoryList from '../components/lists/category-list'
import TaskList from '../components/lists/task-list'

type Props = {}

const Dashboard = (props: Props) => {
  useEffect(() => {
    document.title = 'Dashboard | Todo'
  }, [])

  return (
    <>
      {/**
     * 
    <FullWithRow>
      <Heading as='h1' size='lg' marginBottom={'20'} color={'neutral.700'}>Welcome, <Box as={'span'} color={'primary.500'}>John</Box></Heading>
    </FullWithRow>
     */}
      <Heading as='h1' size='lg' marginBottom={'20'} color={'neutral.700'}>Welcome, <Box as={'span'} color={'primary.500'}>John</Box></Heading>
      <Heading as='h3' size='md' marginBottom={'4'} color={'neutral.700'}>Categories</Heading>
      <CategoryList />
      <Heading as='h3' size='md' marginBottom={'4'} color={'neutral.700'}>Tasks</Heading>
      <TaskList />
    </>
  )
}

export default Dashboard