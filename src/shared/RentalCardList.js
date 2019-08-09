import React, { useEffect } from 'react';
import RentalCard from './RentalCard';
import { connect } from 'react-redux';
import { getRentals } from '../actions';

const RentalCardList = props => {
	useEffect(() => {
		props.dispatch(getRentals());
	});

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
	return { rntls: state.rens.data };
};

export default connect(mapStateToProps)(RentalCardList);
