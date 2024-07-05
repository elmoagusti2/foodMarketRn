const initStateRegister = {
    name: '',
    email: '',
    password: '',
    password_confirmation: '',
    address: '',
    city: '',
    houseNumber: '',
    phoneNumber: ''
};

const registerReducer = (state = initStateRegister, action) => {
    if (action.type === 'SET_REGISTER') {
        return {
            ...state,
            nama: action.value.name,
            email: action.value.email,
            password: action.value.password,
            password_confirmation: action.value.password_confirmation
        }
    }

    if (action.type === 'SET_ADDRESS') {
        return {
            ...state,
            address: action.value.address,
            city: action.value.city,
            houseNumber: action.value.houseNumber,
            phoneNumber: action.value.phoneNumber
        }
    }
    return state;

}

export default registerReducer;