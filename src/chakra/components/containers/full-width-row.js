import { defineStyleConfig } from '@chakra-ui/react'
const gridParams = {
  base: {
    contentMaxWidth: '200px',
    gap: '12px',
    marginMinWidth: '12px'
  },
}

const FullWidthRow = defineStyleConfig({
  baseStyle: {
    display: 'grid',
    gridTemplateColumns: 4,
    columnGap: gridParams.base.gap,
  },
})

export default FullWidthRow;