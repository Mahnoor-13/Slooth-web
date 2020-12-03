import React from "react";
// import logo from './logo.svg';
import "./animalKingdomCafe.css";
import Rightsidenav from "./RightSideNav";
import Sidenav from "./SideNav";

function App({...props}) {
  return (
    <div className="App">
      {/* <img className="logo" src={require("./assets/logo_big.svg" )} alt="slooth" /> */}
      <div className="main">
        <Sidenav {...props}/>
        {/* ******************* CENTER ********************* */}

        <div className="animal-cafe-center">
          <h3 className="sloothalert">SLOOTH ALERT</h3>
          <hr />

          <div className="all-inputs">
            <div className="form-group">
              <input
                type="text"
                className="form-control all-forms form-control2"
                id="usr"
                placeholder="Select Digital Poster Type"
              />
            </div>
            <div className="form-group">
              <input
                type="password"
                className="form-control all-forms"
                id="pwd"
                placeholder="Select Your Pet"
              />
            </div>

            <div className="form-group">
              <input
                type="text"
                className="form-control all-forms"
                id="usr"
                placeholder="Reward Amount"
              />
            </div>

            <div className="all-center-forms">
              <div className="form-group">
                <input
                  type="text"
                  className="form-control all-forms-center"
                  id="usr"
                  placeholder="Code"
                />
              </div>

              <div className="form-group">
                <input
                  type="text"
                  className="form-control all-forms-center"
                  id="usr"
                  placeholder="Weight,kg"
                />
              </div>

              <div className="form-group">
                <input
                  type="text"
                  className="form-control all-forms-center"
                  id="usr"
                  placeholder="Price,$"
                />
              </div>
            </div>

            <div className="form-group">
              <input
                type="text"
                className="form-control all-forms"
                id="usr"
                placeholder="Product Name"
              />
            </div>

            <div className="form-group">
              <textarea
                className="form-control comment-form"
                rows="5"
                id="comment"
                placeholder="Short Description"
              ></textarea>
            </div>

            <div className="form-group">
              <textarea
                className="form-control comment-form"
                rows="5"
                id="comment"
                placeholder="Produnt Summary"
              ></textarea>
            </div>

            <div className="slooth-dashed2 text-center">
              <div className="full-btn">
                <button type="button" className="para-alert2 btn">
                  <img src={require("./assets/icon_photo_small.svg")} />
                  UPLOAD PHOTO
                </button>
              </div>
            </div>

            <div className="next-btn-animal">
              <button type="button" className="next-btn2-animal btn btn-primary">
                PREVIEW
              </button>
            </div>
          </div>
          <br />
        </div>

        <Rightsidenav {...props} />
      </div>
    </div>
  );
}

export default App;
