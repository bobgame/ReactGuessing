import React from 'react'
import { Modal } from 'antd'

const GameoverModal = (props) => {
  return (
    <Modal
      title="Basic Modal"
      visible={props.gameOver}
      onOk={props.closeGameOver}
      onCancel={props.closeGameOver}
    >
      <p>Some contents...</p>
      <p>Some contents...</p>
      <p>Some contents...</p>
    </Modal>
  )
}

export default GameoverModal
