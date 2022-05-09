import React from 'react'
import {useEffect, useState} from 'react'

function Watchlist() {
    const [watchlist, setWatchlist] = useState([])
    useEffect(()=> {
        fetch('http://127.0.0.1:3000/movies')
        .then(res => res.json())
        .then(data => setWatchlist(data))
    },[])

  return (
    <div>
        {watchlist.map(list => {
            return <p key={list.id}>{list.title}</p>
        })}
    </div>
  )
}

export default Watchlist