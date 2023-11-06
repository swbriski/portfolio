import React from 'react'
import PlaceholderImage from '../assets/placeholderimage.png'

const Projects = () => {

  const portfolio = [
    { name: "Project 1", description: "lorem ipsum", imageSrc: PlaceholderImage},
    { name: "Project 2", description: "lorem ipsum", imageSrc: PlaceholderImage},
    { name: "Project 3", description: "lorem ipsum", imageSrc: PlaceholderImage},
    { name: "Project 4", description: "lorem ipsum", imageSrc: PlaceholderImage},
    { name: "Project 5", description: "lorem ipsum", imageSrc: PlaceholderImage},
    { name: "Project 6", description: "lorem ipsum", imageSrc: PlaceholderImage},
    { name: "Project 7", description: "lorem ipsum", imageSrc: PlaceholderImage},
    { name: "Project 8", description: "lorem ipsum", imageSrc: PlaceholderImage},
    { name: "Project 9", description: "lorem ipsum", imageSrc: PlaceholderImage}
  ]

  return (
    <>
    <div>
      <h1>My Projects</h1>
      <div className="projectGrid">
        {portfolio.map(project => (
          <div>
            <h3>{project.name}</h3>
            <img src={project.imageSrc}/>
            <p>{project.description}</p>
          </div>
        ))}
      </div>
    </div>
    </>
  )
}

export default Projects