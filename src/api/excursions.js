import {HttpClient, API} from './httpClient'

const EXCURSION_API = `${API}/excursions`

//Create
const createExcursion = excursion => {
    return HttpClient.post(EXCURSION_API, excursion)
}

//List
const listExcursions = () => {
    return HttpClient.get(EXCURSION_API)
}

//Get
const getExcursions = (id) => {
    return HttpClient.get(`${EXCURSION_API}/${id}`)
}

const ExcursionApi = {createExcursion, listExcursions, getExcursions}

export {ExcursionApi}