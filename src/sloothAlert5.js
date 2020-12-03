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
      <>
        <h1>Lorem ipsum</h1>
        <h3>What is Lorem Ipsum?</h3>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum.
        </p>
        <h3>Why do we use it?</h3>
        <p>
          It is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout. The point of
          using Lorem Ipsum is that it has a more-or-less normal distribution of
          letters, as opposed to using 'Content here, content here', making it
          look like readable English. Many desktop publishing packages and web
          page editors now use Lorem Ipsum as their default model text, and a
          search for 'lorem ipsum' will uncover many web sites still in their
          infancy. Various versions have evolved over the years, sometimes by
          accident, sometimes on purpose (injected humour and the like).
        </p>
        <h3>Where does it come from?</h3>
        <p>
          Contrary to popular belief, Lorem Ipsum is not simply random text. It
          has roots in a piece of classical Latin literature from 45 BC, making
          it over 2000 years old. Richard McClintock, a Latin professor at
          Hampden-Sydney College in Virginia, looked up one of the more obscure
          Latin words, consectetur, from a Lorem Ipsum passage, and going
          through the cites of the word in classical literature, discovered the
          undoubtable source. Lorem Ipsum comes from sections 1.10.32 and
          1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and
          Evil) by Cicero, written in 45 BC. This book is a treatise on the
          theory of ethics, very popular during the Renaissance. The first line
          of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in
          section 1.10.32. The standard chunk of Lorem Ipsum used since the
          1500s is reproduced below for those interested. Sections 1.10.32 and
          1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also
          reproduced in their exact original form, accompanied by English
          versions from the 1914 translation by H. Rackham.
        </p>
        <h3>Where can I get some?</h3>
        <p>
          There are many variations of passages of Lorem Ipsum available, but
          the majority have suffered alteration in some form, by injected
          humour, or randomised words which don't look even slightly believable.
          If you are going to use a passage of Lorem Ipsum, you need to be sure
          there isn't anything embarrassing hidden in the middle of text. All
          the Lorem Ipsum generators on the Internet tend to repeat predefined
          chunks as necessary, making this the first true generator on the
          Internet. It uses a dictionary of over 200 Latin words, combined with
          a handful of model sentence structures, to generate Lorem Ipsum which
          looks reasonable. The generated Lorem Ipsum is therefore always free
          from repetition, injected humour, or non-characteristic words etc.
        </p>
      </>

      {/* //   <h3 className="sloothalert">SLOOTH ALERT</h3>
    //   <hr />
    //   <div className="borders">
    //     <div className="all-borders">
    //       <div className="cooper-missing">
    //         <h3>{data.alerttitle}!</h3>
    //       </div>

    //       <div className="qrcodediv-main">
    //         <img className="pet-image-slooth-alert" src={data.img} />
    //         <div className="qrcodediv">
    //           <p className="scanhere">Scan Here</p>

    //           <Qrcode
    //             className="qrcode"
    //             value="http://www.slooth.com/"
    //           />
    //         </div>
    //       </div>

    //       <div className="reward">
    //         <h3>REWARD ${data.reward}</h3>
    //       </div>

    //       <br />

    //       <div>
    //         <h4 className="call">
    //           CALL
    //           {user.ProfileDetails ? user.ProfileDetails.phone : null}
    //         </h4>
    //         <br />
    //         <p className="paragraph-missing">{data.description}</p>
    //       </div>
    //     </div>
    //     <div style={{ display: "none" }}></div>
    //     <br />
    //     <div className="hr"></div>
    //     <div className="pet-information">
    //       <br />
    //       <h5>PET INFORMATION</h5>
    //       <p className="dog">
    //         Name: <b>{data.petname}</b>
    //       </p>
    //       <p className="dog">
    //         Type: <b>{data.selectyourpet}</b>
    //       </p>
    //       <p className="dog">
    //         Breed: <b>Pug</b>
    //       </p>
    //       <p className="dog">
    //         Age: <b>{data.age}</b>
    //       </p>
    //       <p className="dog">
    //         Color: <b>{data.color}</b>
    //       </p>
    //     </div>
    //     <br />
    //     <div className="hr"></div>
    //     <div className="parent-information">
    //       <br />
    //       <h5>PARENT INFORMATION</h5>
    //       <p className="dog2">
    //         Name: <b>{user.fullName}</b>
    //       </p>
    //       <p className="dog2">
    //         Contact No:
    //         <b>{user.ProfileDetails ? user.ProfileDetails.phone : null}</b>
    //       </p>
    //       <p className="dog2">
    //         Zip Code:
    //         <b>{user.ProfileDetails ? user.ProfileDetails.zip : null}</b>
    //       </p>
    //       <p className="dog2">
    //         Email: <b> {user.email}</b>
    //       </p>
    //     </div>
    //   </div> */}
    </div>
  );
};

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      key: props.history.location.state.key,
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
    firebase
      .database()
      .ref(`sloothAlert/${this.state.key}`)
      .once("value", (value) => {
        console.log(value.val());
        this.setState({ user: value.val().user, data: value.val().data });
      });
  }

  delete = () => {
    firebase
      .database()
      .ref(`sloothAlert/${this.state.key}`)
      .remove()
      .then(() => {
        this.props.history.push("sloothAlert4");
      });
  };

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

                      <Qrcode
                        className="qrcode"
                        value="http://www.slooth.com/"
                      />
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
                </div>
                <div className="bottom-icons">
                  <div className="bottom-icons2" style={{ cursor: "pointer" }}>
                    <img
                      onClick={() =>
                        this.props.history.push("sloothalertupdate", {
                          state: this.state,
                        })
                      }
                      src={require("./assets/icon_edit.svg")}
                    />

                    <img
                      onClick={() => this.delete()}
                      src={require("./assets/icon_delete.svg")}
                      style={{ cursor: "pointer" }}
                    />

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
                  </div>

                  <div className="bottom-left-icons1">
                    {/* <Pdf targetRef={this.ref} filename="code-example.pdf">
                        {({ toPdf }) => ( */}
                    <i
                      // onClick={() => this.setState({ isTrueShare: true })}
                      // onClick={onStartCapture}
                      // onClick={toPdf}
                      className="fa fa-paper-plane"
                      aria-hidden="true"
                      style={{ color: "#2a2c7c", cursor: "pointer" }}
                      data-toggle="modal"
                      data-target="#myModalsocial"
                    ></i>
                    {/* )}
                      </Pdf> */}
                    {/* <i
                      // onClick={() => this.setState({ isTrueShare: true })}
                      // onClick={onStartCapture}

                      className="fa fa-paper-plane"
                      aria-hidden="true"
                      style={{ color: "#2a2c7c", cursor: "pointer" }}
                      data-toggle="modal"
                      data-target="#myModalsocial"
                    ></i> */}
                  </div>
                </div>

                <div style={{ display: "none" }}>
                  <ComponentToPrint
                    state={this.state}
                    ref={(el) => (this.componentRef = el)}
                  />
                </div>
                {/* </div>
                                    )}
                </ScreenCapture> */}

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
