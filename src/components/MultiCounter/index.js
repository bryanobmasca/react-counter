import React, { Component } from 'react';
import CounterGroup from '../CounterGroup';
import CounterGroupSum from '../CounterGroupSum';
import CounterSizeGenerator from '../CounterSizeGenerator';

class MultiCounter extends Component {
    constructor(props) {
        super(props);
        
        this.onGenerate = this.onGenerate.bind(this);

        this.state = {
            size: 0,
            sum: 0
        };
    }

    onGenerate(size) {
        this.setState({ size });
    }

    addToSum = (valueToAdd) => {
        this.setState((prevState) => (
            {
                sum: prevState.sum + valueToAdd
            }
        ));
    }

    render() {
        return (
            <fieldset>
                <legend>Multiple Counter</legend>
                <CounterSizeGenerator onGenerate={this.onGenerate}/>
                <CounterGroup size={this.state.size} addToSum={this.addToSum}/>
                <CounterGroupSum sum={this.state.sum}/>
            </fieldset>
        );
    }
}

export default MultiCounter;