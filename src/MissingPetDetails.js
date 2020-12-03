import React, { createRef, useState, useEffect } from "react";
import "./sloothAlert5.css";
import Sidenav from "./SideNav";
import Rightsidenav from "./RightSideNav";
import * as firebase from "firebase";
import Qrcode from "qrcode.react";
import ScreenCapture from "./ScreenCapture";
import {
  FacebookShareButton,
  TwitterShareButton,
  FacebookIcon,
  TwitterIcon,
} from "react-share";

import Pdf from "react-to-pdf";
import ReactToPrint from "react-to-print";

import { useScreenshot } from "use-react-screenshot";
import Screenshot from "react-screenshots";

const ref = React.createRef();
class ComponentToPrint extends React.Component {
  state = {
    data: this.props.state.data,
    user: this.props.state.user,
  };
  render() {
    let { data, user } = this.state;
    console.log(this.state);
    return (
      <div className="App" style={{ height: "100vh" }}>
        <div className="sloothAlertcenter">
          <h3 className="sloothalert">SLOOTH ALERT</h3>
          <hr />

          {this.state.data ? (
            <div className="borders">
              <div className="all-borders">
                <div className="cooper-missing">
                  <h3>{data.alerttitle}!</h3>
                </div>

                <div className="qrcodediv-main">
                  <img className="pet-image-slooth-alert" src={data.img} />
                  <div className="qrcodediv">
                    <p className="scanhere">Scan Here</p>

                    <Qrcode className="qrcode" value="http://www.slooth.com/" />
                  </div>
                </div>

                <div className="reward">
                  <h3>REWARD ${data.reward}</h3>
                </div>

                <br />

                <div>
                  {user !== null ? (
                    <h4 className="call">
                      CALL
                      {user.ProfileDetails ? user.ProfileDetails.phone : null}
                    </h4>
                  ) : null}
                  <br />
                  <p className="paragraph-missing">{data.description}</p>
                </div>
              </div>{" "}
              <div style={{ display: "none" }}></div>
              <br />
              <div className="hr"></div>
              <div className="pet-information">
                <br />
                <h5>PET INFORMATION</h5>
                <p className="dog">
                  Name: <b>{data.petname}</b>
                </p>
                <p className="dog">
                  Type: <b>{data.selectyourpet}</b>
                </p>
                <p className="dog">
                  Breed: <b>Pug</b>
                </p>
                <p className="dog">
                  Age: <b>{data.age}</b>
                </p>
                <p className="dog">
                  Color: <b>{data.color}</b>
                </p>
              </div>
              <br />
              <div className="hr"></div>
              {user !== null ? (
                <div className="parent-information">
                  <br />
                  <h5>PARENT INFORMATION</h5>
                  <p className="dog2">
                    Name: <b>{user.fullName}</b>
                  </p>
                  <p className="dog2">
                    Contact No:
                    <b>
                      {user.ProfileDetails ? user.ProfileDetails.phone : null}
                    </b>
                  </p>
                  <p className="dog2">
                    Zip Code:
                    <b>
                      {user.ProfileDetails ? user.ProfileDetails.zip : null}
                    </b>
                  </p>
                  <p className="dog2">
                    Email: <b> {user.email}</b>
                  </p>
                </div>
              ) : null}
            </div>
          ) : null}
        </div>
      </div>
    );
  }
}

