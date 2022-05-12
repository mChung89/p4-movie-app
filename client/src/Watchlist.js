import React from 'react'
import {useEffect, useState} from 'react'
import WatchlistCard from './WatchlistCard'

function Watchlist({user}) {
    const [watchlist, setWatchlist] = useState([])

    useEffect(()=> {
        fetch('/reviews')
        .then(res => res.json())
        .then(data => setWatchlist(data))
    },[])
    console.log(watchlist)

const watchlistmovies = watchlist.map(list => {
  if(list){
    return <WatchlistCard watchlist={watchlist} key={list.id} id={list.id} movie={list.movie} signInUser={user} setWatchlist={setWatchlist} review={list.review}/>
  } else {
    return null
  }    
        })
    
  return (
    <div style={{backgroundColor: 'white'}}>
        {watchlistmovies}
    </div>
  )
}

export default Watchlist