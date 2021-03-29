import { createStore, combineReducers } from 'redux';
import homePage from './containers/HomePage/reducers'

const reducers = combineReducers({ homePage })
// the combine reducers will take in all the reducers and combine them. 
// they are objects so place them in the object within the combine reducer function. 

export default createStore(reducers);