import React, { useEffect } from 'react'

type Props = {}

const Settings = (props: Props) => {
  useEffect(() => {
    document.title = 'Settings | Todo'
  }, [])

  return (
    <div>Settings</div>
  )
}

export default Settings