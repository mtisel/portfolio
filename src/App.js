import React, { Component } from "react";
import "./App.css";
import Info from "./Info.js";
import Home from "./Home.js";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";


class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
     
      
    };
  }



  //render starts here -----------------------
  render() {


    return (
      <React.Fragment>
        <Router>
        <div>
          <ul className="App-header">
           <Link className="navLink" style={{ float:"left", marginLeft:"5%"}} to="/" > Maja Tisel </Link>
           <Link className="navLink" style={{ float:"right", marginRight:"5%"}} to="/info">Info</Link>  </ul>
           </div>
           <Switch>
           <Route path="/" exact component={Home}></Route>
           <Route path="/info" component={Info}></Route>

           </Switch>
            
              </Router>
           
          
        
        
      </React.Fragment>
    );
  }
}

export default App;
