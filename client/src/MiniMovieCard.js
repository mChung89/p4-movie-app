import './styles/minicard.css'
import { useNavigate } from 'react-router-dom'

function MiniMovieCard ({movie}){
  const navigate = useNavigate()
  function handleClick () {
      navigate(`/movies/${movie.id}`)
  }

  return (
      <div className='mini-card'>
        <img onClick={handleClick} src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt={movie.title}/>
      </div>
  )
}
export default MiniMovieCard