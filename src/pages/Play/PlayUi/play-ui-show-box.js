import React from 'react'
import { Button } from 'antd'

const ShowBoxUi = (props) => {
  return (
    <Button disabled block className="number-show-box mbh-3">
      {
        props.inputValue.map((item, index) => {
          return (
            <div key={'show-item-' + index} className="show-box-item">{item}</div>
          )
        })
      }
    </Button>
  )
}

export default ShowBoxUi
