import React from 'react';
import RentalCard from './RentalCard';

class List extends React.Component {
	state = {
		rentals: [1, 2, 3]
	};

	renderCardList = () => {
		return this.state.rentals.map(c => <RentalCard />);
	};

	add = () => {
		const rentals = this.state.rentals;
		rentals.push(1);
		this.setState({ rentals });
	};

	render() {
		return (
			<div className="container">
				<section id="rentalListing">
					<h1 className="page-title">Our hot listings</h1>
					<div className="row">{this.renderCardList()}</div>
				</section>
				<br />
				<button className="btn btn-primary" onClick={() => this.add()}>
					View others
				</button>
			</div>
		);
	}
}

export default List;
