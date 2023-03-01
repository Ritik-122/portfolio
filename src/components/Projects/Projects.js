import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";

import weatherProj from '../../Assets/Projects/weatherProj.png'
import expense from '../../Assets/Projects/expense.png'

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
              description="Created a web application for tracking personal expenses using React.js. Used React hooks like useState and useEffect to manage state and perform side effects respectively. Incorporated error handling using try/catch blocks and displaying error messages to the user"
              ghLink="https://github.com/Ritik-122/my-app"
              demoLink="https://my-app-six-dusky.vercel.app/"
            />
          </Col>

          {/* <Col md={4} className="project-card">
            <ProjectCard
              imgPath={news}
              isBlog={false}
              title="News-Portal"
              description="A daily journal news website. It is built on React framework and EJS and NEWSAPI."
              ghLink="https://github.com/JainAnmol744/News-App"
              demoLink="news-app-tau-ruby.vercel.app"              
            />
          </Col> */}

          
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
