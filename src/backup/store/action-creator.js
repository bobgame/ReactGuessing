import { allTypes } from './action-type'
import Axios from 'axios'

export const changeInputAction = (value) => ({
  type: allTypes.CHANGE_INPUT_VALUE,
  value
})

export const addItemAction = () => ({
  type: allTypes.ADD_ITEM
})

export const deleteItemAction = (index) => ({
  type: allTypes.DELETE_ITEM,
  index
})

export const getListAction = (data) => ({
  type: allTypes.GET_LIST,
  data
})

export const getTodoList = () => {
  return (dispatch) => {
    Axios.get('https://www.easy-mock.com/mock/5d5b82903e3a6541823d7990/react-test/getList').then((res) => {
      const data = res.data
      const action = getListAction(data)
      dispatch(action)
    })
  }
}
