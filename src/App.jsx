import { useState } from 'react'
import Header from './components/Header'
import ProjectPage from './components/ProjectPage'
import Footer from './components/Footer'
import './App.css'

function App() {
  return (
    <div className='janus-app'>
      <Header />
      <ProjectPage /> 
      <Footer />
    </div>
  )
}

export default App
