import React, { Component } from 'react';
import GoogleMapComponent from '../../map/GoogleMapComponent';

export default class RentalMap extends Component {
	render() {
		return (
			<GoogleMapComponent
				googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyAJ0W8Z-26OYhUk0mgQlMRo9Fw8z0u9ZjQ&v=3.exp&libraries=geometry,drawing,places"
				loadingElement={<div style={{ height: `100%` }} />}
				containerElement={<div style={{ height: `360px` }} />}
				mapElement={<div style={{ height: `100%` }} />}
			/>
		);
	}
}
