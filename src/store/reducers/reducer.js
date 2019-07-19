const initialState = {
    age: 21,
    history: []
}

const reducer = (state = initialState, action) => {
    const newState = { ...state };

    // eslint-disable-next-line default-case
    switch(action.type) {
        case "INCRESE AGE ASYNC":
        return {
            ...state,
            age: state.age + action.value,
            history: state.history.concat({id: Math.random(), age: state.age + action.value}),
            loading: false
        }

        // eslint-disable-next-line no-duplicate-case
        case "DECRESE AGE":
        return {
            ...state,
            age: state.age - action.value,
            history: state.history.concat({id: Math.random(), age: state.age - action.value})
        }
        // eslint-disable-next-line no-duplicate-case
        case "DELETE ITEM":
        return {
            ...state,
            history: state.history.filter(el => el.id !== action.key)
        }
    
     // eslint-disable-next-line no-duplicate-case
        case "LOADING":
        return {
            ...state,
            loading: true
        }
    }

    return newState;
};

export default reducer;