export const Share = (props) => {
  const ref = createRef(null);
  const [width, setWidth] = useState(300);
  const [image, takeScreenShot] = useScreenshot();

  // const getImage = () => takeScreenShot(ref.current);

  const [data, setData] = useState(props.state.data);
  const [user, serUser] = useState(props.state.user);

  useEffect(() => {
    // Update the document title using the browser API
    takeScreenShot(ref.current);
  });

  console.log(image);

  return (
    <div
      ref={ref}
      style={{
        border: "1px solid #ccc",
        padding: "10px",
        marginTop: "-100px",
      }}
    >
    </div>
  );
};

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userId: firebase.auth().currentUser
        ? firebase.auth().currentUser.uid
        : "rC38RLj73eT3yBhiia1xK9Efqwh2",
      user: null,
      data: null,
      isTrueShare: false,
      screenCapture: "",

      width: window.innerWidth,
      height: window.innerHeight,
    };
    this.componentRef = null;
    this.ref = null;
  }

  onSave = ({ viewer, dataURL }) => {
    console.log("点击了保存按钮", dataURL, viewer);
  };

  onCancel = () => {
    console.log("点击了取消按钮");
  };

  onOk = ({ dataURL, viewer }) => {
    console.log("点击了确定按钮", dataURL, viewer);
  };

  componentDidMount() {
   
  }

 

  render() {
    let { data, user, width, height } = this.state;

    const shareUrl = "http://www.slooth.com";
    const title = "Slooth";

    return (
      <div className="App">
        <div className="main">
          <Sidenav {...this.props} />
          {/* ******************* CENTER ********************* */}

          <div className="sloothAlertcenter" ref={this.ref}>
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "center",
                alignItems: "center",
                padding: "3% 0 0%",
              }}
            >
              <img
                src={require("./assets/sloothalert.svg")}
                style={{
                  width: "4%",
                  marginRight: "2%",
                }}
              />
              <h3
                className="sloothalert"
                style={{
                  marginTop: 0,
                }}
              >
                SLOOTH ALERT
              </h3>
            </div>
            <hr />

            <div className="borders">
              <div className="all-borders">
                <div className="cooper-missing">
                  <h3>My pet missing!</h3>
                </div>

                <div className="qrcodediv-main">
                  <img
                    className="pet-image-slooth-alert"
                    src={require("./assets/dog.png")}
                  />
                  <div className="qrcodediv">
                    <p className="scanhere">Scan Here</p>

                    <Qrcode className="qrcode" value="http://www.slooth.com/" />
                  </div>
                </div>

                <div className="reward">
                  <h3>REWARD $500</h3>
                </div>

                <br />

                <div>
                  <h4 className="call">CALL 12345678</h4>
                  <br />
                  <p className="paragraph-missing">Zooro is missing!</p>
                </div>
              </div>
              <div className="bottom-icons">
                <div className="bottom-icons2" style={{ cursor: "pointer" }}>
                  <ReactToPrint
                    trigger={() => (
                      <div
                        className="main-icon-print"
                        style={{ cursor: "pointer" }}
                      >
                        <img src={require("./assets/icon_print.svg")} />
                      </div>
                    )}
                    content={() => this.componentRef}
                  />
                    <div className="bottom-left-icons1">
                  <i
                    className="fa fa-paper-plane"
                    aria-hidden="true"
                    style={{ color: "#2a2c7c", cursor: "pointer" }}
                    data-toggle="modal"
                    data-target="#myModalsocial"
                  ></i>
                </div>
                </div>

                <div className="bottom-left-icons1">
                  
                </div>
              </div>

              <div style={{ display: "none" }}>
                <ComponentToPrint
                  state={this.state}
                  ref={(el) => (this.componentRef = el)}
                />
              </div>
              <br />
              <div className="hr"></div>

              <div className="pet-information">
                <br />
                <h5>PET INFORMATION</h5>
                <p className="dog">
                  Name: <b>zooro</b>
                </p>
                <p className="dog">
                  Type: <b>dog</b>
                </p>
                <p className="dog">
                  Breed: <b>American</b>
                </p>
                <p className="dog">
                  Age: <b>2</b>
                </p>
                <p className="dog">
                  Color: <b>brown</b>
                </p>
              </div>

              <br />

              <div className="hr"></div>
              <div className="parent-information">
                <br />
                <h5>PARENT INFORMATION</h5>
                <p className="dog2">
                  Name: <b>Marcus</b>
                </p>
                <p className="dog2">
                  Contact No:
                  <b>1234567</b>
                </p>
                <p className="dog2">
                  Zip Code:
                  <b>74600</b>
                </p>
                <p className="dog2">
                  Email: <b> Marcus1@gmail.com</b>
                </p>
              </div>
            </div>
          </div>
          <Rightsidenav {...this.props} />
        </div>

        <div id="myModalsocial" class="modal fade" role="dialog">
          <div class="modal-dialog">
            <div class="modal-content" style={{ height: "60vh" }}>
              <div
                class="modal-header"
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-between",
                }}
              >
                <h4 class="modal-title">SHARE POST VIA: </h4>

                <button type="button" class="close" data-dismiss="modal">
                  &times;
                </button>
              </div>
              <div class="modal-body">
                <div
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "space-between",
                    margin: "6% 0%",
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      alignItems: "center",
                    }}
                  >
                    <div>
                      <img
                        className="logo"
                        src={require("./assets/logo_big.svg")}
                        alt="slooth"
                      />
                    </div>
                    <div>Slooth</div>
                  </div>
                  <div>Share</div>
                </div>
                <TwitterShareButton
                  url={shareUrl}
                  quote={title}
                  className="Demo__some-network__share-button"
                  style={{ width: "100%" }}
                >
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      justifyContent: "space-between",
                      margin: "6% 0%",
                    }}
                  >
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "row",
                        alignItems: "center",
                      }}
                    >
                      <div>
                        <TwitterIcon size={50} round />
                      </div>
                      <div>Twitter</div>
                    </div>
                    <div>Share</div>
                  </div>
                </TwitterShareButton>

                <FacebookShareButton
                  url={shareUrl}
                  quote={title}
                  className="Demo__some-network__share-button"
                  style={{ width: "100%" }}
                >
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      justifyContent: "space-between",
                      margin: "6% 0%",
                    }}
                  >
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "row",
                        alignItems: "center",
                      }}
                    >
                      <div>
                        <FacebookIcon size={50} round />
                      </div>
                      <div>Facebook</div>
                    </div>
                    <div>Share</div>
                  </div>
                </FacebookShareButton>
              </div>
            </div>
          </div>
        </div>
      </div>
      //   )}
      // </ScreenCapture>
    );
  }
}

export default App;
