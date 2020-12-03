import React from "react";
// import logo from './logo.svg';
import "./sloothAlert5.css";
import Sidenav from "./SideNav";
import Rightsidenav from "./RightSideNav";
function App({ ...props }) {
  return (
    <div className="App">
      {/* <img className="logo" src={require("./assets/logo_big.svg" )} alt="slooth" /> */}
      <div className="main">
        <Sidenav {...props} />
        {/* ******************* CENTER ********************* */}

        <div className="sloothAlertcenter">
          <h3 className="sloothalert">MISSING PETS</h3>
          <hr />

          <div className="borders">
            <div className="all-borders">
              <div className="cooper-missing">
                <h3>COOPER IS MISSING!</h3>
              </div>

              <div>
                <img
                  className="pet-image-slooth-alert"
                  src={require("./assets/pet-page4.jpeg")}
                />
              </div>

              

              <br />

              <div>
                <h4 className="call">CALL 8175551212</h4>
                <br />
                <p className="paragraph-missing">
                  Lorem ipsum, or lipsum as it is sometimes known, is dummy text
                  used in laying out print, graphic or web designs.
                </p>
              </div>
            </div>

            <div className="bottom-icons">
              <div className="bottom-icons2">
                <img src={require("./assets/icon_edit.svg")} />

                <img src={require("./assets/icon_delete.svg")} />

                <img src={require("./assets/icon_print.svg")} />
              </div>

              <div className="bottom-left-icons1">
                <img src={require("./assets/icon_edit.svg")} />
              </div>
            </div>

            <br />
            <div className="hr"></div>

            <div className="pet-information">
              <br />

              <h5>PET INFORMATION</h5>
              <p className="dog">
                Name: <b>Cooper</b>
              </p>
              <p className="dog">
                Type: <b>Dog</b>
              </p>
              <p className="dog">
                Breed: <b>Pug</b>
              </p>
              <p className="dog">
                Age: <b>8 years</b>
              </p>
              <p className="dog">
                Color: <b>Brown</b>
              </p>
            </div>

            <br />


          </div>
        </div>
        <Rightsidenav {...props} />
      </div>
    </div>
  );
}

export default App;
