import React from 'react';

const RentalCard = props => {
	return (
		<div className="col-md-3 col-xs-6">
			<div className="card bwm-card">
				<img
					className="card-img-top"
					src="http://via.placeholder.com/350x250"
					alt=""
				/>
				<div className="card-block">
					<h6 className="card-subtitle">
						{props.shared ? 'Shared' : 'Whole'} {props.category}&#183;{' '}
						{props.city}
					</h6>
					<h4 className="card-title">{props.title}</h4>
					<p className="card-text">
						${props.price} per Night &#183; Free Cancelation
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
