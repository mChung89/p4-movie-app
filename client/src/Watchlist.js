import React from 'react'
import {useEffect, useState} from 'react'
import WatchListCard from './WatchlistCard'
import './styles/card.css'

function Watchlist({user}) {
    const [watchlist, setWatchlist] = useState([])
    const [errors, setErrors] = useState(null)
    const [currentReviews, setCurrentReview] = useState([])

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
    },[currentReviews])

    let watchListMovies
    if (!errors) {
      watchListMovies = watchlist.map(list => <WatchListCard setCurrentReview={setCurrentReview} watchlist={watchlist} key={list.id} id={list.id} movie={list.movie} signInUser={user} setWatchlist={setWatchlist} review={list.review} myRating={list.rating}/>)}
    
    if (errors) {
    console.log("Errors are:", errors)
      watchListMovies = errors.error
    }
    
  return (
    <div className="cards">
        {watchListMovies}
    </div>
  )
}

export default Watchlist