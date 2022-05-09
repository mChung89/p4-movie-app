import NavBar from "./NavBar";
import { Routes, Route } from "react-router-dom";
import MoviePage from "./MoviePage";
import MovieDetail from "./MovieDetail";

function App() {
  return (
    <div>
      <NavBar />
      <Routes>
        <Route path="/" element={<h1>Home Page</h1>} />
        <Route exact path="movies" element={<MoviePage />}/>
        <Route exact path="/movies/:movieId" element={<MovieDetail />}></Route>
        <Route path="*" element={<h1>404 No page found!</h1>} />
      </Routes>
    </div>
  );
}

export default App;
