import { connect } from 'react-redux';

import { loadResources, select, filtering } from "./actionCreators";
import Component from "./Resources.jsx";

let mapStateToProps = (state) => {
    return { state: state.locationReducer };
}

let mapDispatchToProps = (dispatch)  => {
    return {
	loadResources(category) {
	    dispatch(loadResources(category));
	},

	select(resource) {
	    dispatch(select(resource));
	},

	filtering(category) {
	    dispatch(filtering(category));
	},

    };
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Component);
