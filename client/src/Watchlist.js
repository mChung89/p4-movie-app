import React from 'react'
import {useEffect, useState} from 'react'
import WatchlistCard from './WatchlistCard'

function Watchlist({user}) {
    const [watchlist, setWatchlist] = useState([])
    useEffect(()=> {
        fetch('/movies')
        .then(res => res.json())
        .then(data => setWatchlist(data))
    },[user])

const watchlistmovies = watchlist.map(list => {
  if(list){
    return <WatchlistCard key={list.id} movie={list} signInUser={user} setWatchlist={setWatchlist}/>
  } else {
    return null
  }    
        })
    
  return (
    <div>
        {watchlistmovies}
    </div>
  )
}

export default Watchlist