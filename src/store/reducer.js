import { PLAY_TYPES } from './action-type'

const defalutState = {
  inputValue: ['-', '-', '-', '-'],
  rightNumber: '3629',
  gameOver: false,
  gameOverText: '',
  list: [
    // { numbers: '0842', result: '0A2B' },
    // { numbers: '0843', result: '1A2B' },
  ]
}

export default (state = defalutState, action) => {
  if (action.type === PLAY_TYPES.CLICK_NUMBER) {
    let newState = JSON.parse(JSON.stringify(state))
    if (newState.inputValue.indexOf('-') > -1) {
      for (let i = 0; i < newState.inputValue.length; i++) {
        if (newState.inputValue[i] === '-') { newState.inputValue[i] = action.value; break }
      }
    }
    return newState
  } else if (action.type === PLAY_TYPES.CLICK_GUESS) {
    let newState = JSON.parse(JSON.stringify(state))
    if (newState.inputValue.indexOf('-') === -1) {
      const rightNumbers = newState.rightNumber.split('')
      const guessNumbers = newState.inputValue
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
      newState.inputValue = ['-', '-', '-', '-']
      const empty = newState.list.find(l => l.numbers === '')
      if (empty) {
        empty.numbers = numbers
        empty.result = result
      }
    }
    return newState
  } else if (action.type === PLAY_TYPES.DELETE_NUMBER) {
    let newState = JSON.parse(JSON.stringify(state))
    for (let i = newState.inputValue.length - 1; i >= 0; i--) {
      if (newState.inputValue[i] !== '-') { newState.inputValue[i] = '-'; break }
    }
    return newState
  } else if (action.type === PLAY_TYPES.RESET_LIST) {
    let newState = JSON.parse(JSON.stringify(state))
    newState.list = []
    for (let i = 0; i < 9; i++) {
      newState.list.push({ numbers: '', result: '' })
    }
    return newState
  } else if (action.type === PLAY_TYPES.CLOSE_GAMEOVER) {
    let newState = JSON.parse(JSON.stringify(state))
    newState.gameOver = false
    return newState
  }
  return state
}
