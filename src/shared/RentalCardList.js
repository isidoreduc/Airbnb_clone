import React, { useState } from 'react';
import RentalCard from './RentalCard';

const RentalCardList = () => {
	const [cards, setCards] = useState({
		names: ['Anne`s', 'John`s', 'Rooney`s'],
		prices: [230, 167, 199]
	});

	const renderCardList = () => {
		return cards.names.map((card, i) => (
			<RentalCard
				key={Math.random()}
				name={cards.names[i]}
				price={cards.prices[i]}
			/>
		));
	};

	return (
		<div className="container">
			<section id="rentalListing">
				<h1 className="page-title">Our hot listings</h1>
				<div className="row">{renderCardList()}</div>
			</section>
		</div>
	);
};

export default RentalCardList;
