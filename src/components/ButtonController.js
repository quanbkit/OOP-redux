import React from 'react';
import { connect } from 'react-redux';
import { add } from './action'

export class ButtonController extends React.Component {
    ownState() {
        if(this.props.number == null){
            return 0;
        }
        return this.props.number
    }

    getObjectConnect(state){
        return {
            number: state.rootReducer.number,
        }
    }

    getDispathToProps(dispatch){
        return {
            add: (item) => {
                dispatch(add(item))
            }
        }
    }

    mapStateToProps = state => {
        return this.getObjectConnect(state);
    }

    mapDispatchToProps = (dispatch, ownProps) => {
        return this.getDispathToProps(dispatch);
    }
}
var btn = new ButtonController();
export default connect(btn.mapStateToProps, btn.mapDispathToProps)(ButtonController);


