const initStateRegister = {
    name: '',
    email: '',
    password: '',
    password_confirmation: '',
    address: '',
    city: '',
    houseNumber: '',
    phoneNumber: '',
    roles: 'USER',
    profile_photo_path: '',
};

const registerReducer = (state = initStateRegister, action) => {
    if (action.type === 'SET_REGISTER') {
        return {
            ...state,
            name: action.value.name,
            email: action.value.email,
            password: action.value.password,
            password_confirmation: action.value.password,
            profile_photo_path: action.value.profile_photo_path
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