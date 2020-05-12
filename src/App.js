import React, { Component } from "react";
import "./App.css";
import ReactDOM from "react-dom";
import Draggable from "react-draggable";
import styled from "styled-components";
import Memberships from "./images/Memberships1.jpg";
// import canela from "./Canela-Regular.ttf";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      projects: [
        {
          id: 0,
          title: "Smoking Tiger",
          subtitle: "Event Design /",
          url: "xxx.com",
          image: "https://picsum.photos/100",
          posX: 300,
          posY: 100
        },
        {
          id: 1,
          title: "Day Light in Helsinki",
          subtitle: "Data Vizulization /",
          url: "yyy.com",
          image: "https://picsum.photos/150",
          posX: 650,
          posY: 220
        },
        {
          id: 2,
          title: "N26",
          subtitle: "Rebrand /",
          url: "zzz.com",
          image: "https://picsum.photos/150",
          posX: 175,
          posY: 80
        },
        {
          id: 3,
          title: "26 reasons",
          subtitle: "Campaign /",
          url: "xyz.com",
          image: "https://picsum.photos/250",
          posX: 20,
          posY: 400
        },
        {
          id: 4,
          title: "Memberships",
          subtitle: "Art Direction /",
          url: "zyx.com",
          image: "https://picsum.photos/400",
          posX: 800,
          posY: 200
        },
        {
          id: 5,
          title: "Remedification",
          subtitle: "New Media Art /",
          url: "zyx.com",
          image: "https://picsum.photos/400",
          posX: 600,
          posY: 70
        },
        {
          id: 6,
          title: "Pride Berlin '19",
          subtitle: "Campaign /",
          url: "zyx.com",
          image: "https://picsum.photos/400",
          posX: 360,
          posY: 400
        },
        {
          id: 7,
          title: "Balanced Day",
          subtitle: "Event Design",
          url: "zyx.com",
          image: Memberships,
          posX: 670,
          posY: 140
        }
      ],
      activeDrags: 0
    };
  }

  onStart = () => {
    this.setState({ activeDrags: ++this.state.activeDrags });
  };

  onStop = () => {
    this.setState({ activeDrags: --this.state.activeDrags });
  };

  //render starts here -----------------------
  render() {
    const dragHandlers = { onStart: this.onStart, onStop: this.onStop };

    const ProjectTile = styled.div`
      text-decoration: none;
      /* text-decoration: none !important; */
      border-bottom: none !important;
      margin: 5px;
      display: inline;
      /* font-family: "canela"; */
      /* color: black; */
    `;

    const ProjectImage = styled.div`
      visibility: hidden;
      align-items: center;
      justify-content: center;
      position: fixed;
      /* top:0;
  left:0; */
      /* display: inline; */
      background-color: rgba(0, 0, 0, 0);
      ${ProjectTile}:hover & {
        visibility: visible;
        /* font-family: "canela"; */
      }
    `;

    return (
      <React.Fragment>
        <div className="App-header">
          
            <span style={{marginRight: "80%"}} > Maja Tisel </span>
            <span>Info</span>
          
        </div>
        <div className="projectList">
          {this.state.projects.map(project => (
            <ProjectTile key={project.id} className="projectTitle">
              <a href={project.url} className="unstyledLink">
                {project.title}
              </a>
              <span> → </span>
              <a className="unstyledLinkSubtitle">{project.subtitle}</a>

              <ProjectImage>
                <img
                  src={project.image}
                  style={{
                    position: "fixed",
                    left: project.posX,
                    top: project.posY
                  }}
                ></img>
              </ProjectImage>
            </ProjectTile>
          ))}
        </div>
      </React.Fragment>
    );
  }
}

export default App;
