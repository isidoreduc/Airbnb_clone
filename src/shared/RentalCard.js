import React from 'react';

const RentalCard = () => {
	const renderCardList = () =>
		[{ name: "Ralf's" }, { name: "Zoe's" }, { name: "Tom's" }].map(place => (
			<div className="col-md-3 col-xs-6">
				<div className="card bwm-card">
					<img
						className="card-img-top"
						src="http://via.placeholder.com/350x250"
						alt=""
					/>
					<div className="card-block">
						<h6 className="card-subtitle">Whole Apartment &#183; New York</h6>
						<h4 className="card-title">{place.name}</h4>
						<p className="card-text">$240 per Night &#183; Free Cancelation</p>
						<a href="#" className="card-link">
							More Info
						</a>
					</div>
				</div>
			</div>
		));

	return (
		<div className="container">
			<section id="rentalListing">
				<h1 className="page-title">Our hot listings</h1>
				<div className="row">{renderCardList()}</div>
			</section>
		</div>
	);
};

export default RentalCard;
