import React from 'react'
import { useEffect, useState } from 'react'
import "./styles/watchlistcard.css";
import Watchlist from './Watchlist';

function WatchlistCard({movie, signInUser, setWatchlist}) {
    const [addReview, setReview] = useState('')
    const [currentReviews, setCurrentReview] = useState([])
    console.log(signInUser)

    useEffect(()=> {
        fetch("http://127.0.0.1:3000/reviews")
        .then(res => res.json())
        .then(data => setCurrentReview(data))
    },[movie])

    const allreviews = movie?.reviews?.map(review => {
        if(review.review){
             return <p>{`${review.userinfo.username}: ${review.review}`}</p>
        }
    })

    console.log(currentReviews)
    console.log(movie)

    const usersReviews = currentReviews.map(rev => {
        if(rev.review && rev.movie.title === movie.title){
            return <p>{`${rev.userinfo.username}: ${rev.review}`}</p>
        }
    })

    function handlereviews(e){
        e.preventDefault()
        if(!addReview){
            return null
        } else{
            fetch("http://127.0.0.1:3000/reviews", {
                method: "POST",
                headers: {
                  "Content-Type": "application/json",
                },
                body: JSON.stringify({
                  user_id: signInUser.id,
                  movie_id: movie.id,
                  rating: null,
                  review: addReview,
                }),
              })
              .then(res => res.json())
              .then(() => {
                fetch('/movies')
                .then(res => res.json())
                .then(data => setWatchlist(data))
              })
        }
    }

  return (
    <div className="watchlist">
        <h3>{movie.title}</h3>
        <img src={`https://image.tmdb.org/t/p/w500/${movie.image}`} alt='movie'/>
        {usersReviews}
        
        <form onSubmit={handlereviews}>
            <label>Add a review</label><br/>
            <input type='text' onChange={(e)=> setReview(e.target.value)} placeholder='Please write a review...' value={addReview}/><br/>
            <button type='submit'>Submit Review</button>
       </form>
    </div>
  )
}

export default WatchlistCard