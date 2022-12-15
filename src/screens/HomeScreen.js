import axios from "axios";
import React, { useEffect, useState } from "react";
import MovieCard from "../components/MovieCard.js";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function HomeScreen() {
  const REACT_APP_API_KEY = process.env.REACT_APP_API_KEY;
  const [movies, setMovies] = useState([]);
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

  const [searchtext, setSearchText] = useState();
  const [searchedmovies, setSearchedMovies] = useState(null);
  const submitHandler = (e) => {
    e.preventDefault();
    setSearchText(e.target.value);
  };

  const searchMovie = async (e) => {
    e.preventDefault();
    console.log("Searching");
    try {
      const url = `https://api.themoviedb.org/3/search/movie?api_key=${REACT_APP_API_KEY}&query=${searchtext}`;
      const res = await fetch(url);
      const data = await res.json();
      console.log(data);
      setMovies(data.results);
    } catch (e) {
      console.log(e);
    }
  };
  return (
    <div className="home">
      <div className="navBar">
        <div className="title">
          <h3>Movie Page</h3>
        </div>
        <div className="search_box">
          <form onSubmit={searchMovie}>
            <input value={searchtext} type="text" onChange={submitHandler} />
            <button type="submit">Search</button>
          </form>
        </div>
      </div>
      <div className="home_Screen">
        <Row>
          {movies.map((movie) => (
            <Col key={movie.id} sm={12} md={6} lg={4} xl={3}>
              <MovieCard movie={movie} />
            </Col>
          ))}
        </Row>
      </div>
    </div>
  );
}

export default HomeScreen;
