import React from 'react';
import propTypes from 'prop-types';
import './Movie.css';

// class Movie extends Component {
//     static propTypes ={
//         title : propTypes.string.isRequired,
//         poster : propTypes.string.isRequired
//     }

//     render() {
//         return (
//             <div>
//                 <MoviePoster poster={this.props.poster} />
//                 <h1>{this.props.title}</h1>
//             </div>
//         )
//     }
// }

// class MoviePoster extends Component {
//     static propTypes ={
//         poster: propTypes.string.isRequired
//     }
//     render() {
//         return (
//             <img src={this.props.poster} />
//         )
//     }
// }
function Movie({title,poster,genre,description}){
    return(
            <div>
                <div className="movieColumns">
                    <MoviePoster poster={poster} />
                    
                 </div>
                 <div className="movieColumns">>
                    <h1>{title}</h1>
                    <MovieGenre genre={genre} />
                 </div>
             </div>
    )
}


function MoviePoster({poster}){
    return (
        <img src={poster} />
    )
}   
function MovieGenre({genre}){
    return(
        <span className="Movie__Genre">{genre}</span>
    )
}


Movie.propTypes = {
    title: propTypes.string.isRequired,
    poster: propTypes.string.isRequired,
    genre: propTypes.array.isRequired,
    description : propTypes.string.isRequired,
}

MoviePoster.propTypes ={
    poster: propTypes.string.isRequired
}

MovieGenre.propTypes ={
    genre : propTypes.array.isRequired
}

export default Movie;