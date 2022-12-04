import React from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './pages/Home';
import NavSearch from './components/Nav';

function App() {
  return (
     <div>
      <NavSearch />
       <Home />
     </div>
)}

export default App