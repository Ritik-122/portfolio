import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";

import weatherProj from '../../Assets/Projects/weatherProj.png'
import expense from '../../Assets/Projects/expense.png'
import imdb from '../../Assets/Projects/imdb.png'
function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={weatherProj}
              isBlog={false}
              title="Weather-App"
              description="Developed a weather app using ReactJS and a Weather API to fetch current weather data. Implemented responsive design to ensure optimal user experience across all devices. Utilized Axios to handle HTTP requests to the API endpoints. "
              ghLink="https://github.com/Ritik-122/weather-app-react-main"
              demoLink="https://my-app-2hl8.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={expense}
              isBlog={false}
              title="Expense Tracker"
              description="Created a web application for tracking personal expenses using React.js. Used React hooks like useState and useEffect to manage state and perform side effects respectively. Incorporated error handling using try/catch blocks and displaying error messages to the user."
              ghLink="https://github.com/Ritik-122/my-app"
              demoLink="https://my-app-six-dusky.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={imdb}
              isBlog={false}
              title="IMDB Clone"
              description="Used React Router to create multiple routes for different views like the popular ,upcoming movie details.ntegrated with the TMDB API to fetch movie data like titles, posters, ratings, and reviews. Created reusable components like movie cards, header, footer, for a modular and scalable architecture."
              ghLink="https://github.com/Ritik-122/IMDB-clone-ReactApp-master"
              demoLink="https://imdb-clone-react-a1y5ftiwi-ritik-122.vercel.app/"              
            />
          </Col>

          
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
