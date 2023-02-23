import * as DrawerActions from '../actions/drawer';

const initialState = {
    open: localStorage.getItem('token') ? true : false && window.innerWidth > 768
}

export const DrawerReducer = (state = initialState, action) => {
    switch (action.type) {
        case DrawerActions.TOGGLE_DRAWER:
            return Object.assign(...state, {
                open: action.payload.open
            })
        default:
            return state    
    }
}