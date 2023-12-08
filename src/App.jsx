import { useState } from 'react'
import Header from './components/Header'
import Nav from './components/Nav'
import ProjectCard from './components/ProjectCard'
import Footer from './components/Footer'
import './App.css'

function App() {
  return (
    <div className='janus-app'>
      <Header />
      <Nav />
      <ProjectCard /> 
      <Footer />
    </div>
  )
}

export default App
