import React, {Component} from 'react';

export default class Header extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <nav className="navbar navbar-default">
                <div className="container-fluid">
                    <form className="navbar-form navbar-left">
                        <div className="form-group">
                            <input type="text" className="form-control" placeholder="Search"/>
                        </div>
                        <button type="submit" className="btn btn-default">Submit</button>
                    </form>
                </div>
            </nav>
        );
    }
};