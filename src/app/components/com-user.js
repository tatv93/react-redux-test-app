import React, {Component} from 'react';

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
                            <a href="#" className="btn btn-primary" role="button">Albums</a>
                        </p>
                    </div>
                </div>
            </div>
        );
    }
};