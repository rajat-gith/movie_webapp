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
  console.log(movies);

  return (
    <div className="home_Screen">
      <Row>
        {movies.map((movie) => (
          <Col key={movie.id} sm={12} md={6} lg={4} xl={3}>
            <MovieCard movie={movie} />
          </Col>
        ))}
      </Row>
    </div>
  );
}

export default HomeScreen;
