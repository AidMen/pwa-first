import {
    ExcursionApi
} from "../api/excursions";


//Create
export const CREATE_EXCURSION = '[EXCURSION] CREATE_EXCURSION'
export const CREATE_EXCURSION_SUCCESS = '[EXCURSION] CREATE_EXCURSION_SUCCESS'
export const CREATE_EXCURSION_ERROR = '[EXCURSION] CREATE_EXCURSION_ERROR'


export const CreateExcursion = (excursion) => {
    return (dispatch, state) => {
        return ExcursionApi.createExcursion(excursion).then(res => {
            console.log('res', res);
            dispatch(CreateExcursionSuccess(res))
        })
    }
}

export const CreateExcursionSuccess = (excursion) => {
    return {
        type: CREATE_EXCURSION_SUCCESS,
        payload: {
            excursion
        }
    }
}


//List
export const LIST_EXCURSIONS = '[EXCURSION] LIST_EXCURSIONS'
export const LIST_EXCURSIONS_SUCCESS = '[EXCURSION] LIST_EXCURSIONS_SUCCESS'
export const LIST_EXCURSIONS_ERROR = '[EXCURSION] LIST_EXCURSIONS_ERROR'

export const ListExcursions = () => {
    return (dispatch, state) => {
        return ExcursionApi.listExcursions().then(res => {
            dispatch(ListExcursionsSuccess(res))
        })
    }
}

export const ListExcursionsSuccess = (excursions) => {
    return {
        type: LIST_EXCURSIONS_SUCCESS,
        payload: {
            excursions
        }
    }
}


//Get
export const GET_EXCURSIONS = '[EXCURSION] GET_EXCURSIONS'
export const GET_EXCURSIONS_SUCCESS = '[EXCURSION] GET_EXCURSIONS_SUCCESS'
export const GET_EXCURSIONS_ERROR = '[EXCURSION] GET_EXCURSIONS_ERROR'