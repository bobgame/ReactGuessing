
export const resetGameReducer = (state) => {
  let newState = deepCopy(state)
  newState.list = []
  for (let i = 0; i < 9; i++) {
    newState.list.push({ numbers: '', result: '' })
  }
  const tempNumers = []
  for (let j = 0; ;j++) {
    const randNum = Math.floor(Math.random() * 10)
    if (tempNumers.indexOf(randNum) === -1) {
      tempNumers.push(randNum)
      if (tempNumers.length >= 4) {
        break
      }
    }
  }
  newState.rightNumber = tempNumers.join('')
  newState.times = 8
  return newState
}

export const closeGameOverReducer = (state) => {
  let newState = resetGameReducer(state)
  newState.gameover.isOver = false
  return newState
}
export const deleteNumberReducer = (state) => {
  let newState = deepCopy(state)
  for (let i = newState.inputValue.length - 1; i >= 0; i--) {
    if (newState.inputValue[i] !== '-') { newState.inputValue[i] = '-'; break }
  }
  return newState
}

export const addUseItemReducer = (state) => {
  let newState = deepCopy(state)
  let ss = parseInt(newState.useTime.ss) + 1
  if (ss === 60) {
    newState.useTime.mm = parseInt(newState.useTime.mm) + 1
    newState.useTime.ss = 0
  } else if (ss < 10) {
    newState.useTime.ss = '0' + ss
  } else {
    newState.useTime.ss = '' + ss
  }
  return newState
}
export const clickGuessReducer = (state) => {
  let newState = deepCopy(state)
  if (newState.inputValue.indexOf('-') === -1) {
    newState.times--
    const rightNumbers = newState.rightNumber.split('')
    const guessNumbers = newState.inputValue
    let a = 0; let b = 0
    for (let i = 0; i < guessNumbers.length; i++) {
      const guessNumber = guessNumbers[i]
      const rightNumber = parseInt(rightNumbers[i])
      console.log(guessNumber, rightNumber)
      if (rightNumber === guessNumber) {
        a++
      } else if (rightNumbers.indexOf(guessNumber + '') > -1) {
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
    if (a === 4) {
      newState.gameover = {
        isOver: true,
        title: '恭喜你！猜中了！',
        text: `
            游戏结束！
            你用${8 - newState.times}次猜对了：${newState.rightNumber}，
            一共用时${parseInt(newState.useTime.mm)}分${parseInt(newState.useTime.ss)}秒。
          `,
      }
    } else if (newState.times === 0) {
      newState.gameover = {
        isOver: true,
        title: '很遗憾，没有猜中',
        text: '游戏结束，正确结果是：' + newState.rightNumber + '。',
      }
    }
  }
  return newState
}

export const clickNumberReducer = (state, value) => {
  let newState = deepCopy(state)
  if (newState.inputValue.indexOf('-') > -1 && newState.inputValue.indexOf(value) === -1) {
    for (let i = 0; i < newState.inputValue.length; i++) {
      if (newState.inputValue[i] === '-') { newState.inputValue[i] = value; break }
    }
  }
  return newState
}

function deepCopy(obj) {
  return JSON.parse(JSON.stringify(obj))
}
