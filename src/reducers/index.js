import * as redux from 'redux';
import * as reducers from './rentals-reducer';

export const store = () =>
	redux.createStore(
		redux.combineReducers({
			rentalsStored: reducers.rentalListReducer,
			rentalStored: reducers.rentalByIdReducer
		})
	);
