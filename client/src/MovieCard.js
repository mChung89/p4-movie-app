import { useNavigate } from 'react-router-dom'

function MovieCard ({ movie }) {
    const { title, poster_path, release_date } = movie
    const navigate = useNavigate()

    function handleClick () {
        navigate(`/movies/${movie.id}`)
    }


    return (
        <div className='card' onClick={handleClick}>
            <h1>{title}</h1>
            <img src={`https://image.tmdb.org/t/p/w500/${poster_path}`} alt="img"></img>
            <h2>{release_date}</h2>
        </div>
    )
}

export default MovieCard