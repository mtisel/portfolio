import React, { Component } from "react";
import "./App.css";
import ReactDOM from "react-dom";
import Draggable from "react-draggable";
import styled from "styled-components";
// import canela from "./Canela-Regular.ttf";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      projects: [
        {
          id: 0,
          title: "project1",
          subtitle: "sub1",
          url: "xxx.com",
          image: "https://picsum.photos/100",
          posX: 300,
          posY: 100
        },
        {
          id: 1,
          title: "project2",
          subtitle: "sub2",
          url: "yyy.com",
          image: "https://picsum.photos/150",
          posX: 650,
          posY: 220
        },
        {
          id: 2,
          title: "project3",
          subtitle: "sub3",
          url: "zzz.com",
          image: "https://picsum.photos/150",
          posX: 175,
          posY: 80
        },
        {
          id: 3,
          title: "project4",
          subtitle: "sub4",
          url: "xyz.com",
          image: "https://picsum.photos/250",
          posX: 20,
          posY: 400
        },
        {
          id: 4,
          title: "project5",
          subtitle: "sub5",
          url: "zyx.com",
          image: "https://picsum.photos/400",
          posX: 300,
          posY: 100
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
          <div>
            <p> Maja </p>
          </div>
          <div>
            <p>Info</p>
          </div>
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
