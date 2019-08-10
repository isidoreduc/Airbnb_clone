// reducers are pure functions that take the previous state, transform it and return the new state

export const rentalListReducer = (state = { data: [] }, action) => {
	switch (action.type) {
		case 'GET_RENTALS':
			return { ...state, data: action.payload };
		default:
			return state;
	}
};

export const rentalByIdReducer = (state = { data: {} }, action) => {
	switch (action.type) {
		case 'GET_RENTAL_BY_ID':
			return { ...state, data: action.payload };
		default:
			return state;
	}
};
