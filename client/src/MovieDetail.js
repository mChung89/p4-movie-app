import { useEffect } from 'react'
function MovieDetail(){

    useEffect(() => {
        fetch(`https://api.themoviedb.org/3/movie/675353?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`)
    },[])

    return (
        <h1>On the movie detail page</h1>
    )
}

export default MovieDetail