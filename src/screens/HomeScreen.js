import axios from "axios";
import React, { useEffect, useState } from "react";
import MovieBox from '../components/MovieBox'

function HomeScreen() {
  const REACT_APP_API_KEY = process.env.REACT_APP_API_KEY;
  const [movies, setMovies] = useState(null);
  useEffect(() => {
    async function fetchdata() {
      const request = await axios.get(
        `https://api.themoviedb.org/3/trending/all/day?api_key=${REACT_APP_API_KEY}`
      );
      setMovies(request.data.results);
      return request;
    }
    fetchdata();
  }, []);
  console.log(movies);

  return(
  <div className="movie_list">
    {movies && <MovieBox movies={movies}/>}
  </div>);
}

export default HomeScreen;
