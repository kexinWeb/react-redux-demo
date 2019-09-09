import { CHANGE, ADD, SUBSTRACT, TOZERO, INCREMENTASYNC } from './actionType'

// action: { type, payload }
export function changeInput(payload) {
    return {
        type: CHANGE,
        payload: payload
    }
}

export function add() {
    return {
        type: ADD
    }
}

export function substract() {
    return {
        type: SUBSTRACT
    }
}

export function toZero() {
    return {
        type: TOZERO
    }
}

export function incrementAsync() {
    return {
        type: INCREMENTASYNC
    }
}