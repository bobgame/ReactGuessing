import allTypes from './action-type'

const defaultState = {
  inputValue: '',
  list: [
    '早上记得吃早餐',
    '中午也要记得吃午餐',
  ]
}

export default (state = defaultState, action) => {
  if (action.type === allTypes.CHANGE_INPUT_VALUE) {
    const newState = deepCopyState()
    newState.inputValue = action.value
    return newState
  } else if (action.type === allTypes.ADD_ITEM) {
    const newState = deepCopyState()
    newState.list.push(newState.inputValue)
    newState.inputValue = ''
    return newState
  } else if (action.type === allTypes.DELETE_ITEM) {
    const newState = deepCopyState()
    newState.list.splice(action.index, 1)
    return newState
  } else if (action.type === allTypes.GET_LIST) {
    const newState = deepCopyState()
    newState.list = action.data.data.list
    return newState
  }

  function deepCopyState() {
    return JSON.parse(JSON.stringify(state))
  }
  return state
}
