import React, {Component} from 'react';
import {connect} from 'react-redux';
import Album from './com-album';
import {getTestAlbum, getAlbums} from '../actions/action-album';

class AlbumsList extends Component {
    constructor(props) {
        super(props);
    }

    albumsMap() {
        return this.props.albums.map((album) => {
            return (<Album key={album.id} data={album}/>);
        });
    }

    componentDidMount() {
        this.props.getAlbums(this.props.userId);
    }

    render() {
        return (
            <div className="row">
                {this.albumsMap()}
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        albums: state.albums
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        getTestAlbum: () => {
            dispatch(getTestAlbum());
        },
        getAlbums: (userId) => {
            getAlbums()(userId, dispatch);
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(AlbumsList);