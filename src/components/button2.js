import React from 'react';
import ButtonController from './ButtonController';

export default class Button2 extends ButtonController {
    render() {
        return (
            <div>
                <button onClick={() => this.onClick(2)}>2</button>
            </div>
        )
    }
}