import { Badge, Box, Button, Text } from '@chakra-ui/react';
import React from 'react'

type Props = {
  label?: string;
  id?: string;
  done?: boolean;
  important?: boolean;
  categoryID?: string;
}

const TaskCard = (props: Props) => {

  let checkTask = () => {
    console.log('Check task ' + props.label);
  }

  return (
    <Box className='taskCard' padding={'4'} border={'2px'} borderColor='gray.100'>
      <Button colorScheme={'accent'} onClick={checkTask}>Check as done</Button>
      <Text className='taskCard__label'>{props.label}</Text>
      {
        props.done ? <Badge colorScheme={'primary'}>Done</Badge> : <Badge>To do</Badge>
      }
      {
        props.important ? <Badge>Important</Badge> : null
      }
    </Box>
  )
}

export default TaskCard