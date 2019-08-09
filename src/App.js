import React from 'react';
import * as redux from 'redux';
import { Provider } from 'react-redux';
import { BrowserRouter, Redirect, Route } from 'react-router-dom';
import './App.css';
import Header from './shared/Header';
import RentalCardList from './shared/RentalCardList';
import RentalDetail from './shared/RentalDetail';
//import List from './shared/List';

const App = () => {
	const store = redux.createStore(() => {
		return {
			rentals: [
				{
					id: 0,
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
					id: 1,
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
					id: 2,
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
					id: 3,
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
			]
		};
	});
	return (
		<Provider store={store}>
			<div className="container">
				<Header />
				<BrowserRouter>
					<Route exact path="/" render={() => <Redirect to="/rentals" />} />
					<Route exact path="/rentals" component={RentalCardList} />
					<Route exact path="/rentals/:id" component={RentalDetail} />
				</BrowserRouter>
			</div>
		</Provider>
	);
};

export default App;

// 1. Add a Provider of state
// 2. Add a store to hold the state and be passed by Provider
// 3. create a mapStateToProps function  that takes a state argument in the class/func component where you want to access the state and assign the piece of state you are interested in to a variable: ex: mapStateToProps(state) {return {rents: state.rentals}}
// 4. Create connection to store using the connect func taking as argument the mapStateToProps and calling the existing component that needs the connection - ex. export default connect(mapStateToProps)(RentalCardList);
