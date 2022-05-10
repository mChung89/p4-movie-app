import NavBar from "./NavBar";
import { Routes, Route } from "react-router-dom";
import MoviePage from "./MoviePage";
import MovieDetail from "./MovieDetail";

import Watchlist from "./Watchlist";

import { useEffect, useState } from 'react'


import Login from './Login'
import Home from './Home'


function App() {
  const [user, setUser] = useState(null)
    useEffect(() => {
        fetch("/me")
        .then(res => res.json())
        .then(data => {
          if(data.error){
            setUser(null)        
          }
          else{
            setUser(data)
          }
        })
    },[])

    console.log(user)
  return (

    <>
    
    <div className="grid-wrapper" style={{width: "100%"}}>

     
      

      <NavBar user={user} setUser={setUser}/>

      <div className="content-wrap">
      <Routes>
        <Route path="/" element={<Home setUser={setUser} user={user}/>} />
        <Route exact path="movies" element={<MoviePage />}/>
        <Route exact path="/movies/:movieId" element={<MovieDetail user={user}/>}></Route>
        <Route path='/watchlist' element={<Watchlist />}/>
        <Route path="*" element={<h1>404 No page found!</h1>} />
        <Route path='login' element={<Login setUser={setUser}/>}/>
      </Routes>
      </div>
     
      
      
      
      
    </div>
    </>
  );
}

export default App;
