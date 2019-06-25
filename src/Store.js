import thunkMiddleware from 'redux-thunk';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { reducer as weatherReducer } from './weather/';

const reducer = combineReducers({
    weather: weatherReducer
});

const middlewares = [thunkMiddleware];

export default createStore(reducer, applyMiddleware(...middlewares));
