import React from 'react'
import { useEffect, useState } from 'react'
import "./styles/watchlistcard.css";
import Watchlist from './Watchlist';
import MovieCard from './MovieCard';

function WatchlistCard({movie, signInUser, setWatchlist}) {
    const [addReview, setReview] = useState('')
    const [currentReviews, setCurrentReview] = useState([])
    const [flipcard, setFlipCard] = useState(false)
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
            return <p>{`${rev.userinfo.username}: ${rev.review}`}  </p>
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

    
    

console.log(movie)
 
    


   
  return ( 
      
          <div className=" flip-card">
              <div className="flip-card-inner">
                  <div className="flip-card-front" >
                      <img src={`https://image.tmdb.org/t/p/w500/${movie.image}`} alt="Avatar" onClick={()=> setFlipCard(true)} />
                  </div>
                  <div className="flip-card-back" >
                      <h1>{movie.title}</h1>
                      <p>{`Ratings: ${movie.rating}`}</p>

                      <p>{usersReviews}</p>
                      <form onSubmit={handlereviews}>
                          <label>Add a review</label><br />
                          <input type='text' onChange={(e) => setReview(e.target.value)} placeholder='Please write a review...' value={addReview} /><br />
                          <button type='submit'>Submit Review</button>
                      </form>

                  </div>
              </div>
          </div>
      
  )
}
 {/* // <div className="watchlist">
    //     <h3>{movie.title}</h3>
    //     <img src={`https://image.tmdb.org/t/p/w500/${movie.image}`} alt='movie'/>
    //     <span>{`Rating: ${movie.rating}/10`}</span>
    //     {usersReviews}


        
    //     <form onSubmit={handlereviews}>
    //         <label>Add a review</label><br/>
    //         <input type='text' onChange={(e)=> setReview(e.target.value)} placeholder='Please write a review...' value={addReview}/><br/>
    //         <button type='submit'>Submit Review</button>
    //    </form>
    // </div> */}
export default WatchlistCard