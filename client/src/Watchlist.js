import React from 'react'
import {useEffect, useState} from 'react'
import WatchListCard from './WatchlistCard'

function Watchlist({user}) {
    const [watchlist, setWatchlist] = useState([])
    const [errors, setErrors] = useState(null)

    function processError (error) {
      setErrors(error)
    }
    useEffect(()=> {
        fetch('/reviews')
        .then(res => {
          if (res.ok) {
            res.json().then(data => setWatchlist(data))
            } else {
              res.json().then(data => processError(data))
            }
        })
    },[watchlist])

    let watchListMovies
    if (!errors) {
      watchListMovies = watchlist.map(list => <WatchListCard watchlist={watchlist} key={list.id} id={list.id} movie={list.movie} signInUser={user} setWatchlist={setWatchlist} review={list.review}/>)}
    
    if (errors) {
    console.log("Errors are:", errors)
      watchListMovies = errors.error
    }
    
  return (
    <div style={{backgroundColor: 'white'}}>
        {watchListMovies}
    </div>
  )
}

export default Watchlist