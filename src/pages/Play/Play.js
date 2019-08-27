import React, { Component } from 'react'
import { connect } from 'react-redux'

import { Link } from 'react-router-dom'
import { Button, List } from 'antd'

import './Play.scss'
import { actionClickGuess, actionClickNumber, actionDeleteNumber, actionResetList, actionCloseGameover, actionAddUseTime } from '../../store/action-creator'
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
    const {
      inputValue, list, times, gameover, useTime,
      clickNumber, clickGuess, deleteNumber, closeGameOver
    } = this.props

    const data = [
      `剩余次数: ${times}`,
      `时间: ${useTime.mm}:${useTime.ss}`,
    ]
    return (
      <>
        <h2 className="text-center">猜数字游戏</h2>
        <List
          grid={{ column: 2 }}
          itemLayout="vertical"
          className="info-box mbh-2"
          bordered
          dataSource={data}
          renderItem={item => (
            <List.Item>
              {item}
            </List.Item>
          )}
        />
        <PlayResultBox list={list} />
        <PlayShowBox inputValue={inputValue} />
        <PlayNumberBox clickNumber={clickNumber} />
        <PlayButtonBox
          deleteNumber={deleteNumber}
          clickGuess={clickGuess}
        />
        <Link to="/"><Button block>返回首页</Button></Link>
        <GameoverModal
          gameover={gameover}
          closeGameOver={closeGameOver}
        />
      </>
    )
  }

  componentDidMount() {
    if (this.props.list.length === 0) {
      this.props.resetLists()
    }
    this.addUseTimeInterval = setInterval(() => {
      this.props.addUseTime()
    }, 1000)
  }
  componentWillUnmount() {
    clearInterval(this.addUseTimeInterval)
  }
}

const stateToProps = (state) => {
  return {
    inputValue: state.inputValue,
    gameover: state.gameover,
    list: state.list,
    times: state.times,
    useTime: state.useTime,
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
    addUseTime() {
      dispatch(actionAddUseTime())
    },
  }
}

export default connect(stateToProps, dispatchToProps)(Play)
