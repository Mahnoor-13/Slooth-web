import React from "react";
import "./upcomingEvents.css";
import Sidenav from "./SideNav";
import Rightsidenav from "./RightSideNav";

function App({...props}) {
  console.log(props)
  return (
    <div className="App">
      {/* <img className="logo" src={require("./assets/logo_big.svg" )} alt="slooth" /> */}
      <div className="main">
       
      <Sidenav {...props} />

        {/* ******************* CENTER ********************* */}

        <div className="events-center">
          <div className="events">
            <h4 className="events-heading">Upcoming Events</h4>
          </div>

          <hr />

          <div className="founded-event">
            <p className="calender-para-img">14 Events Found</p>
            <div className="icon-calender">
              <p className="calender-para-img">Select Date</p>
              <img
                className="calender"
                src={require("./assets/icon_filter.svg")}
              />
            </div>
          </div>

          <div>
            <img
              className="dog-event"
              src={require("./assets/group-dog.jpg")}
            />
            <div className="dog-bottom-text ">
              <small>Wed,March 4,2020</small>
              <p>Event Name Goes Here</p>
              <small>Location Goes Here</small>
            </div>
          </div>

          <div className="event-images">
            <img
              className="event-cat-group-details"
              src={require("./assets/cat.png")}
            />
            <img
              className="event-dog-group-details"
              src={require("./assets/dog.png")}
            />
            <span className="going">You and 12 friends are going</span>
          </div>

          <div>
            <div>
              <img
                className="dog-event2"
                src={require("./assets/group-dog.jpg")}
              />
              <div className="dog-bottom-text2 ">
                <small>Wed,March 4,2020</small>
                <p>Event Name Goes Here</p>
                <small>Location Goes Here</small>
              </div>
            </div>

            <div className="event-images2">
              <img
                className="event-cat-group-details2"
                src={require("./assets/cat.png")}
              />
              <img
                className="event-dog-group-details2"
                src={require("./assets/dog.png")}
              />
              <span className="going2">You and 12 friends are going</span>
            </div>
          </div>
        </div>

    <Rightsidenav {...props}/>
      </div>
    </div>
  );
}

export default App;
