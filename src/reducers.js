import { createStore } from 'redux'

const initialState = {
    number: 0,
    value: 0,
}

const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD':
            console.log(111);
            return {...state, number: state.number + action.value }
        case 'CHANGE':
        console.log(2222);
            return {...state, number: state.number + action.value + 1 }
        default:
            return state;
    }
}

export default rootReducer;