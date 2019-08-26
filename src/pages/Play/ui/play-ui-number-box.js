import React from 'react'
import { Button } from 'antd'

const PlayNumberBox = (props) => {
  return (
    <div className="number-input-box mbh-3">
      {
        [0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map((num, index) => {
          return (
            <Button key={'number-btn' + index} onClick={() => props.clickNumber(num)}>{num}</Button>
          )
        })
      }
    </div>
  )
}

export default PlayNumberBox
