import React, {Component} from 'react';
import Header from '../components/com-header';
import {connect} from "react-redux";

class App extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        let content = this.props.children;
        if(this.props.app_data.is_fetching) {
            content = (
                <h1>loading...</h1>
            );
        }
        return (
            <div className="container">
                <Header/>
                {content}
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        app_data: state.app_data
    };
};

export default connect(mapStateToProps)(App);