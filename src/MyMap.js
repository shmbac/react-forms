import React, {Component} from 'react';

class MyMap extends Component {

    constructor(props) {
        super(props);
        this.state = {
            items: [
                'Hello',
                'Welcome',
                'Shmulik'
            ]
        };
    }   
    
    render() {
        return (
            <ul>
                {this.state.items.map((item, index) => {
                   return <li key={index}>{item}</li>
                })}
            </ul>
        );
    }
}

export default MyMap;