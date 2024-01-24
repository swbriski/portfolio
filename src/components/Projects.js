import React from 'react'
import { Card, CardBody, CardTitle, CardSubtitle, Button } from "reactstrap"
// Images
import PlaceholderImage from '../assets/placeholderimage.png'
import CatAndMouse from '../assets/catandmouse.png'
import LaughHost from '../assets/LaughHost.png'

const Projects = () => {

  const portfolio = [
    { name: "Laugh Host:3001", description: "A full-stack application using React and Ruby on Rails. Displays full CRUD functionality for recipes, an external API that generates jokes, and a Pig Latin translator.", imageSrc: LaughHost, website: "https://laughhost3001.onrender.com/", code: "https://github.com/The-Laughing-Llamas/laugh-host3001-frontend"},
    { name: "Cat and Mouse", description: "A themed Treasure Hunt game made using React.", imageSrc: CatAndMouse, website: "https://swbriski-cat-and-mouse.onrender.com/", code: "https://github.com/swbriski/catandmousetreasurehunt"},
    // { name: "Project 3", description: "lorem ipsum", imageSrc: PlaceholderImage},
    // { name: "Project 4", description: "lorem ipsum", imageSrc: PlaceholderImage},
    // { name: "Project 5", description: "lorem ipsum", imageSrc: PlaceholderImage},
    // { name: "Project 6", description: "lorem ipsum", imageSrc: PlaceholderImage},
    // { name: "Project 7", description: "lorem ipsum", imageSrc: PlaceholderImage},
    // { name: "Project 8", description: "lorem ipsum", imageSrc: PlaceholderImage},
    // { name: "Project 9", description: "lorem ipsum", imageSrc: PlaceholderImage}
  ]

  return (
    <>
    <div>
      <h1>My Projects</h1>
      <br />
      <br />
      <div className="projectGrid">
        {portfolio.map(project => (
          <div>
            <Card className="card"
              style={{
                width: "25rem",
                height: "30rem",
              }}
            >
              <CardBody className='cardbody'>
                <CardTitle className='cardTitle'>{project.name}</CardTitle>
                <br />
                <img alt={`image of the project ${project.name}`} src={project.imageSrc} className="cardImage" />
                <br />
                <br />
                <a href={project.website} target="_blank"><Button>Website</Button></a>
                <a href={project.code} target="_blank"><Button>Code</Button></a>
                <p className="h5" tag="h6">
                  {project.description}
                </p>
              </CardBody>
            </Card>
          </div>
        ))}
      </div>
    </div>
    </>
  )
}

export default Projects