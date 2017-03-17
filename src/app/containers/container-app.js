import React, {Component} from 'react';
import Header from '../components/com-header';

export default class App extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="container">
                <Header/>
                {this.props.children}
            </div>
        );
    }
}