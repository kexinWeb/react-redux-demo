import { CHANGE, ADD, SUBSTRACT, TOZERO } from '../actionType'
// 拆分为2个reducer
export function info(state = {
  name: '啊阔',
  text: '你好，啊阔'
}, action) {
  switch (action.type) {
    case CHANGE:
      return {
        name: action.payload,
        text: '你好，' + action.payload
      }
    default:
      return state
  }
}
export function count(state = 10, action) {
  switch (action.type) {
    case ADD: {
      return state + 1
    }
    case SUBSTRACT: {
      return state - 1
    }
    case TOZERO: {
      return 0
    }
    default:
      return state
  }
}
/* 总的state: {
  info: {name, text},
  count
}
*/

