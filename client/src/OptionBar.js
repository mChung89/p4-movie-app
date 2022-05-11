import { useState } from 'react'
import "./styles/optionbar.css"
function OptionBar ({setMovies}) {
    const [searchQuery, setSearchQuery] = useState("")

    function handleSearchSubmit () {
        fetch(`https://api.themoviedb.org/3/search/movie?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&page=1&query=${searchQuery}`)
        .then(res => res.json())
        .then(setMovies)
    }
    return (
        <div id="option-bar">
            <h4>Search for Movies</h4>
            <input placeholder="Search for Movie by Title" value={searchQuery} onChange={(e) => {setSearchQuery(e.target.value)}}></input>
            <button onClick={handleSearchSubmit}>Search!</button>
        </div>
    )

}

export default OptionBar