import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
function MovieDetail() {
  const [movie, setmovie] = useState({})
 
  let params = useParams();
  console.log(params);

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/${params.movieId}?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`
    )
      .then((res) => res.json())
      .then(data => setmovie(data));
  }, [params.movieId]);

  console.log(movie)


  function addToList(){
    fetch('http://127.0.0.1:3000/movies',{
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({title: movie.title, release_date: movie.release_date, description: movie.overview, rating: movie.vote_average, image: movie.poster_path})
    })
    .then(res => res.json())
    .then(data => console.log(data))
    .catch((error) => console.log(error))

  }
  

  

  return <div>
          <h1>{movie.title}</h1>
          <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt="img"></img>
          <h4>{movie.overview}</h4>
          <p>Runtime: {movie.runtime}</p>
          <p>Ratings: {movie.vote_average}/10</p>
          <p>Total ratings: {movie.vote_count}</p>
          <p>Release Date: {movie.release_date}</p>
          <button onClick={addToList}>Add to Watchlist</button><br/>
          {movie?.genres?.map(genre => {
            return <p style={{display: "inline-block", padding: "10px"}} key = {genre.id}>{genre.name}</p>
          })}
        </div>;
}

export default MovieDetail;
