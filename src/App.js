import React, {  } from 'react';
import './App.css';
import Header from './shared/Header';
import RentalCardList from './shared/RentalCardList';
import RentalDetail from './shared/RentalDetail';
import { BrowserRouter, Route, Redirect } from 'react-router-dom';
//import List from './shared/List';

function App() {
	// const [isRentalList, setIsRentalList] = useState('true');

	return (
		<div className="container">
			<Header />
			<BrowserRouter>
				<Route exact path="/" render={() => <Redirect to="/rentals" />} />
				<Route exact path="/rentals" component={RentalCardList} />
				<Route exact path="/rentals/:id" component={RentalDetail} />
				{/* {isRentalList ? <RentalCardList /> : <RentalDetail />} */}

				{/* <List /> */}
			</BrowserRouter>
		</div>
	);
}

export default App;
