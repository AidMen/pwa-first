import {combineReducers} from 'redux'
import {ExcursionListReducer} from './excursions'
import {AuthReducer} from './auth'
import {DrawerReducer} from './drawer'

import { routerReducer} from 'react-router-redux'


const rootReducer = combineReducers({
    excursions: ExcursionListReducer,
    auth: AuthReducer,
    drawer: DrawerReducer,
    router: routerReducer,
})

export default rootReducer