import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./styles/moviedetail.css";
import MiniMovieCard from "./MiniMovieCard";
import TrailerVideo from "./TrailerVideo";

function MovieDetail({ user }) {
  const [movie, setMovie] = useState({});
  const [trailer, setTrailer] = useState("");

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
      .then((data) => setMovie(data));
  }, [params.movieId]);

  useEffect(() => {
    const url = `https://imdb-api.com/API/YouTubeTrailer/${process.env.REACT_APP_IMDB_KEY}/${movie.imdb_id}`;
    fetch(url, { method: "GET", redirect: "follow" })
      .then((res) => res.json())
      .then((data) => setTrailer(data.videoId));
  }, [movie]);

  const similarMovies = movie?.similar?.results?.map((movie) => (
    <MiniMovieCard key={movie.id} movie={movie} />
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
      .then((res) => res.json())
      .then((moviedata) => {
        fetch("http://127.0.0.1:3000/reviews", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            user_id: user.id,
            movie_id: moviedata.id,
            rating: null,
            review: "",
          }),
        })
          .then((res) => res.json())
          .then((data) => console.log(data));
      });
  }

  const genres = movie?.genres?.map((genre) => genre.name).join(" ");

  // // Horizontal Scrolling
  // const elRef = useRef();
  // function useHorizontalScroll() {
  //   useEffect(() => {
  //     const el = elRef.current;
  //     if (el) {
  //       const onWheel = e => {
  //         if (e.deltaY === 0) return;
  //         e.preventDefault();
  //         el.scrollTo({
  //           left: el.scrollLeft + e.deltaY,
  //           behavior: "smooth"
  //         });
  //       };
  //       el.addEventListener("wheel", onWheel);
  //       return () => el.removeEventListener("wheel", onWheel);
  //     }
  //   }, []);
  //   return elRef;
  // }
  // const scrollRef = useHorizontalScroll()

  const [modal, setModalOpen] = useState(false);

  return (
    <>
      <div className="trailer-modal">
        {modal ? (
          <TrailerVideo trailer={trailer} setModalOpen={setModalOpen} />
        ) : null}
      </div>
      <div className="detail-wrap">
        <div id="movie-page-left">
          <div id="detail-image-box">
            <img
              src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
              alt="img"
            ></img>
          </div>
        </div>
        <div id="movie-page-right">
          <div id="movie-details">
            <h1>{movie.title}</h1>
            <h4>{movie.overview}</h4>
            <p>Genres: {genres}</p>
          </div>
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
          <div id="movie-detail-buttons">
            <button onClick={addToList}>Add to Watchlist</button>
            <button onClick={() => setModalOpen(!modal)}>Trailer</button>
          </div>
          <div id="similar-movie-text">
            <h4>Similar movies:</h4>
          </div>
          <div id="similar-movies">{similarMovies}</div>
        </div>
      </div>
    </>
  );
}

export default MovieDetail;
