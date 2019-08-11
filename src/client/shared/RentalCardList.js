import React, { useEffect } from 'react';
import RentalCard from './RentalCard';
import { connect } from 'react-redux';
import { getRentals } from '../actions';

const RentalCardList = props => {
	useEffect(() => {
		props.dispatch(getRentals());
	});

	const renderCardList = () => {
		return props.rentalsProps.map(c => (
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
	return { rentalsProps: state.rentalsStored.data };
};

export default connect(mapStateToProps)(RentalCardList);

// redux:
// 1. in actions we do the state transformation
// 2. state transformed in action is sent to reducers
// 3. from there is sent to reducer store(combine)
// 4. from store is sent throught mapStateToProps to component