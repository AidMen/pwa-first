import * as ExcursionActions from '../actions/excursions'

export const ExcursionListReducer = (state = [], action) => {
    switch (action.type) {
        case ExcursionActions.LIST_EXCURSIONS_SUCCESS:
        console.log('state', action)
            return [
                ...state,
                ...action.payload.excursions
            ];
        default:
            return state    
    }
}