import React from 'react';
import { connect } from 'react-redux';

export class ButtonController extends React.Component {
    onClick(value) {
        console.log(value);
    }
    
    ownState() {
        return this.props.number
    }
}

const mapStateToProps = state => {
    return {
        number: state.rootReducer.number,
    }
}

export default connect(mapStateToProps)(ButtonController);


