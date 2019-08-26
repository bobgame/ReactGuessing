import React, { Component } from 'react'
import { connect } from 'react-redux'

import { Link } from 'react-router-dom'
import { Button } from 'antd'

import './Play.scss'
import { actionClickGuess, actionClickNumber, actionDeleteNumber, actionResetList, actionCloseGameover } from '../../store/action-creator'
import PlayResultBox from './ui/play-ui-result-box'
import PlayShowBox from './ui/play-ui-show-box'
import PlayNumberBox from './ui/play-ui-number-box'
import PlayButtonBox from './ui/play-ui-button-box'
import GameoverModal from './ui/play-ui-gameover-modal'

class Play extends Component {
  constructor(props) {
    super(props)
    this.state = { }
  }

  render() {
    const { inputValue, list, clickNumber, clickGuess, deleteNumber, gameOver, closeGameOver } = this.props
    return (
      <>
        <h2 className="text-center">猜数字游戏</h2>
        <PlayResultBox list={list} />
        <PlayShowBox inputValue={inputValue} />
        <PlayNumberBox clickNumber={clickNumber} />
        <PlayButtonBox
          deleteNumber={deleteNumber}
          clickGuess={clickGuess}
        />
        <Link to="/"><Button block>返回首页</Button></Link>
        <GameoverModal
          gameOver={gameOver}
          closeGameOver={closeGameOver}
        />
      </>
    )
  }

  componentDidMount() {
    if (this.props.list.length === 0) {
      this.props.resetLists()
    }
  }
}

const stateToProps = (state) => {
  return {
    inputValue: state.inputValue,
    gameOver: state.gameOver,
    list: state.list,
  }
}

const dispatchToProps = (dispatch) => {
  return {
    clickNumber(num) {
      dispatch(actionClickNumber(num))
    },
    clickGuess() {
      dispatch(actionClickGuess())
    },
    deleteNumber() {
      dispatch(actionDeleteNumber())
    },
    resetLists() {
      dispatch(actionResetList())
    },
    closeGameOver() {
      dispatch(actionCloseGameover())
    },
  }
}

export default connect(stateToProps, dispatchToProps)(Play)
