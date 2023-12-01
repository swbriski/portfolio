import './App.css'
import React from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
// Components
import Main from './components/Main'
import About from './components/About'
import Projects from './components/Projects'
import Resources from './components/Resources'
import EmailMe from './components/EmailMe'
// HeadNav Icons
import MainIcon from './assets/main.png'
import AboutIcon from './assets/about.png'
import ProjectsIcon from './assets/projects.png'
import ResourcesIcon from './assets/resources.png'
// FootNav Icons
import GithubIcon from './assets/github.png'
import LinkedinIcon from './assets/linkedin.png'
import EmailIcon from './assets/email.png'
import ResumeIcon from './assets/resume.png'
// PDF
import ResumePDF from './assets/myresume.pdf'

const App = () => {

  return (
    <>
    <Router>
      <div className="body">
        <header>
          <div className="headnav">
            <Link to="/"><img className="icon" src={MainIcon} title="Home" /></Link>
            <Link to="/about"><img className="icon" src={AboutIcon} title="About Me" /></Link>
            <Link to="/projects"><img className="icon" src={ProjectsIcon} title="Projects" /></Link>
            <Link to="/resources"><img className="icon" src={ResourcesIcon} title="Resources" /></Link>
          </div>
        </header>
        <div className="main">
          <Routes>
            <Route exact path="/" element={<Main />}></Route>
            <Route exact path="about" element={<About />}></Route>
            <Route exact path="projects" element={<Projects />}></Route>
            <Route exact path="resources" element={<Resources />}></Route>
            <Route exact path="emailme" element={<EmailMe />}></Route>
          </Routes>
        </div>
        <footer>
          <a href="https://github.com/swbriski" target="_blank"><img className="icon" src={GithubIcon} title="My GitHub" /></a>
          <a href="https://www.linkedin.com/in/swbriski/" target="_blank"><img className="icon" src={LinkedinIcon} title="My LinkedIn" /></a>
          <Link to="/emailme"><img className="icon" src={EmailIcon} title="Email Me" /></Link>
          <a href={ResumePDF} target="_blank"><img className="icon" src={ResumeIcon} title="My Résumé" /></a>
        </footer>
      </div>
    </Router>
    </>
  )
}

export default App