import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./styles/moviedetail.css";
import MiniMovieCard from "./MiniMovieCard";
import TrailerVideo from "./TrailerVideo";

function MovieDetail({ user }) {
  const [movie, setMovie] = useState({});
  const [reviews, setReviews] = useState([]);
  const [errors, setErrors] = useState(null);

  let params = useParams();
  
  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/${params.movieId}?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&append_to_response=similar`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: process.env.REACT_APP_MOVIE_TOKEN,
        },
      }
    )
      .then((res) => res.json())
      .then((data) => {
        setMovie(data);
        fetch(`/reviews/${data.imdb_id}`).then((res) =>
          res.ok
            ? res.json().then((data) => {
                setReviews(data);
                setErrors(null);
              })
            : res.json().then(setErrors)
        );
      });
  }, [params.movieId]);

  const similarMovies = movie?.similar?.results?.map((movie) => (
    <MiniMovieCard key={movie.id} movie={movie} />
  ));

  function addToList() {
    fetch("/reviews", {
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
        user_id: user.id,
        imdb: movie.imdb_id,
      }),
    })
      .then((res) => res.json())
      .then((moviedata) => {
        setSnackBar("show");
        closeSnack();
      });
  }

  function closeSnack() {
    setTimeout(() => setSnackBar(null), 2700);
  }

  const genres = movie?.genres?.map((genre) => genre.name).join(" ");

  const [modal, setModalOpen] = useState(false);
  const [snackBar, setSnackBar] = useState(null);
  const watchListButton = <button onClick={addToList}>Add to Watchlist</button>;

  let renderedReviews;
  if (!errors) {
    renderedReviews = reviews?.map((review) => (
      <p key={review.id}>
        <span>{review.user.username}</span> said: {review.review}
      </p>
    ));
  }
  return (
    <>
      <div className="trailer-modal">
        {modal ? (
          <TrailerVideo movie={movie} setModalOpen={setModalOpen} />
        ) : null}
      </div>
      <div id="snackbar" className={snackBar}>
        Added to Watchlist
      </div>
      <div className="detail-wrap">
        <div id="movie-page-left">
          <div id="detail-image-box">
            <img
              src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
              alt="img"
            ></img>
          </div>
          <div />
        </div>
        <div id="movie-page-right">
          <div id="movie-details">
            <h1>{movie.title}</h1>
            <h4>{movie.overview}</h4>
            <p>Genres: {genres}</p>
          </div>
          <div id="middle">
            <div id="middle-left">
              <div id="movie-stats">
                <div id="movie-details-left">
                  <p>Runtime: {movie.runtime} minutes</p>
                  <p>Ratings: {movie.vote_average}/10</p>
                </div>
                <div id="movie-details-right">
                  <p>Total ratings: {movie.vote_count}</p>
                  <p>Release Date: {movie.release_date}</p>
                </div>
              </div>
            </div>
            <div id="movie-review">
              <h3>User Reviews</h3>
              <div id="movie-reviews-list">{renderedReviews}</div>
            </div>
          </div>
          <div id="movie-detail-buttons">
            <button onClick={() => setModalOpen(!modal)}>Trailer</button>
            {user ? watchListButton : null}
          </div>
        </div>
      </div>
        <div id="similar-movie-box">
          <div id="similar-movie-text">
            <h4>Similar movies:</h4>
          </div>
          <div id="similar-movies">{similarMovies}</div>
        </div>
    </>
  );
}

export default MovieDetail;
