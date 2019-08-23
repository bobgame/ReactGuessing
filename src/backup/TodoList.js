import React, { Component } from 'react'
import 'antd/dist/antd.css'
import store from './store'
import { changeInputAction, addItemAction, deleteItemAction, getTodoList } from './store/action-creator'
import TodoListUi from './TodoListUi'

class TodoList extends Component {
  constructor(props) {
    super(props)
    this.state = store.getState()
    this.changeInputValue = this.changeInputValue.bind(this)
    this.clickAddBtn = this.clickAddBtn.bind(this)
    this.deleteItem = this.deleteItem.bind(this)

    this.storeChange = this.storeChange.bind(this)
    store.subscribe(this.storeChange)
  }

  componentDidMount() {
    const action = getTodoList()
    store.dispatch(action)
  }

  changeInputValue(e) {
    const action = changeInputAction(e.target.value)
    store.dispatch(action)
  }

  clickAddBtn() {
    const action = addItemAction()
    store.dispatch(action)
  }

  deleteItem(index) {
    const action = deleteItemAction(index)
    store.dispatch(action)
  }

  storeChange() {
    this.setState(store.getState())
  }

  render() {
    return (
      <TodoListUi
        inputValue={this.state.inputValue}
        list={this.state.list}
        changeInputValue={this.changeInputValue}
        deleteItem={this.deleteItem}
        clickAddBtn={this.clickAddBtn}
      />
    )
  }
}

export default TodoList
