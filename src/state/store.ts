import {combineReducers, createStore} from 'redux';
import {counterReducer} from './counter-reducer';

export type AppRootStateType= ReturnType<typeof rootReducer>

export const rootReducer = combineReducers({
    counter:counterReducer
})


export const store = createStore(rootReducer)