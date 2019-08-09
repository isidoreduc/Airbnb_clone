import * as redux from 'redux';
import { rentalReducer } from './rentals-reducer';

export const store = () =>
	redux.createStore(redux.combineReducers({ rens: rentalReducer }));
