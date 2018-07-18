import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Movie from './Movie';

const movies = [
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
  }
]



class App extends Component {

  //Render : componentWillMount() -> render() ->componentDidMount()
    //Update : componentWillReceiveProps() -> shouldComponentUpdate() -> componentWillUpdate() ->render() -> componentDidUpdate()
    //Update 예시 : componentWillUpdate()시 로딩아이콘 , componentdidUpdate()시 로딩아이콘 hide
  
  state = {
    greeting: "New Moive"
  }

  componentDidMount(){
    setTimeout(()=>{
      this.setState({
        greeting:"New Moive is comming"
      })
    },5000)
  }

  render() {
    return <div className="App">
        {this.state.greeting}
        {movies.map((movie,index) => {
          return <Movie title={movie.title} poster={movie.poster} key={index}/>;
        })}
      </div>;
  }
}

export default App;
