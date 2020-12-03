import React from "react";
import "./sloothAlert3.css";
import Sidenav from "./SideNav";
import Rightsidenav from "./RightSideNav";
import * as firebase from "firebase";
import Qrcode from "qrcode.react";
import { NotificationContainer, NotificationManager } from "react-notifications";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: props.history.location.state.state,
      user: null,
      userId: firebase.auth().currentUser
        ? firebase.auth().currentUser.uid
        : "rC38RLj73eT3yBhiia1xK9Efqwh2",
        img:""
    };
  }

  componentDidMount() {
    console.log(this.state.data);
    if (this.state.data.img !== null && this.state.data.img !== "") {
      this.setState({ img: this.state.data.img });
    }
    firebase
      .database()
      .ref(`users/${this.state.userId}`)
      .on("value", (value) => {
        this.setState({ user: value.val() });
      });
  }

  sloothAlert = () => {
    firebase
      .database()
      .ref(`sloothAlert`)
      .push(this.state)
      .then((s) => {
        // console.log("s",s)
        NotificationManager.success("Slooth alert is active now");

        setTimeout(() => {
          this.props.history.push("/sloothAlert5", { key: s.key });
        }, 2000);
      })
      .catch((e) => {
        console.log(e);
        this.setState({ isLoading: false });
      });
  };

  render() {
    let { data, user } = this.state;
    return (
      <div className="App">
        <div className="main">
          <Sidenav {...this.props} />
          {/* ******************* CENTER ********************* */}

          <div className="sloothAlertcenter">
            <h3 className="sloothalert">SLOOTH ALERT</h3>
            <hr />

            <div className="borders">
              <div className="all-borders">
                <div className="cooper-missing">
                  <h3>{data.alerttitle}!</h3>
                </div>

                <div className="qrcodediv-main">
                  {data.img !== null && data.img !== "" ? (
                    <img className="pet-image-slooth-alert" src={data.img} />
                  ) : (
                    <img
                      className="pet-image-slooth-alert"
                      src={require("./assets/pet-page4.jpeg")}
                    />
                  )}
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

            <div className="post-btn1">
              <button
                type="button"
                className="post-btn2 btn btn-primary"
                onClick={() => this.sloothAlert()}
              >
                POST
              </button>
            </div>
          </div>

          <Rightsidenav {...this.props} />
        </div>
                <NotificationContainer/>

      </div>
    );
  }
}
export default App;
