import React, { useEffect } from 'react'

type Props = {}

const Category = (props: Props) => {
  useEffect(() => {
    document.title = 'Category | Todo'
  }, [])

  return (
    <div>Category</div>
  )
}

export default Category