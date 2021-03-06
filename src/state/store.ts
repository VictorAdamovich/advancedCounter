import {combineReducers, createStore} from 'redux';
import {counterReducer} from './counterReducer';

export type AppRootStateType= ReturnType<typeof rootReducer>

export const rootReducer = combineReducers({
    counter:counterReducer
})


export const store = createStore(rootReducer)