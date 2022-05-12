import React from 'react'
import {useEffect, useState} from 'react'
import WatchlistCard from './WatchlistCard'
import "./styles/watchlistcard.css";

function Watchlist({user}) {
    const [watchlist, setWatchlist] = useState([])
    const [error, seterror] = useState(null)
    useEffect(()=> {
        fetch('/movies')
        .then(res => res.json())
        .then(data => setWatchlist(data))
    },[])
console.log(watchlist)

const watchlistmovies = watchlist.map(list => {
  if(list){
    return <WatchlistCard key={list.id} movie={list} signInUser={user} setWatchlist={setWatchlist}/>
  } else {
    return error
  }    
        })
    
  return (
    <div className="watchlist">
        {watchlistmovies}
    </div>
  )
}

export default Watchlist