import React, {Component} from 'react';
import UsersList from '../components/com-users-list';

export default class Home extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <UsersList/>
        );
    }
};