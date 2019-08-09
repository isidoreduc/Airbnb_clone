import React from 'react';
import RentalCard from './RentalCard';
import { connect } from 'react-redux';

const RentalCardList = props => {
	const renderCardList = () => {
		return props.rntls.map(c => (
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
	debugger;
	console.log(props);
	return (
		<div className="container">
			<section id="rentalListing">
				<h1 className="page-title">Our hot listings</h1>
				<div className="row">{renderCardList()}</div>
			</section>
			<br />
		</div>
	);
};

const mapStateToProps = state => {
	debugger;
	return { rntls: state.rentals };
};

export default connect(mapStateToProps)(RentalCardList);
