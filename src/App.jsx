import React from 'react'
import Header from './components/Header'
import About from './components/About'
import Project from './components/Project'
import Contact from './components/Contact'
import ProjectsInProgress from './components/ProjectsInProgress'
import Footer from './components/Footer'

const App = () => {
  return (
    <div>
      <Header />
      <About />
      <Project />
      <ProjectsInProgress />
      <Contact />
      <Footer />
      </div>
  )
}

export default App
