import {BrowserRouter, Routes, Route} from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './Components/Home';
import Navbar1 from './Components/Navbar';
import Tourisim from './Components/Tourisim';
import Farming from './Components/Farming';
import Food from './Components/Food';
import Movie from './Components/Movie';
import Footer from './Components/Footer'
import Aboutus from './Components/Aboutus'
import 'animate.css';
import SignUp from './Components/SignUp';

function App() {
  return (
    <div className="App">
    <BrowserRouter>
    <Navbar1/>
    
      <Routes>
        <Route path = "/" element = {<Home/>}></Route>
        <Route path = "/Home" element = {<Home/>}></Route>
        <Route path = "/Tourisim" element = {<Tourisim/>}></Route>
        <Route path = "/Farming" element = {<Farming/>}></Route>
        <Route path = "/Movie" element = {<Movie/>}></Route>
        <Route path = "/Food" element = {<Food/>}></Route>
        <Route path = "/Aboutus" element = {<Aboutus/>}></Route>
        <Route path = "/Signup" element = {<SignUp/>}></Route>
      </Routes>
      <Footer/>
    </BrowserRouter>
    
    </div>
  );
}

export default App;
