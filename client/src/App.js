import NavBar from "./NavBar";
import { Routes, Route } from "react-router-dom";
import MoviePage from "./MoviePage";
import MovieDetail from "./MovieDetail";
import Login from './Login'
import Home from './Home'

function App() {
  return (
    <div className="grid-wrapper" style={{width: "100%"}}>
      <NavBar />
      <div className="content-wrap">
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route exact path="movies" element={<MoviePage />}/>
        <Route exact path="/movies/:movieId" element={<MovieDetail />}></Route>
        <Route path="*" element={<h1>404 No page found!</h1>} />
        <Route path='login' element={<Login />}/>
      </Routes>
      </div>
    </div>
  );
}

export default App;
