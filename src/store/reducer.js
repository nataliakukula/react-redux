const initialState = {
    age: 21
}

const reducer = (state = initialState, action) => {
    const newState = { ...state };

    if (action.type === "INCRESE AGE") {
        newState.age++;
    }
    if (action.type === "DECRESE AGE") {
        newState.age--;
    }
    return newState;
};

export default reducer;