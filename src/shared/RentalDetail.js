import React from 'react';
import { connect } from 'react-redux';
import { getRentalById } from '../actions';

const RentalDetail = props => {
	console.log(props);
	React.useEffect(() => {
		props.dispatch(getRentalById(props.match.params.id));
	});
	//debugger;
	return <div>{props.rentalProps.title}</div>;
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
