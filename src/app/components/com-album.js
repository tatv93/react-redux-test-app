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
                        <h3>{this.props.data.title}</h3>
                        <p>
                            <Link to={"/albums/" + this.props.data.id}
                                  className="btn btn-primary"
                                  role="button">Photos</Link>
                        </p>
                    </div>
                </div>
            </div>
        );
    }
};