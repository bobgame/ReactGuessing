const defalutState = {
  inputValue: '',
  rightNumber: '3629',
  list: [
    // { numbers: '0842', result: '0A2B' },
    // { numbers: '0843', result: '1A2B' },
  ]
}

export default (state = defalutState, action) => {
  if (action.type === 'change_input') {
    let newState = JSON.parse(JSON.stringify(state))
    if (newState.inputValue.length < 4 && newState.inputValue.indexOf(action.value) === -1) {
      newState.inputValue += action.value + ''
    }
    return newState
  } else if (action.type === 'add_item') {
    let newState = JSON.parse(JSON.stringify(state))
    if (newState.inputValue.length === 4) {
      const rightNumbers = newState.rightNumber.split('')
      const guessNumbers = newState.inputValue.split('')
      let a = 0; let b = 0
      for (let i = 0; i < guessNumbers.length; i++) {
        const guessNumber = guessNumbers[i]
        const rightNumber = rightNumbers[i]
        if (rightNumber === guessNumber) {
          a++
        } else if (rightNumbers.indexOf(guessNumber) > -1) {
          b++
        }
      }
      const numbers = newState.inputValue
      const result = `${a}A${b}B`
      newState.inputValue = ''
      newState.list.push({ numbers: numbers, result: result })
    }
    return newState
  } else if (action.type === 'delete_number') {
    let newState = JSON.parse(JSON.stringify(state))
    if (newState.inputValue.length > 0) {
      newState.inputValue = newState.inputValue.substring(0, newState.inputValue.length - 1)
    }
    return newState
  }
  return state
}
