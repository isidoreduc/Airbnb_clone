import React from 'react';
import './App.css';
import Header from './shared/Header';
import RentalCardList from './shared/RentalCardList';
//import List from './shared/List';

function App() {
	return (
		<div>
			<Header />
			<RentalCardList />
			{/* <List /> */}
		</div>
	);
}

export default App;
