import { useState } from 'react'
const optionStyle = {
    'background-color': 'white',
    display: 'flex',
    'flex-direction': 'row',
    'margin-top': '20px',
    position: 'sticky',
    top: "60px",
    'z-index': 9,
    'font-family': 'Bangers, cursive',
    padding: '2em'

}
function OptionBar ({setMovies}) {
    const [searchQuery, setSearchQuery] = useState("")

    function handleSearchSubmit () {
        fetch(`https://api.themoviedb.org/3/search/movie?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&page=1&query=${searchQuery}`)
        .then(res => res.json())
        .then(setMovies)
    }
    return (
        <div style={optionStyle}>
            <h1>Search for Movies</h1>
            <input value={searchQuery} onChange={(e) => {setSearchQuery(e.target.value)}}></input>
            <button onClick={handleSearchSubmit}>Search!</button>
            <select>
                <option>Genre</option>
            </select>
        </div>
    )

}

export default OptionBar