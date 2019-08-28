import { PLAY_TYPES } from './action-type'
import { defalutState } from './default-state'
import {
  addUseItemReducer, resetGameReducer, closeGameOverReducer, deleteNumberReducer, clickGuessReducer, clickNumberReducer
} from './play-reducer'

export default (state = defalutState, action) => {
  switch (action.type) {
    case PLAY_TYPES.CLICK_NUMBER:
      clickNumberReducer(state, action.value)
      break
    case PLAY_TYPES.CLICK_GUESS:
      clickGuessReducer(state)
      break
    case PLAY_TYPES.DELETE_NUMBER:
      deleteNumberReducer(state)
      break
    case PLAY_TYPES.RESET_GAME:
      resetGameReducer(state)
      break
    case PLAY_TYPES.CLOSE_GAMEOVER:
      closeGameOverReducer(state)
      break
    case PLAY_TYPES.ADD_USE_TIME:
      addUseItemReducer(state)
      break
    default:
      break
  }
  return state
}
