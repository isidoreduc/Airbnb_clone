import React, { useState } from 'react';
import RentalCard from './RentalCard';

const RentalCardList = () => {
	const [cards, setCards] = useState([
		{ name: 'Anne`s', price: 234 },
		{ name: 'John`s', price: 83 },
		{ name: 'Mary`s', price: 733 }
	]);

	const renderCardList = () => {
		return cards.map((c, index) => (
			<RentalCard key={index} name={c.name} price={c.price} />
		));
	};

	const add = obj => {
		//setCards(cards.push(obj)); this is bad because push returns the number of elements in array, not an array
		setCards([...cards, obj]);
		console.log(cards);
	};

	return (
		<div className="container">
			<section id="rentalListing">
				<h1 className="page-title">Our hot listings</h1>
				<div className="row">{renderCardList()}</div>
			</section>
			<br />
			<button
				className="btn btn-primary"
				onClick={() => add({ name: 'jon', price: 27 })}
			>
				View others
			</button>
		</div>
	);
};

export default RentalCardList;
