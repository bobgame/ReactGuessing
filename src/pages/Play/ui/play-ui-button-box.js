import React from 'react'
import { Button } from 'antd'

const PlayButtonBox = (props) => {
  return (
    <div className="number-tool-box mbh-4">
      <Button onClick={props.deleteNumber}>←</Button>
      <Button type="primary" onClick={props.clickGuess}>猜</Button>
    </div>
  )
}

export default PlayButtonBox
