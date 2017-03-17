import React, {Component} from 'react';
import AlbumsList from '../components/com-albums-list';

export default class AlbumsPage extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <AlbumsList userId={this.props.params.id}/>
        );
    }
}