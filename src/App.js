import React, { Component } from 'react'
import './App.css';
import Navbar from './components/header/index'
import Home from './components/home/index'
import Aulas from './components/aulas/index'
import Sobre from './components/sobre/index'
import Duvida from './components/duvida/index'
import Video from './components/video/index'
import Contato from './components/contato/index'
import Footer from './components/footer/index'


function App() {
  return (
    <div>
      <div className="navigation">
        <Navbar />
      </div>

      <Home />

      <Aulas />

      <Sobre />

      <Duvida />

      <Video />

      <Contato />

      <Footer />

    </div>
  )
}

export default App;
