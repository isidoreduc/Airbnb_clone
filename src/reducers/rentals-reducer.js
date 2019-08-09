// reducers are pure functions that take the previous state, transform it and return the new state

export const rentalReducer = (state = {data: []}, action) => {
	switch (action.type) {
		case 'GET_RENTALS':
			return {...state, data: action.rentals} ;
		default:
			return state;
	}
};
