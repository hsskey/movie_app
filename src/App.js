import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Movie from './Movie';




class App extends Component {

  //Render : componentWillMount() -> render() ->componentDidMount()
    //Update : componentWillReceiveProps() -> shouldComponentUpdate() -> componentWillUpdate() ->render() -> componentDidUpdate()
    //Update 예시 : componentWillUpdate()시 로딩아이콘 , componentdidUpdate()시 로딩아이콘 hide
  
  state = {};

  componentDidMount(){
    this._getMovies()
  }

  _getMovies = async () => {
    const movies = await this._callApi()
    this.setState({
      movies
    })
  }
  //배열 형태로 return
  _callApi = () =>{
    return fetch('https://yts.am/api/v2/list_movies.json?sort_by=download_count')
    .then(response =>response.json())
    .then(json => json.data.movies)
    .catch(err =>console.log(err))
  }
  //실제 출력부
  _renderMovies = () =>{
    const movies = this.state.movies.map(movie =>{
      console.log(movie);

      return <Movie title={movie.title}
        poster={movie.large_cover_image}
        key={movie.id} genre={movie.genres} 
        description={movie.description_full}/>
    })
    return movies
  }

  //loading state
  render() {
    return <div className="App">
        {this.state.movies?this._renderMovies() : 'Loading'}
      </div>;
  }
}

export default App;
