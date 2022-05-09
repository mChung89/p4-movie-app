import NavBar from './NavBar'
import { Routes, Route, useParams } from "react-router-dom";
import MoviePage from './MoviePage'


function App() {

  
  return (
    <div>
        <NavBar/>
        <Routes>
          <Route path='/' element={<h1>Home Page</h1>} />
          <Route path='movies' element={<MoviePage/>}>
            <Route path=':movieId' element={<h1>Detailed Movie Page</h1>}></Route>
          </Route>
          <Route path ="*" element={<h1>404 No page found!</h1>} />
      </Routes>
    </div>
  );
}

export default App;
