import React, { useEffect } from 'react'

type Props = {}

const Archive = (props: Props) => {
  useEffect(() => {
    document.title = 'Archive | Todo'
  }, [])

  return (
    <div>Archive</div>
  )
}

export default Archive