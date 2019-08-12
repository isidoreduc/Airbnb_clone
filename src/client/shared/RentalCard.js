import React from 'react';
import { Link } from 'react-router-dom';

const RentalCard = props => {
	// debugger;
	return (
		<div className="col-md-3 col-xs-6">
			{/* the id coming from express server uses a _id prop */}
			<Link to={`/rentals/${props.id}`} className="card-link">
				<div className="card bwm-card">
					<img className="card-img-top" src={props.image} alt="" />
					<div className="card-block">
						<h6 className={`card-subtitle ${props.category}`}>
							{props.shared ? 'Shared' : 'Whole'} {props.category}&#183;{' '}
							{props.city}
						</h6>
						<h4 className="card-title">{props.title}</h4>
						<p className="card-text">
							${props.price} per Night &#183; Free Cancelation
						</p>
					</div>
				</div>
			</Link>
		</div>
	);
};

export default RentalCard;
