import { delay, put, takeEvery, all } from 'redux-saga/effects'
import { add } from './action'
import { INCREMENTASYNC } from './actionType'
function* helloSaga() {
    console.log('Hello saga!')
}

function* incrementAsync() {
    // 延迟1s
    yield delay(1000)

    yield put(add()/* action: {type, payload}*/) 
}

function* watchIncrementAsync() {
    yield takeEvery(INCREMENTASYNC, incrementAsync)
}

export default function* rootSaga() {
    yield all([
        helloSaga(),
        watchIncrementAsync()
    ])
}