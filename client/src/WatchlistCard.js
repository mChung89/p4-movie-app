import React from 'react'
import { useEffect, useState } from 'react'
import "./styles/watchlistcard.css";

function WatchlistCard({movie}) {

    

console.log(movie)

   
  return (
    <div className="watchlist">
        <h3>{movie.title}</h3>
        <img src={`https://image.tmdb.org/t/p/w500/${movie.image}`} alt='movie'/>
        {/* <p>{movie.reviews[0]}</p> */}
        
    </div>
  )
}

export default WatchlistCard