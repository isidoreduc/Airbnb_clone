import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, Redirect, Route } from 'react-router-dom';
import './App.css';
import Header from './shared/Header';
import RentalCardList from './shared/RentalCardList';
import RentalDetail from './shared/RentalDetail';
import { store } from './reducers';

const App = () => {
	return (
		<Provider store={store}>
			<div className="container">
				<BrowserRouter>
					<Header />
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
