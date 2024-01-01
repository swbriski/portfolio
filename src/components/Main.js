import React from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'

const Main = () => {
  return (
    <>
    <div>
      <h1>Hello, there!</h1>
      <h2>Welcome to my portfolio!</h2>

      <br />
      <br />

      <h3>I'm Sean.</h3>
      <h3>I'm a full-stack web developer.</h3>
      <h3>I mainly use React and Ruby on Rails.</h3>
      <h3>Check out my <Link to="/projects"><span className="navigationLink">projects</span></Link> to see what I've done.</h3>
      <h3>Click on <Link to="/myInfo"><span className="navigationLink">my info</span></Link> to learn more and find out how to reach me.</h3>
    </div>
    </>
  )
}

export default Main