import React, { Component } from 'react';

export default class Controller extends Component {
    render() {
        return (
            <div>
                <input type="text" />
                <button>Search Dishes</button>
                <button>Randomize Dishes</button>
                <div className="scrollable-buttons">
                <Button values={['Unlimited', '100', '300', '500', '700', '900']}/>
                    <Button values={['Unlimited', '100', '300', '500', '700', '900']}/>
                    <Button values={['Veg', 'Non-veg']}/>
                </div>
            </div>
        )
    }
}

class Button extends Component {
    constructor(props) {
        super(props);
        this.state = {
            index: 0
        }
    }

    changeValue(change) {
        let changedVal = this.state.index+change;
        if (changedVal >= this.props.values.length) changedVal = 0;
        if (changedVal < 0) changedVal = this.props.values.length - 1;
        this.setState({index: changedVal});
    }

    render() {
        return (
            <span className="scrollable-button">
                <button onClick={() => this.changeValue(1)}>ArrowUp</button>
                <span className="button-val">{this.props.values[this.state.index]}</span>
                <button onClick={() => this.changeValue(-1)}>ArrowDown</button>
            </span>
        )
    }
}