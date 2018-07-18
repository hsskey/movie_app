import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Movie from './Movie';




class App extends Component {

  //Render : componentWillMount() -> render() ->componentDidMount()
    //Update : componentWillReceiveProps() -> shouldComponentUpdate() -> componentWillUpdate() ->render() -> componentDidUpdate()
    //Update 예시 : componentWillUpdate()시 로딩아이콘 , componentdidUpdate()시 로딩아이콘 hide
  
  state = {
    greeting: "New Moive",
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
      }
    ]
  }

  componentDidMount(){
    setTimeout(()=>{
      this.setState({
        //영화목록을 추가하고싶을때 아래와같이 추가
        movies: [
          ...this.state.movies,
          {
            "title":"captainMarvel",
            "poster":"https://i.redd.it/ac02e53cn5v01.jpg"
          },
        ]
        
      })
    },5000)
  }

  render() {
    return <div className="App">
        {this.state.greeting}
        {this.state.movies.map((movie,index) => {
          return <Movie title={movie.title} poster={movie.poster} key={index}/>;
        })}
      </div>;
  }
}

export default App;
