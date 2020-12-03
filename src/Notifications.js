import React from "react";
// import logo from './logo.svg';
import "./notification.css";
import RightSideNav from "./RightSideNav";
import Sidenav from "./SideNav"
function App({...props}) {
  return (
    <div className="App">
      {/* <img className="logo" src={require("./assets/logo_big.svg" )} alt="slooth" /> */}
      <div className="main">
      
      <Sidenav {...props} />
        {/* *******************CENTER****************** */}

        <div className="noti-center">
          <div className="notification">
            <h4 className="notification-heading">Notifications</h4>

           
            <img
              className="noti-setting"
              src={require("./assets/noti-setting.png")}
            />
          </div>

          <div className="notification-tab">
            <ul className="noti-tab nav ">
              <li>
                <a className="all-anchor" href="#">
                  All
                </a>
              </li>
              <li>
                <a className="mentions-anchor" href="#">
                  Mentions
                </a>
              </li>
            </ul>
          </div>
          <hr/>

          <div className="all-notifications">
          <div className="heart-pet">
            <img className="heart-image" src={require("./assets/heart.png")} />

            <div>
              <img className="noti-pet" src={require("./assets/jp.jpg")} />
            </div>
          </div>

          <div className="anchor-para">
            <a className="reply-noti" href="#">
              M.I.K
            </a>
            &nbsp; <p>liked your reply</p>
          </div>
          <div>
          <p className="notification-para">
              Sir @PravinSawhney, india economical infrastructure is based on
              public cloud servers, public servers are not fully protected, few
              cyber attacks will cause huge damage to them, bravado speeches
              will further deteriorate the relation which are already at worst,
              he should start ...
            </p>
          </div>
          <hr/>
          </div>
        </div>

        {/* **********************************right hand side*********************************** */}
      <RightSideNav {...props} />
      </div>
    </div>
  );
}

export default App;
