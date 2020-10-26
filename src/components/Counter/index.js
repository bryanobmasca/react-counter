import React, { Component } from 'react';

class Counter extends Component {

    render() {
        return (
            <section>
                <input type="button" value="+"/>
                <input type="number" id="number" value="0"/>
                <input type="button" value="-"/>
            </section>
        );
    }
}

export default Counter;