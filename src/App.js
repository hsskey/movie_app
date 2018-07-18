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
    setTimeout(()=>{
      this.setState({
        movies : [
          {
        
          "title": "blackPanther",
          "poster": "http://t1.daumcdn.net/liveboard/movie/84bbece8ba5340e4924170534e22a0ae.JPG"
          }, 
          {
          "title": "infinityWar",
          "poster": "https://images-na.ssl-images-amazon.com/images/I/A1t8xCe9jwL._SY679_.jpg"
          },
          {
          "title": "deadPool",
          "poster": "http://www.filmfeeder.co.uk/wp-content/uploads/2018/05/deadpool2body1.png"
          },
          {
          "title": "antman&wasp",
          "poster": "http://digitalspyuk.cdnds.net/18/18/768x384/landscape-1525180279-ant-man.jpg"
          },
          {
            "title":"captainMarvel",
            "poster":"https://i.redd.it/ac02e53cn5v01.jpg"
          }
        ]
      })
    },5000)
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
