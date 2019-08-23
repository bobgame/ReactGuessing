import React, { Component } from 'react'
import store from './store'
import { connect } from 'react-redux'

class TodoList extends Component {
  constructor(props) {
    super(props)
    this.state = store.getState()
  }
  render() {
    const { inputValue, inputChange, clickAddBtn, list, deleteItem } = props
    return (
      <div>
        <div>
          <input
            value={inputValue}
            onChange={inputChange}
          />
          <button onClick={clickAddBtn}>提交</button></div>
        <ul>
          {
            list.map((item, index) => {
              return (<li key={index} onClick={() => deleteItem(index)}>{item}</li>)
            })
          }
        </ul>
      </div>
    )
  }
}

const stateToProps = (state) => {
  return {
    inputValue: state.inputValue,
    list: state.list
  }
}

const dispatchToProps = (dispatch) => {
  return {
    inputChange(e) {
      let action = {
        type: 'change_input',
        value: e.target.value
      }
      dispatch(action)
    },
    clickAddBtn() {
      let action = {
        type: 'add_item',
      }
      dispatch(action)
    },
    deleteItem(index) {
      let action = {
        type: 'delete_item',
        index
      }
      dispatch(action)
    }
  }
}

export default connect(stateToProps, dispatchToProps)(TodoList)
