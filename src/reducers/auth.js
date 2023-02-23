import * as AuthActions from '../actions/auth'

const initialState = {
    isAuthenticated: localStorage.getItem('token') ? true : false
}

export const AuthReducer = (state = initialState, action) => {
    switch (action.type) {
        case AuthActions.LOGIN_SUCCESS:
            return Object.assign(...state, {
                isAuthenticated: action.payload.isAuthenticated,
                isFetching: action.payload.isFetching
            });
        default:
            return state    
    }
}