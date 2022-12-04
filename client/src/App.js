import React from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './pages/Home';
import CreateSite from './pages/CreateSite';
import NavSearch from './components/Nav';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <NavSearch />
        <div className="content">
          <Routes>
            <Route exact path='/' element={<Home />}></Route>
            <Route exact path='/CreateSite' element={<CreateSite />}></Route>
          </Routes>
        </div>
      </div>

    </Router>
  )
}

export default App