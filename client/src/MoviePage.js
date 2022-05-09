import MovieCard from "./MovieCard";
import "./styles/card.css";
import { useEffect, useState } from "react";

function MoviePage() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetch(
      "https://api.themoviedb.org/3/movie/now_playing?api_key=807ad8ee75e52c8f78d64e223447c1b2"
    )
      .then((res) => res.json())
      .then((data) => setMovies(data));
  }, []);

//   console.log(renderedMovies);

  return (
    <div className="cards" id="card-container">
      {movies.results.map((movie) => <MovieCard movie={movie} />)}
    </div>
  );
}

export default MoviePage;
