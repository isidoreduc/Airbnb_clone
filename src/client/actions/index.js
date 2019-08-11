// import axios from 'axios';

// const rentals = axios.get('http://localhost:5000/api/v1/rentals').toArray();
const rentals = [
	{
		id: '0',
		title: 'Central Apartment',
		city: 'New York',
		street: 'Times Sqaure',
		category: 'apartment',
		image: 'http://via.placeholder.com/350x250',
		bedrooms: 3,
		description: 'Very nice apartment',
		dailyRate: 34,
		shared: false,
		createdAt: '24/12/2017'
	},
	{
		id: '1',
		title: 'Central Apartment 2',
		city: 'San Francisco',
		street: 'Main street',
		category: 'condo',
		image: 'http://via.placeholder.com/350x250',
		bedrooms: 2,
		description: 'Very nice apartment',
		dailyRate: 12,
		shared: true,
		createdAt: '24/12/2017'
	},
	{
		id: '2',
		title: 'Central Apartment 3',
		city: 'Bratislava',
		street: 'Hlavna',
		category: 'condo',
		image: 'http://via.placeholder.com/350x250',
		bedrooms: 2,
		description: 'Very nice apartment',
		dailyRate: 334,
		shared: true,
		createdAt: '24/12/2017'
	},
	{
		id: '3',
		title: 'Central Apartment 4',
		city: 'Berlin',
		street: 'Haupt strasse',
		category: 'house',
		image: 'http://via.placeholder.com/350x250',
		bedrooms: 9,
		description: 'Very nice apartment',
		dailyRate: 33,
		shared: true,
		createdAt: '24/12/2017'
	}
];

// usually data would come through an http request
export const getRentals = () => {
	return { type: 'GET_RENTALS', payload: rentals };
};

export const getRentalById = rentalId => async dispatch => {
	const response = await rentals.find(item => item.id === rentalId);

	dispatch({
		type: 'GET_RENTAL_BY_ID',
		payload: response
	});
};