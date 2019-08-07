import React, { useState } from 'react';
import './App.css';
import Header from './shared/Header';
import RentalCardList from './shared/RentalCardList';
import RentalDetail from './shared/RentalDetail';
import { BrowserRouter, Route } from 'react-router-dom';
//import List from './shared/List';

function App() {
	// const [isRentalList, setIsRentalList] = useState('true');

	return (
		<div className="container">
			<Header />
			<BrowserRouter>
				<Route exact path="/" component={RentalCardList} />
				<Route exact path="/test" component={RentalDetail} />
				{/* {isRentalList ? <RentalCardList /> : <RentalDetail />} */}

				{/* <List /> */}
			</BrowserRouter>
		</div>
	);
}

export default App;
