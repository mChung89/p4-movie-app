import { useNavigate } from 'react-router-dom'
import './styles/card.css'

function MovieCard ({ movie }) {
    const { title, poster_path, vote_average } = movie
    const navigate = useNavigate()

    function handleClick () {
        navigate(`/movies/${movie.id}`)
    }

    return (
        <div className='card'>
            <h1 className="card-text">{title}</h1>
            <img onClick={handleClick} src={`https://image.tmdb.org/t/p/w500/${poster_path}`} alt={title}></img>
            <h2>Rating: {vote_average}/10</h2>
        </div>
    )
}

export default MovieCard