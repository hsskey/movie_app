import React, { Component } from 'react';
import './Movie.css';

class Movie extends Component {
    render() {
        return (
            <div>
                <MoviePoster />
                <h1>Hello this is my first movie app</h1>
            </div>
        )
    }
}

class MoviePoster extends Component {
    render() {
        return (
            <img src="http://t1.daumcdn.net/liveboard/movie/84bbece8ba5340e4924170534e22a0ae.JPG" />
        )
    }
}

export default Movie;