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
    fetch('https://yts.am/api/v2/list_movies.json?sort_by=download_count')
    .then(response =>response.json())
    .then(json => console.log(json))
    .catch(err =>console.log(err))
  }
  //영화 list를 불러오는 function
  _renderMovies = () =>{
    const movies =this.state.movies.map((movie,index) => {
       return <Movie title={movie.title} poster={movie.poster} key={index}/>;
    })
    return movies;
  }

  render() {
    return <div className="App">
        {this.state.movies?this._renderMovies() : 'Loading'}
      </div>;
  }
}

export default App;
