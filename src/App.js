import {BrowserRouter, Routes, Route} from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './Components/Home';
import Navbar1 from './Components/Navbar';
import Tourisim from './Components/Tourisim';
import Tech from './Components/Tech';
import Food from './Components/Food';
import Movie from './Components/Movie';

function App() {
  return (
    <div className="App">
    <BrowserRouter>
    <Navbar1/>
      <Routes>
        <Route path = "/Home" element = {<Home/>}></Route>
        <Route path = "/Tourisim" element = {<Tourisim/>}></Route>
        <Route path = "/Tech" element = {<Tech/>}></Route>
        <Route path = "/Movie" element = {<Movie/>}></Route>
        <Route path = "/Food" element = {<Food/>}></Route>
      </Routes>
    </BrowserRouter>
    
    </div>
  );
}

export default App;
