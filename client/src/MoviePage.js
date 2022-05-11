import "./styles/card.css";
import MovieCard from "./MovieCard";
import OptionBar from './OptionBar'
import { useEffect, useState } from "react";
import { Outlet } from 'react-router-dom'

function MoviePage() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/now_playing?api_key=${process.env.REACT_APP_API_KEY}`
    )
      .then((res) => res.json())
      .then((data) => setMovies(data))
      .catch(err => console.log(err));
  }, [])



//   console.log(renderedMovies);

  return (
    <>
    <OptionBar setMovies={setMovies}/>
    <div className="cards" id="card-container">
      {movies?.results?.map((movie) => <MovieCard key={movie.id} movie={movie} />)}
      <Outlet />
    </div>
    </>
  );
}

export default MoviePage;
