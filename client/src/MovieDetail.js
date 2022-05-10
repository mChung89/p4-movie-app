import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./styles/moviedetail.css";
import MiniMovieCard from "./MiniMovieCard";

function MovieDetail({user}) {
  const [movie, setmovie] = useState({})
 





  let params = useParams();
 
  console.log(user)

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/${params.movieId}?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&append_to_response=similar`
    )
      .then((res) => res.json())
      .then((data) => setMovie(data));
  }, [params.movieId]);

  console.log(movie);

  const similarMovies = movie?.similar?.results?.map((movie) => (
    <MiniMovieCard movie={movie} />
  ));

  function addToList() {
    fetch("/movies", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title: movie.title,
        release_date: movie.release_date,
        description: movie.overview,
        rating: movie.vote_average,
        image: movie.poster_path,
      }),
    })

    .then(res => res.json())
    .then((moviedata)=> {
      fetch('http://127.0.0.1:3000/reviews',{
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({user_id: user.id, movie_id: moviedata.id, rating: null, review: "" })
    })
    .then(res => res.json())
    .then(data => console.log(data))
    })


  }

  const genres = movie?.genres?.map(genre => genre.name).join(' ')


  return (
    <div className="detail-wrap">
      <div id="detail-image-box">
        <img
          src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
          alt="img"
        ></img>
      </div>
      <div id="movie-page-right">
        <div id="movie-details">
          <h1>{movie.title}</h1>
          <h4>{movie.overview}</h4>
          <div id='movie-stats'>
          <div id="movie-details-left">
            <p>Runtime: {movie.runtime} minutes</p>
            <p>Ratings: {movie.vote_average}/10</p>
            <p>Genres: {genres}</p>
          </div>
          <div id="movie-details-right">
            <p>Total ratings: {movie.vote_count}</p>
            <p>Release Date: {movie.release_date}</p>
            <button onClick={addToList}>Add to Watchlist</button>
          </div>
          </div>
          <div id='similar-movie-text'>
            <h4>Similar movies</h4>
          </div>
          <div id="similar-movies">
            {similarMovies}
          </div>
        </div>
      </div>
    </div>
  );
}

export default MovieDetail;
