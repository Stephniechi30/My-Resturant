import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Navbar from './Pages/Navbar';
import HomePage from './Pages/HomePage';
import Menu from './Pages/Menu';
import Footer from './Pages/Footer'
import About from './Pages/About'
import Details from './Pages/Details'

function App() {
  return (
    <>
  
    <Router>
      <Navbar/>
    <Routes>
      <Route path='/' element={<HomePage/>} />
      <Route path ='/about' element={<About/>} />
      <Route  path='/menu' element={<Menu/>} />
      <Route path="/details/:id" element={<Details/>} />
    </Routes>
    <Footer/>
    </Router>
    </>

  );
}

export default App;
