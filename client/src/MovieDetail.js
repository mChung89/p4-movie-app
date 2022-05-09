import { useEffect } from "react";
import { useParams } from "react-router-dom";
function MovieDetail() {
  let params = useParams();
  console.log(params);

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/${params.movieId}?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`
    )
      .then((res) => res.json())
      .then(console.log);
  }, [params.movieId]);

  return <h1>On the movie detail page</h1>;
}

export default MovieDetail;
