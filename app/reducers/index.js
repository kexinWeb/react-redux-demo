import { combineReducers } from 'redux'
import { info, count } from './reducer'

const reducer = combineReducers({
    info,
    count
})

export default reducer