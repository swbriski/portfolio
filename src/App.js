import './App.css'
import React from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
// Components
import Main from './components/Main'
import MyInfo from './components/MyInfo'
import Projects from './components/Projects'
import Resources from './components/Resources'
// HeadNav Icons
import HomeIcon from './assets/home-gold.png'
import MyInfoIcon from './assets/myInfo-gold.png'
import ProjectsIcon from './assets/projects-gold.png'
import ResourcesIcon from './assets/resources-gold.png'

const App = () => {

  return (
    <>
    <Router>
      <div className="body">
        <header>
          <div className="headnav">
            <Link to="/"><img className="icon" src={HomeIcon} title="Home" /></Link>
            <Link to="/myInfo"><img className="icon" src={MyInfoIcon} title="Contact Me" /></Link>
            <Link to="/projects"><img className="icon" src={ProjectsIcon} title="Projects" /></Link>
            <Link to="/resources"><img className="icon" src={ResourcesIcon} title="Resources" /></Link>
          </div>
        </header>
        <div className="main">
          <Routes>
            <Route exact path="/" element={<Main />}></Route>
            <Route exact path="myInfo" element={<MyInfo />}></Route>
            <Route exact path="projects" element={<Projects />}></Route>
            <Route exact path="resources" element={<Resources />}></Route>
          </Routes>
        </div>
      </div>
    </Router>
    </>
  )
}

export default App