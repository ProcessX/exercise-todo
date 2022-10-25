import { List, ListItem } from '@chakra-ui/react'
import React from 'react'
import TaskCard from '../cards/task-card'

type Props = {}

const TaskList = (props: Props) => {
  let TEMP_tasks = [
    {
      label: "First task",
      id: "01",
      done: false,
      important: true,
      categoryID: undefined,
    },
    {
      label: "Second task",
      id: "02",
      done: false,
      important: false,
      categoryID: undefined,
    },
    {
      label: "Third task",
      id: "03",
      done: false,
      important: false,
      categoryID: undefined,
    }
  ]

  const tasks = TEMP_tasks.map((task) => {
    return (
      <ListItem my='4' key={`Task ${task.id}`}>
        <TaskCard {...task} />
      </ListItem>
    )
  })

  return (
    <div className='taskList'>
      <List>
        {tasks}
      </List>
    </div>
  )
}

export default TaskList