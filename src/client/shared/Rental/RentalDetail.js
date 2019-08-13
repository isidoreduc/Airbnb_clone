import React from 'react';
import { connect } from 'react-redux';
import { getRentalById } from '../../actions';
import RentalDetailAmenities from './RentalDetailAmenities';
import { MapWithAMarker } from '../../map/GoogleMap';

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
							<MapWithAMarker
								googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyAJ0W8Z-26OYhUk0mgQlMRo9Fw8z0u9ZjQ&v=3.exp&libraries=geometry,drawing,places"
								loadingElement={<div style={{ height: `100%` }} />}
								containerElement={<div style={{ height: `360px` }} />}
								mapElement={<div style={{ height: `100%` }} />}
							/>
						</div>
					</div>
				</div>

				<div className="details-section">
					<div className="row">
						<div className="col-md-8">
							<RentalDetailAmenities props={props.rentalProps} />
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
