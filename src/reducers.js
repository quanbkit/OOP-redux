import { createStore } from 'redux'

const initialState = {
    number: 0,
    value: 0,
}

const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD':
            return {...state, number: state.number + action.value }
        default:
            return state;
    }
}

export default rootReducer;