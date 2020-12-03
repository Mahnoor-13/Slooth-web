import React from "react";
import "./groupDetail.css";
import Rightsidenav from "./RightSideNav";
import Sidenav from "./SideNav";
function App({...props}) {
  return (
    <div className="App">
      {/* <img className="logo" src={require("./assets/logo_big.svg" )} alt="slooth" /> */}
      <div className="main">
        
      <Sidenav {...props}/>

        {/* ******************* CENTER ********************* */}

        <div className="groupdetail-center">
          <div className="group">
            <h4 className="detail-heading">Group Details</h4>
          </div>


          <hr/>
          <div>
            <img
              className="group-dog"
              src={require("./assets/group-dog.jpg")}
            />
          </div>

          <div className="center-content-of-group-detail">
            <h5>Group Name Goes Here</h5>

            <div>
              <img src={require("./assets/icon_earth.svg")} />
              <span>Public . 80K Members . Created on March 3,2020</span>
            </div>
          </div>

          <hr />
          <div>
            <div className="all-images">
            <div>
              <img
                className="dog-group-details"
                src={require("./assets/dog.png")}
              />
              <img
                className="fox-group-details"
                src={require("./assets/fox.jpg")}
              />
              <img
                className="hampster-group-details"
                src={require("./assets/hampster.jpeg")}
              />
              <img
                className="ifish-group-details"
                src={require("./assets/ifsh.jpeg")}
              />
              <img
                className="rabbit-group-details"
                src={require("./assets/rabbit.jpg")}
              />
                         + 70K more

              </div>

              <p className="see-more">see more</p>
            </div>

            <hr />
          </div>

          <div className="about-lorem">
            <h5>About</h5>
            <p className="lorem-para">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis ... Lorem ipsum dolor sit amet,
          
            </p>
          </div>

          <div className="group-btn">
            <button type="button" className="joingroup-btn btn btn-primary" onClick={() => props.history.push('./creategroup')}>
              JOIN GROUP
            </button>
          </div>
        </div>

        <Rightsidenav {...props}/>

      </div>
    </div>
  );
}

export default App;
