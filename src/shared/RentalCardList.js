import React, { useState } from 'react';
import RentalCard from './RentalCard';

const RentalCardList = () => {
	const [cards, setCards] = useState([
		{
			id: 1,
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
			id: 2,
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
			id: 3,
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
			id: 4,
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
	]);

	const renderCardList = () => {
		return cards.map(c => (
			<RentalCard
				key={c.id}
				title={c.title}
				city={c.city}
				price={c.dailyRate}
				shared={c.shared}
				category={c.category}
			/>
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
