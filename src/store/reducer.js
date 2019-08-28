import { PLAY_TYPES } from './action-type'
import { defalutState } from './default-state'
import {
  addUseItemReducer, resetGameReducer, closeGameOverReducer, deleteNumberReducer, clickGuessReducer, clickNumberReducer
} from './play-reducer'

export default (state = defalutState, action) => {
  switch (action.type) {
    case PLAY_TYPES.CLICK_NUMBER:
      return clickNumberReducer(state, action.value)
    case PLAY_TYPES.CLICK_GUESS:
      return clickGuessReducer(state)
    case PLAY_TYPES.DELETE_NUMBER:
      return deleteNumberReducer(state)
    case PLAY_TYPES.RESET_GAME:
      return resetGameReducer(state)
    case PLAY_TYPES.CLOSE_GAMEOVER:
      return closeGameOverReducer(state)
    case PLAY_TYPES.ADD_USE_TIME:
      return addUseItemReducer(state)
    default:
      break
  }
  return state
}
