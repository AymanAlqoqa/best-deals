import {combineReducers} from 'redux'
import configureStore from './CreateStore'
import rootSaga from '../sagas'

export default () => {
    //Assemble The Reducers
    const rootReducer = combineReducers({
        categorise: require('./CategoryRedux').reducer,
    })

    let {store, sagasManager, sagaMiddleware} = configureStore(rootReducer, rootSaga)
    return store
}