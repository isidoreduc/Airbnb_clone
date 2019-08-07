import React from 'react';

const RentalCard = ({ name, price }) => {
	return (
		<div className="col-md-3 col-xs-6">
			<div className="card bwm-card">
				<img
					className="card-img-top"
					src="http://via.placeholder.com/350x250"
					alt=""
				/>
				<div className="card-block">
					<h6 className="card-subtitle">Whole Apartment &#183; New York</h6>
					<h4 className="card-title">{name}</h4>
					<p className="card-text">
						${price} per Night &#183; Free Cancelation
					</p>
					<a href="google.com" className="card-link">
						More Info
					</a>
				</div>
			</div>
		</div>
	);
};

export default RentalCard;
