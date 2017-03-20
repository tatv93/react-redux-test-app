import React, {Component} from 'react';
import {connect} from 'react-redux';
import User from './com-user';
import {getUsers, getTestUser} from '../actions/action-user';

class UsersList extends Component {
    constructor(props) {
        super(props);
    }

    usersMap() {
        return this.props.users.map((user) => {
            return (<User key={user.id} data={user}/>);
        });
    }

    componentDidMount() {
        this.props.getUsers();
    }

    render() {
        return (
            <div className="row">
                {this.usersMap()}
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        users: state.users
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        getTestUser: () => {
            dispatch(getTestUser());
        },
        getUsers: () => {
            dispatch(getUsers());
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(UsersList);