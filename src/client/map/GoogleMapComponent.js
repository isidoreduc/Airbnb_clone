import React from 'react';

import {
	withScriptjs,
	withGoogleMap,
	GoogleMap,
	Marker,
	Circle
} from 'react-google-maps';

const GoogleMapComponent = props => {
	const coordinates = props.coordinates;

	return (
		<GoogleMap defaultZoom={13} defaultCenter={coordinates} center={coordinates}>
			{/* <Marker position={coordinates} /> */}
			<Circle center={coordinates} radius={500} />
		</GoogleMap>
	);
};

// higher order function
const withGeoCode = WrappedComponent => {
	return class extends React.Component {
		state = {
			coordinates: {
				lat: 0,
				lng: 0
			}
		};

		componentWillMount() {
			this.getGeolocation();
		}

		getGeolocation() {
			const location = this.props.location;
			const geocoder = new window.google.maps.Geocoder();
			geocoder.geocode({ address: location }, (result, status) => {
				debugger;
				if (status === 'Ok') {
					const geometry = result[0].geometry.location;
					const coordinates = { lat: geometry.lat(), lng: geometry.lng() };
					this.setState({ coordinates });
				}
			});
		}

		render() {
			return <WrappedComponent {...this.state} />;
		}
	};
};

export default withScriptjs(withGoogleMap(withGeoCode(GoogleMapComponent)));
