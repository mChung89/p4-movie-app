import React from 'react'
import { useState } from 'react'
import "./styles/watchlistcard.css";

function WatchlistCard({myRating, movie, setCurrentReview, setWatchlist, review, watchlist, id}) {
    const [addReview, setReview] = useState('')
    const [flipcard, setFlipCard] = useState(false)
    const [rating, setRating] = useState(1)
    
    function handlereviews(e){
        e.preventDefault()
            fetch(`/reviews/${id}`, {
                method: "PATCH",
                headers: {
                  "Content-Type": "application/json",
                },
                body: JSON.stringify({
                  rating: rating,
                  review: addReview,
                }),
              })
              .then(res => res.json())
              .then(data => {
                setWatchlist(watchlist.map(movie => movie.review === data.review ? data : movie))
                setCurrentReview(data)})
        
    }

    function handleChange(e) {
      setReview(e.target.value)
    }

    function handleClick () {
      setFlipCard(prev => !prev)
    }

    let ratingOption = []
    for (let i = 1; i < 11; i++) {
      ratingOption.push(<option value={i}>{i}</option>)
    }
  
  return ( 
      
          <div className={`${flipcard ? 'flip-card-click' : null} flip-card card`}>
              <div className="flip-card-inner">
                  <div className="flip-card-front" >
                      <img onClick={handleClick} src={`https://image.tmdb.org/t/p/w500/${movie.image}`} alt="Avatar" onClick={()=> setFlipCard(true)} />
                  </div>
                  <div className="flip-card-back" >
                      <h1>{movie.title}</h1>
                      <p>{`Ratings: ${movie.rating}`}</p>
                      <p>Your Rating: {myRating}</p>

                      <p>{review}</p>
                      <form onSubmit={handlereviews}>
                          <label>Add a review</label><br />
                          <input type='text' onChange={handleChange} placeholder='Please write a review...' value={addReview} /><br />
                          <label>Rating: </label>
                          <select onChange={(e) => setRating(e.target.value)}>
                            {ratingOption}
                          </select>
                          <br></br>
                          <button className="watchlist-button "type='submit'>Submit Review</button>
                      </form>
                      <button className="watchlist-button" onClick={handleClick}>Flip back</button>

                  </div>
              </div>
          </div>
      
  )
}
export default WatchlistCard