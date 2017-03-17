import React, {Component} from 'react';
import UsersList from '../components/com-users-list';

export default class HomePage extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <UsersList/>
        );
    }
};