import React from 'react'

function TableCell({children, className}) {
  return (
    <td className={className}>
      {children}
    </td>
  )
}

export default TableCell
