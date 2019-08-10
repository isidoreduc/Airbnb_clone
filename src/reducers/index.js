import * as reducers from './rentals-reducer';
import thunk from 'redux-thunk';
import { createStore, applyMiddleware, compose, combineReducers } from 'redux';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(
	combineReducers({
		rentalsStored: reducers.rentalListReducer,
		rentalStored: reducers.rentalByIdReducer
	}),
	composeEnhancers(applyMiddleware(thunk)) // thunk transforms an object into a promise(function) so we can cater 								for async situation - server responses
);
