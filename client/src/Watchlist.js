import React from 'react'
import {useEffect, useState} from 'react'
import WatchlistCard from './WatchlistCard'

function Watchlist() {
    const [watchlist, setWatchlist] = useState([])
    useEffect(()=> {
        fetch('/movies')
        .then(res => res.json())
        .then(data => setWatchlist(data))
    },[])
console.log(watchlist)
    
  return (
    <div>
        {watchlist.map(list => {
          return <WatchlistCard key={list.id} movie={list}/>
        })}
    </div>
  )
}

export default Watchlist