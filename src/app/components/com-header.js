import React, {Component} from 'react';
import {connect} from 'react-redux';
import {filterUsers, getUsers} from '../actions/action-user';

class Header extends Component {
    constructor(props) {
        super(props);
    }

    handleSearchChange(e) {
        if(!e.target.value) return this.props.getUsers();
        this.props.filterUsers(e.target.value);
    }

    render() {
        return (
            <nav className="navbar navbar-default">
                <div className="container-fluid">
                    <form className="navbar-form navbar-left">
                        <div className="form-group">
                            <input type="text" className="form-control" placeholder="Search"
                                   onChange={(e) => {
                                       this.handleSearchChange(e)
                                   }}
                            />
                        </div>
                    </form>
                </div>
            </nav>
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
        filterUsers: (text) => {
            dispatch(filterUsers(text));
        },
        getUsers: () => {
            getUsers()(dispatch);
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);