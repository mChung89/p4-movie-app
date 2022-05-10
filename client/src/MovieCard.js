import { useNavigate } from 'react-router-dom'
import './styles/card.css'

function MovieCard ({ movie }) {
    const { title, poster_path, release_date } = movie
    const navigate = useNavigate()

    function handleClick () {
        navigate(`/movies/${movie.id}`)
    }
    console.log(movie)

    return (
        <div className='card'>
            <h1 className="card-text">{title}</h1>
            <img onClick={handleClick} src={`https://image.tmdb.org/t/p/w500/${poster_path}`} alt={title}></img>
            <h2>{release_date}</h2>
        </div>
    )
}

export default MovieCard