const initGlobalState = {
    isError: false,
    message: 'Error'
};


const globalReducer = (state = initGlobalState, action) => {
    if (action.type === 'SET_ERROR') {
        return {
            ...state,
            isError: action.value.isError,
            message: action.value.message
        }
    }

    return state;
};

export default globalReducer;
