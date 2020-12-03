import React from "react";
import "./services.css";
import Sidenav from "./SideNav";
import Rightsidenav from "./RightSideNav";
function App({ ...props }) {
  return (
    <div className="App">
      {/* <img className="logo" src={require("./assets/logo_big.svg" )} alt="slooth" /> */}
      <div className="main">
        <Sidenav {...props} />

        {/* ******************* CENTER ********************* */}

        <div className="sloothAlertcenter1">
          <div className="heading-logo">
            <img
              className="services-logo"
              src={require("./assets/icon_services.svg")}
            />
            &nbsp;
            <h4 className="services">Services</h4>
          </div>
          <div className="p-1 rounded rounded-pill shadow-sm mb-4 search-bar2">
            <div className="input-group">
              <div className="input-group-prepend">
                <button
                  id="button-addon2"
                  type="submit"
                  className="btn btn-link text-secondary"
                >
                  <i className="fa2 fa fa-search"></i>
                </button>
              </div>
              <input
                type="search"
                placeholder="Enter your Zip code to see services nearby..."
                aria-describedby="button-addon2"
                className="form-control form-control2 "
              />
            </div>
          </div>
          <div className="para-dropdown">
            <p className="services-category">Service category: Groomers</p>
            <img
              className="drop-down"
              src={require("./assets/icon_dropdown_white.svg")}
            />
          </div>
          <hr />
          <div className="pet-img-paragraph">
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <div>
              <img
                className="services-pet-img"
                src={require("./assets/services-pet-slooth.jpg")}
              />
            </div>
            <div className="all-description">
              <p>Paul's Groomers</p>
              <p className="small-font">26A Parkway Circle</p>
              <p className="small-font">office@paulsgroomers.com</p>
              <p className="small-font">P1302679012</p>
            </div>
          </div>
          <hr />
          <div className="pet-img-paragraph">
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <div>
              <img
                className="services-pet-img"
                src={require("./assets/services-pet-slooth.jpg")}
              />
            </div>
            <div className="all-description">
              <p>Paul's Groomers</p>
              <p className="small-font">26A Parkway Circle</p>
              <p className="small-font">office@paulsgroomers.com</p>
              <p className="small-font">P1302679012</p>
            </div>
          </div>
          <hr />
          <div className="pet-img-paragraph">
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <div>
              <img
                className="services-pet-img"
                src={require("./assets/services-pet-slooth.jpg")}
              />
            </div>
            <div className="all-description">
              <p>Paul's Groomers</p>
              <p className="small-font">26A Parkway Circle</p>
              <p className="small-font">office@paulsgroomers.com</p>
              <p className="small-font">P1302679012</p>
            </div>
          </div>
          <hr />
          <div className="pet-img-paragraph">
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <div>
              <img
                className="services-pet-img"
                src={require("./assets/services-pet-slooth.jpg")}
              />
            </div>
            <div className="all-description">
              <p>Paul's Groomers</p>
              <p className="small-font">26A Parkway Circle</p>
              <p className="small-font">office@paulsgroomers.com</p>
              <p className="small-font">P1302679012</p>
            </div>
          </div>
          <hr />
          <div className="pet-img-paragraph">
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <div>
              <img
                className="services-pet-img"
                src={require("./assets/services-pet-slooth.jpg")}
              />
            </div>
            <div className="all-description">
              <p>Paul's Groomers</p>
              <p className="small-font">26A Parkway Circle</p>
              <p className="small-font">office@paulsgroomers.com</p>
              <p className="small-font">P1302679012</p>
            </div>
          </div>
          <hr />
          <div className="pet-img-paragraph">
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <div>
              <img
                className="services-pet-img"
                src={require("./assets/services-pet-slooth.jpg")}
              />
            </div>
            <div className="all-description">
              <p>Paul's Groomers</p>
              <p className="small-font">26A Parkway Circle</p>
              <p className="small-font">office@paulsgroomers.com</p>
              <p className="small-font">P1302679012</p>
            </div>
          </div>
          <hr />{" "}
          <div className="pet-img-paragraph">
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <div>
              <img
                className="services-pet-img"
                src={require("./assets/services-pet-slooth.jpg")}
              />
            </div>
            <div className="all-description">
              <p>Paul's Groomers</p>
              <p className="small-font">26A Parkway Circle</p>
              <p className="small-font">office@paulsgroomers.com</p>
              <p className="small-font">P1302679012</p>
            </div>
          </div>
        </div>
        <Rightsidenav {...props} />
      </div>
    </div>
  );
}

export default App;
