import React, { useState } from 'react';
import './App.css';
import Header from './shared/Header';
import RentalCardList from './shared/RentalCardList';
import RentalDetail from './shared/RentalDetail';
//import List from './shared/List';

function App() {
	const [isRentalList, setIsRentalList] = useState('true');

	return (
		<div>
			<Header />
			{isRentalList ? <RentalCardList /> : <RentalDetail />}

			{/* <List /> */}
		</div>
	);
}

export default App;
