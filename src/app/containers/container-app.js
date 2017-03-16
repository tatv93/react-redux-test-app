import React, {Component} from 'react';
import UsersList from '../components/com-users-list';
import Header from '../components/com-header';

export default class App extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="container">
                <Header/>
                <UsersList/>
            </div>
        );
    }
}