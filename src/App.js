import React from "react";
import axios from "axios";

//HOC
import DefaultHOC from "./HOC/DefaultHOC";
import MovieHOC from "./HOC/Movie.HOC";

// Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

//Pages
import HomePage from "./Pages/Home.Page";
import MoviePage from "./Pages/Movie.Page";
import Plays from "./Pages/Play.page";


axios.defaults.baseURL = "https://api.themoviedb.org/3";
axios.defaults.params = {};
axios.defaults.params['api_key'] = process.env.REACT_APP_API_KEY;


function App() {
  return (
    <>
      <DefaultHOC path="/" exact component={HomePage} />
      <MovieHOC  path="/movie/:id" exact component={MoviePage} />
      <DefaultHOC path="/plays" exact component={Plays} />
    </>
  );
}

export default App;
