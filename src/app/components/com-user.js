import React, {Component} from 'react';
import {Link} from 'react-router';

export default class User extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="col-sm-6 col-md-4">
                <div className="thumbnail">
                    <div className="caption">
                        <h3>{this.props.data.name}</h3>
                        <p>{this.props.data.email}</p>
                        <p>
                            <Link to={"users/:id/albums".replace(':id', this.props.data.id)} className="btn btn-primary" role="button">Albums</Link>
                        </p>
                    </div>
                </div>
            </div>
        );
    }
};