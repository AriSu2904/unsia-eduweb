const initialState = {
    token: localStorage.getItem('token') || '',
    user: null
};

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'LOGIN':
            return {
                ...state,
                token: action.payload
            };
        case 'SET_USER':
            return {
                ...state,
                user: action.payload
        }
        case 'LOGOUT' :
            return {
                ...state,
                token: '',
                user: null,
            };
        default:
            return state;
    }
}

export default authReducer;