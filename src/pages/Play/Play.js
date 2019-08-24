import React, { Component } from 'react'
import { connect } from 'react-redux'

import { Link } from 'react-router-dom'
import { Button, Input } from 'antd'

import './Play.scss'

class Play extends Component {
  constructor(props) {
    super(props)
    this.state = { }
  }
  render() {
    const { inputValue, list, clickNumber, clickGuessBtn, deleteNumber } = this.props
    return (
      <>
        <h2 className="text-center">猜数字游戏</h2>
        <div className="number-result-box mbh-3">
          {
            list.map((item, index) => {
              return (
                <div key={'number-result' + index}>{item.numbers}: {item.result}</div>
              )
            })
          }
          <div></div>
          <div></div>
        </div>
        <div className="number-show-box mbh-3">
          <Input className="text-center" disabled value={inputValue} />
        </div>
        <div className="number-input-box mbh-3">
          {
            [0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map((num, index) => {
              return (
                <Button key={'number-btn' + index} onClick={() => clickNumber(num)}>{num}</Button>
              )
            })
          }
        </div>
        <div className="number-tool-box mbh-4">
          <Button onClick={deleteNumber}>←</Button>
          <Button type="primary" onClick={clickGuessBtn}>猜</Button>
        </div>
        <Link to="/"><Button block>返回首页</Button></Link>
      </>
    )
  }
}

const stateToProps = (state) => {
  return {
    inputValue: state.inputValue,
    list: state.list,
  }
}

const dispatchToProps = (dispatch) => {
  return {
    clickNumber(num) {
      let action = {
        type: 'change_input',
        value: num
      }
      dispatch(action)
    },
    clickGuessBtn() {
      let action = {
        type: 'add_item',
      }
      dispatch(action)
    },
    deleteNumber() {
      let action = {
        type: 'delete_number'
      }
      dispatch(action)
    }
  }
}

export default connect(stateToProps, dispatchToProps)(Play)
