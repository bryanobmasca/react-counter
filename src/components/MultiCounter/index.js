import React, { Component } from 'react';
import CounterGroup from '../CounterGroup';
import CounterSizeGenerator from '../CounterSizeGenerator';

class MultiCounter extends Component {
    constructor(props) {
        super(props);
        
        this.onGenerate = this.onGenerate.bind(this);

        this.state = {
            size: 0,
        };
    }

    onGenerate(size) {
        this.setState({ size });
    }
    
    render() {
        return (
            <div>
                <CounterSizeGenerator onGenerate={this.onGenerate}/>
                <CounterGroup size={this.state.size}/>
            </div>
        );
    }
}

export default MultiCounter;