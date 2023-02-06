import React from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import HomePage from './pages/Homepage'
// import './styles.css'
import Myself from './pages/Myself';
import Gallery from './pages/Gallery';
import LoginPage from './pages/Login';
import ContactPage from './pages/Contact';
import Navbar from './components/Navbar'

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route exact path='/' element = {<HomePage/>}/>
        <Route exact path='/myself' element = {<Myself/>}/>
        <Route exact path="/gallery" element={<Gallery/>}/>
        <Route exact path="/contact" element={<ContactPage/>}/>
        <Route exact path="/login" element={<LoginPage/>}/>
      </Routes>
    </Router>
  );
}

export default App;
