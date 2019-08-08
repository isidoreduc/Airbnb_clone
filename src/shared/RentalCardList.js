import React, { useState } from 'react';
import RentalCard from './RentalCard';

const RentalCardList = () => {
	const [cards, setCards] = useState([
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
	]);

	const renderCardList = () => {
		return cards.map(c => (
			<RentalCard
				key={c.id}
				id={c.id}
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

	// getting a random city from the data. same can be done for any other property
	const cities = cards.map(c => c.city);
	const randomCity = cities[Math.floor(Math.random() * cities.length)];
	console.log(randomCity);

	return (
		<div className="container">
			<section id="rentalListing">
				<h1 className="page-title">Our hot listings</h1>
				<div className="row">{renderCardList()}</div>
			</section>
			<br />
			<button
				className="btn btn-primary"
				onClick={() =>
					add({
						id: cards.length,
						title: `Central Apartment ${cards.length}`,
						city: randomCity,
						street: 'Haupt strasse',
						category: 'house',
						image: 'http://via.placeholder.com/350x250',
						bedrooms: 9,
						description: 'Very nice apartment',
						dailyRate: 33,
						shared: true,
						createdAt: '24/12/2017'
					})
				}
			>
				View others
			</button>
		</div>
	);
};

export default RentalCardList;
