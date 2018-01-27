import React from 'react';
import {ButtonController} from './ButtonController';
import { connect } from 'react-redux';

class Button1 extends ButtonController {
    handle() {
        this.onClick(1);
    }

    renderItems() {
        let number = this.ownState();
        return this.props.value + number;
    }

    render() {
        return (
            <div>
                <button onClick={() => this.handle()}>1</button>
                <p>{this.renderItems()}</p>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        value: state.rootReducer.value,
        number: state.rootReducer.number
    }
}

export default connect(mapStateToProps)(Button1);