export const add = (value) => {
    return {
        type: 'ADD',
        value: value
    }
}

export const changeValue = (value) => {
    return {
        type: 'CHANGE',
        value: value + 1
    }
}