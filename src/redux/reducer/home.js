const initHomeState = {
    isLoading: false,
    listMenu: [],
    listCategory: [],
}

const homeReducer = (state = initHomeState, action) => {
    if (action.type === 'HOME_LOADING') {
        return {
            ...state,
            isLoading: action.value
        }
    }

    if (action.type === 'SET_MENU') {
        return {
            ...state,
            listMenu: action.value,
            listCategory: action.category
        }
    }

    return state;
}

export default homeReducer;