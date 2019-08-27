import React from 'react'
import { Modal } from 'antd'

const GameoverModal = (props) => {
  return (
    <Modal
      title="游戏结束"
      visible={props.gameover.isOver}
      onOk={props.closeGameOver}
      onCancel={props.closeGameOver}
    >
      <h2 className="text-center">{props.gameover.title}</h2>
      <p className="text-center">{props.gameover.text}</p>
    </Modal>
  )
}

export default GameoverModal
