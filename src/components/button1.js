import React from 'react';
import {ButtonController, ReduxState} from './ButtonController';
import { connect } from 'react-redux';
import { changeValue } from './action'

class Button1 extends ButtonController {

    renderItems() {
        let number = this.ownState();
        return this.props.value + number;
    }

    onClick(value) {
        this.props.changeValue(11);
        console.log(value);
    }

    render() {
        return (
            <div>
                <button onClick={() => this.onClick(1)}>1</button>
                <p>{this.renderItems()}</p>
            </div>
        )
    }

    getObjectConnect(state){
        const obj = super.getObjectConnect(state);
        return {
            obj,
            value: state.rootReducer.value,
        }
    }

    getDispathToProps(dispatch){
        var obj = super.getDispathToProps(dispatch);
        return {
            ...obj,
            changeValue: (item) => {
                dispatch(changeValue(item))
            }
        }
    }

}
var btn = new Button1();
export default connect(btn.mapStateToProps, btn.mapDispatchToProps)(Button1);