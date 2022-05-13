import NavBar from "./NavBar";
import { Routes, Route } from "react-router-dom";
import MoviePage from "./MoviePage";
import MovieDetail from "./MovieDetail";
import About from './About'

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

  return (

    <>
    
    <div className="grid-wrapper" style={{width: "100%"}}>
      <NavBar user={user} setUser={setUser}/>
      <div className="content-wrap" style={{'paddingTop':'60px',"zIndex": 1}}>
      <Routes>
        <Route path="/" element={<Home setUser={setUser} user={user}/>} />
        <Route exact path="movies" element={<MoviePage />}/>
        <Route exact path="/movies/:movieId" element={<MovieDetail user={user}/>}></Route>
        {user ? <Route path='/watchlist' element={<Watchlist user={user}/>}/> : null}
        <Route path="*" element={<h1 style={{color:'white'}}>404 No page found!</h1>} />
        <Route path='login' element={<Login setUser={setUser}/>}/>
        <Route path='about' element={<About />} />
      </Routes>
      </div>
     
      
      
      
      
    </div>
    </>
  );
}

export default App;
