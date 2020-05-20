import React, { Component } from "react";
import "./App.css";
import styled from "styled-components";
import Memberships1 from "./images/Memberships1.jpg";
import Memberships2 from "./images/Memberships2.jpg";
import Memberships3 from "./images/Memberships3.png";
import Daylight1 from "./images/Daylight1.jpg";
import Daylight2 from "./images/Daylight2.gif";
import Tiger1 from "./images/Tiger1.png";
import Rebrand1 from "./images/Rebrand1.gif";
import Reason1 from "./images/Reason1.jpg";
import Reason2 from "./images/Reason2.jpg";
import Reason3 from "./images/Reason3.gif";
import Mag1 from "./images/Mag1.jpg";
import Mag2 from "./images/Mag2.png";
import Mag3 from "./images/Mag3.jpg";
import Balanced1 from "./images/Balanced1.gif";
import Balanced2 from "./images/Balanced2.jpg";
import Balanced3 from "./images/Balanced3.jpg";
import Pride1 from "./images/Pride1.png";
import Pride2 from "./images/Pride2.png";
import Pride3 from "./images/Pride3.png";


class Home extends Component {
  constructor(props) {
    super(props);
    
    

    this.state = {
      projects: [
        
       
        {
          id:0,
          title: "Day Light in Helsinki",
          subtitle: "Data Vizulization ",
          url: "yyy.com",
          image: Daylight1,
          posX: "15%",
          posY: "55%",
          imageHeightDesktop: "45%",
          imageHeightMobile: "15%",
          image2: Daylight2,
          posX2: "70%",
          posY2: "40%",
          image2HeightDesktop: "45%",
          image2HeightMobile: "5%",
          
        },
        {
          id: 1,
          title: "/ N26",
          subtitle: "Rebrand ",
          url: "zzz.com",
          image: Rebrand1,
          posX: 175,
          posY: 80,
          imageHeightDesktop: "75%",
          imageHeightMobile: "5%",
        },
        {
        id: 2,
        title: "Smoking Tiger",
        subtitle: "Event Design ",
        url: "xxx.com",
        image: Tiger1,
        posX: "60%",
        posY: "20%",
        imageHeight: "70%"
        // image2: Tiger1,
        // posX2: 1000,
        // posY2: 400,
        // image2Height: "60px"
      },
        {
          id: 3,
          title: "/ 26 reasons",
          subtitle: "Campaign ",
          url: "xyz.com",
          image: Reason1,
          posX: "20%",
          posY: "50%",
          imageHeight: "35%",
          image2: Reason2,
          posX2: "60%",
          posY2: "50%",
          image2Height:"45%",
          image3: Reason3,
          posX3: "5%",
          posY3: "5%",
          image3Height: "35%"
        },
        {
          id: 4,
          title: "Memberships",
          subtitle: "Art Direction ",
          url: "zyx.com",
          image: Memberships1,
          posX: "50%",
          posY: "20%",
          imageHeight: "30%",
          image2: Memberships2,
          posX2: "70%",
          posY2: "45%",
          image2Height: "50%",
          image3: Memberships3,
          posX3: "20%",
          posY3: "70%",
          image3Height: "25%"
        },
        {
          id: 6,
          title: "/ Pride Berlin '19",
          subtitle: "Campaign",
          url: "zyx.com",
          image: "https://picsum.photos/400",
          image: Pride1,
          posX: "10%",
          posY: "40%",
          imageHeight: "35%",
          image2: Pride2,
          posX2: "70%",
          posY2: "60%",
          image2Height: "35%",
          image3: Pride3,
          posX3: "50%",
          posY3: "4%",
          image3Height: "35%"

        },
        {
          id: 7,
          title: "Balanced Day",
          subtitle: "Event Design ",
          url: "zyx.com",
          image: Balanced1,
          posX: "10%",
          posY: "5%",
          imageHeight: "40%",
          image2: Balanced2,
          posX2: "70%",
          posY2: "15%",
          image2Height: "30%",
          image3: Balanced3,
          posX3: "55%",
          posY3: "40%",
          image3Height: "55%"
        
        },
        {
          id: 5,
          title: "/ Remedification",
          subtitle: "New Media Art",
          url: "zyx.com",
          image: Mag1,
          posX: "5%",
          posY: "45%",
          imageHeight: "50%",
          image2: Mag2,
          posX2: "60%",
          posY2: "10%",
          image2Height: "35%",
          image3: Mag3,
          posX3: "70%",
          posY3: "65%",
          image3Height: "30%"
          
        }
        
      ]
      
    };
  }



  //render starts here -----------------------
  render() {

    const isMobile = window.innerWidth < 768;
    console.log(window.innerWidth);
    const ProjectTile = styled.div`
     text-decoration: none;
      display: inline;
      text-decoration: none;
      color:black;
      font-size: 260%;
      width: 80% !important;
      &:hover {
        color: #B70303;
      }`;

    const ProjectImage = styled.div`
      visibility: hidden;
      align-items: center;
      justifyContent: center;
      position: fixed;
      backgroundColor: rgba(0, 0, 0, 0);
      ${ProjectTile}:hover & {
        visibility: visible;
      }`;
     

      
   

    return (
      <React.Fragment>
  
        <div className="projectList" >
          {this.state.projects.map(project => (
            <ProjectTile key={project.id} >
              <a className="projectTitle" href={""} >
                {project.title}
              </a>
              <span className="arrow"> → </span>
              <a className="projectSubtitle" href={""}>{project.subtitle}</a>


              <ProjectImage>
                <img
                  src={project.image}
                style={{
                    position: "fixed",
                    left: project.posX,
                    top: project.posY,
                    height:isMobile ? project.imageHeightMobile : project.imageHeightDesktop 
                   }}
                ></img>
                <img
                  src={project.image2}
                  style={{
                    position: "fixed",
                    left: project.posX2,
                    top: project.posY2,
                    height: project.image2Height
                  }}
                ></img>
                <img
                  src={project.image3}
                  style={{
                    position: "fixed",
                    left: project.posX3,
                    top: project.posY3,
                    height: project.image3Height
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

export default Home;
