import React from "react";
import "./petprofile4.css";
import { withRouter } from "react-router-dom";
import ReactToPrint from "react-to-print";
import { QRCode } from "react-qr-svg";
import Pdf from "react-to-pdf";
const ref = React.createRef();
class ComponentToPrint extends React.Component {
  state = {
    petDetails: this.props.state
  }
  render() {
    return (
      <div className="App">
        <div className="pettype">
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-heading">
                <div>
                  <button
                    type="button"
                    className="close"
                    data-dismiss="modal"
                    aria-label="Close"
                  >
                    <span aria-hidden="true">&times;</span>
                  </button>
                </div>
                <div>
                  <div>
                    <img
                      className="logo-modal"
                      src={require("../src/assets/logo_big.svg")}
                    ></img>
                  </div>
                </div>
              </div>
              <div className="modal-body">
                <h3 className="main-h4">Pet Profile Details</h3>
                <hr />
                <div className="main-page-4-div">
                <img
                    className="black-pet"
                    src={this.state.petDetails.petProfileImage !== "" ?this.state.petDetails.petProfileImage: require("./assets/pet-page4.jpeg")}
                  />

                  <h4>{this.state.petDetails.petName}</h4>
                  <p className="dog-type">
                    Type: <b>{this.state.petDetails.selectedPet}</b>
                  </p>
                  <p className="dog-type">
                    Bread: <b>{this.state.petDetails.breed}</b>
                  </p>
                  <p className="dog-type">
                    Age: <b>{this.state.petDetails.age}</b>
                  </p>
                  <p className="dog-type">
                    Color: <b>{this.state.petDetails.color}</b>
                  </p>


                  <div className="empty-div"></div>
                  <p className="scan-para">Scan Here</p>

                  <img className="qr-img" src={require("./assets/qr.jpg")} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      check: "usertype",
      isClicked: "",
      petDetails: this.props.state,
    };
    this.componentRef = null;
  }
  render() {
    return (
      <div className="App">
        <div className="pettype">
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-heading">
                <div>
                  <button
                    type="button"
                    className="close"
                    data-dismiss="modal"
                    aria-label="Close"
                  >
                    <span aria-hidden="true">&times;</span>
                  </button>
                </div>
                <div>
                  <div>
                    <img
                      className="logo-modal"
                      src={require("../src/assets/logo_big.svg")}
                    ></img>
                  </div>
                </div>
              </div>
              <div className="modal-body">
                <h3 className="main-h4">Pet Profile Details</h3>
                <hr />
                <div className="main-page-4-div">
                  <img
                    className="black-pet"
                    src={this.state.petDetails.petProfileImage !== "" ?this.state.petDetails.petProfileImage: require("./assets/pet-page4.jpeg")}
                  />

                  <h4>{this.state.petDetails.petName}</h4>
                  <p className="dog-type">
                    Type: <b>{this.state.petDetails.selectedPet}</b>
                  </p>
                  <p className="dog-type">
                    Bread: <b>{this.state.petDetails.breed}</b>
                  </p>
                  <p className="dog-type">
                    Age: <b>{this.state.petDetails.age}</b>
                  </p>
                  <p className="dog-type">
                    Color: <b>{this.state.petDetails.color}</b>
                  </p>

                  <div className="empty-div"></div>
                  <p className="scan-para">Scan Here</p>

                  {/* <img className="qr-img" src={require("./assets/qr.jpg")} /> */}
                  {/* <div className="qr-img" > */}
                  <div ref={ref}>
                    <QRCode
                      bgColor="#FFFFFF"
                      fgColor="#000000"
                      level="Q"
                      style={{ width: 150 }}
                      value="dummy text"
                    />
                  </div>

                  <Pdf targetRef={ref} filename="code-example.pdf">
                    {({ toPdf }) => (
                      <p
                        onClick={toPdf}
                        className="sav-qr-gal"
                        style={{ marginTop: "2%" }}
                      >
                        Save QR Code To Gallery
                      </p>
                    )}
                  </Pdf>
                  <div style={{ display: "none" }}>
                    {/* <div ref={ref}>
                    <ComponentToPrint />
                  </div> */}
                  </div>
                  <ReactToPrint
                    trigger={() => (
                      <div className="main-icon-print">
                        <img
                          className="icon-print"
                          src={require("./assets/icon_print (1).svg")}
                        />

                        <p className="print-qr-code">Print QR Code</p>
                      </div>
                    )}
                    content={() => this.componentRef}
                  />
                  <div style={{ display: "none" }}>
                    <ComponentToPrint state={this.state.petDetails} ref={(el) => (this.componentRef = el)} />
                  </div>
                </div>

                <div className="qr-div">
                  <button
                    type="button"
                    className=" close button4 btn btn-primary save-pet-profile"
                    data-dismiss="modal"
                    aria-label="Close"
                    onClick={() => this.props.petprofile4()}
                  >
                    Save Pet Profile
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(App);
