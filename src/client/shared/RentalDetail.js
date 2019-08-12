import React from 'react';
import { connect } from 'react-redux';
import { getRentalById } from '../actions';

const RentalDetail = props => {
	React.useEffect(() => {
		props.dispatch(getRentalById(props.match.params.id));
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	const details = (
		<>
			<section id="rentalDetails">
				<div className="upper-section">
					<div className="row">
						<div className="col-md-6">
							<img src={props.rentalProps.image} alt="" />
						</div>
						<div className="col-md-6">
							<img src={props.rentalProps.image} alt="" />
						</div>
					</div>
				</div>

				<div className="details-section">
					<div className="row">
						<div className="col-md-8">
							<div className="rental">
								<h2 className={`rental-type ${props.rentalProps.category}`}>
									{props.rentalProps.shared} {props.rentalProps.category}
								</h2>
								<h1 className="rental-title">{props.rentalProps.title}</h1>
								<h2 className="rental-city">{props.rentalProps.city}</h2>
								<div className="rental-room-info">
									<span>
										<i className="fa fa-building" />
										{props.rentalProps.bedrooms} bedrooms
									</span>
									<span>
										<i className="fa fa-user" />{' '}
										{props.rentalProps.bedrooms + 4} guests
									</span>
									<span>
										<i className="fa fa-bed" /> {props.rentalProps.bedrooms + 2}{' '}
										beds
									</span>
								</div>
								<p className="rental-description">
									{props.rentalProps.description}
								</p>
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
						</div>
						<div className="col-md-4"> BOOKING</div>
					</div>
				</div>
			</section>
		</>
	);

	return props.rentalProps.title ? details : <div>Loading...</div>;
};

const mapStateToProps = state => {
	return {
		rentalProps: state.rentalStored.data
	};
};

export default connect(mapStateToProps)(RentalDetail);

// redux:
// 1. in actions we do the state transformation
// 2. state transformed in action is sent to reducers
// 3. from there is sent to reducer store(combine)
// 4. from store is sent throught mapStateToProps to component
