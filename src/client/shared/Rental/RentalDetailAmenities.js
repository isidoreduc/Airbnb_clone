import React from 'react';

const RentalDetailAmenities = props => {
	const rental = props.props;
	return (
		<div className="rental">
			<h2 className={`rental-type ${rental.category}`}>
				{rental.shared} {rental.category}
			</h2>
			<h1 className="rental-title">{rental.title}</h1>
			<h2 className="rental-city">{rental.city}</h2>
			<div className="rental-room-info">
				<span>
					<i className="fa fa-building" />
					{rental.bedrooms} bedrooms
				</span>
				<span>
					<i className="fa fa-user" /> {rental.bedrooms + 4} guests
				</span>
				<span>
					<i className="fa fa-bed" /> {rental.bedrooms + 2} beds
				</span>
			</div>
			<p className="rental-description">{rental.description}</p>
			<hr />
			<div className="rental-assets">
				<h3 className="title">Assets</h3>
				<div className="row">
					<div className="col-md-6">
						<span>
							<i className="fa fa-asterisk" /> Cooling
						</span>
						<span>
							<i className="fa fa-thermometer" /> Heating
						</span>
						<span>
							<i className="fa fa-location-arrow" /> Iron
						</span>
					</div>
					<div className="col-md-6">
						<span>
							<i className="fa fa-desktop" /> Working area
						</span>
						<span>
							<i className="fa fa-cube" /> Washing machine
						</span>
						<span>
							<i className="fa fa-cube" /> Dishwasher
						</span>
					</div>
				</div>
			</div>
		</div>
	);
};

export default RentalDetailAmenities;
