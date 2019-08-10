import * as redux from 'redux';
import * as reducers from './rentals-reducer';
import thunk from 'redux-thunk';

export const store = () =>
	redux.createStore(
		redux.combineReducers({
			rentalsStored: reducers.rentalListReducer,
			rentalStored: reducers.rentalByIdReducer
		}),
		redux.applyMiddleware(thunk) // thunk transforms an object into a promise(function) so we can cater 								for async situation - server responses
	);
