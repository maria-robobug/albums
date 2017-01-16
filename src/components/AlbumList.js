import React, { Component } from 'react';
import { View } from 'react-native';
import axios from 'axios';

import AlbumDetail from './AlbumDetail';

const API_URL = 'https://rallycoding.herokuapp.com/api/music_albums';

class AlbumList extends Component {
	state = { 
		albums: [] 
	};
	
	componentWillMount () {
		axios.get(API_URL)
				.then(response => this.setState({albums: response.data}));
	}
	
	renderAlbums () {
		return this.state.albums.map(album => 
			<AlbumDetail key={album.title} album={album} />
		);
	}
	
	render () {
		return (
			<View>
				{this.renderAlbums()}
			</View>
		);
	}
}

export default AlbumList;