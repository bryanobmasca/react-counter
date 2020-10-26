import React, { Component } from 'react';
import './index.css';

class Counter extends Component {
    constructor(props) {
        super(props);
        
        this.increaseValue = this.increaseValue.bind(this);
        this.decreaseValue = this.decreaseValue.bind(this);

        this.state = {
            number: 0
        };
    }
    
    increaseValue(){
        this.setState((prevState) => ({
            number: prevState.number + 1
        }));
    }

    decreaseValue(){
        this.setState((prevState) => ({
            number: prevState.number - 1
        }));
    }

    render() {
        return (
            <section>
                <input type="button" value="+" onClick={this.increaseValue}/>
                <input type="number" id="number" value={this.state.number}/>
                <input type="button" value="-"  onClick={this.decreaseValue}/>
            </section>
        );
    }
}

export default Counter;