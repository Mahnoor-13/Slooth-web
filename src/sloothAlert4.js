import React from "react";
import "./sloothAlert4.css";
import Sidenav from "./SideNav";
import Rightsidenav from "./RightSideNav";
import * as firebase from "firebase";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      sloothAlerts: [],
      sloothAlertKeys: [],
    };
  }

  componentDidMount() {
    let array = [];
    let arraykeys = [];

    firebase
      .database()
      .ref(`sloothAlert`)
      .on("child_added", (val) => {
        array.push(val.val());
        arraykeys.push(val.key);

        this.setState({
          sloothAlerts: array,
          sloothAlertKeys: arraykeys,
        });
      });
  }

  render() {
    return (
      <div className="App">
        {/* <img className="logo" src={require("./assets/logo_big.svg" )} alt="slooth" /> */}
        <div className="main">
          <Sidenav {...this.props} />
          <div className="slooth4-center">
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

            {this.state.sloothAlerts.map((val, ind) => {
              return (
                <div className="top-main-div" style={{margin:"2% 0%", cursor:"pointer"}} onClick={()=>this.props.history.push("sloothAlert5",{key:this.state.sloothAlertKeys[ind]})}>
                  <div>
                    <img
                      className="pet-slooth-alert"
                      style={{ width: "260px", borderRadius: "10px" }}
                      // src={require("./assets/pet-page4.jpeg")}
                      src={val.data.img}
                    />
                  </div>

                  <div className="cooper-is-missing">
                    <h4 className="heading-cooper-is-missing">
                      {val.data.alerttitle}
                    </h4>
                      <button
                        type="button"
                        className="reward-btn btn btn-warning "
                      >
                        REWARD ${val.data.reward}
                      </button>
                      <br />
                      <button
                        type="button"
                        className="active-btn btn btn-success "
                      >
                        ACTIVE
                      </button>

                    <small className="posted">
                      Posted on Feb 20,2020 at 15:56
                    </small>
                  </div>
                </div>
              );
            })}
            <hr />
            <div className="slooth-dashed text-center">
              <button
                type="button"
                className="para-alert4 btn"
                // onClick={() => this.props.history.push("/sloothAlert5")}
                onClick={() => this.props.history.push("/sloothAlert2")}
              >
                CREATE NEW SLOOTH ALERT
              </button>
            </div>

            <p className="sloothalert-para">
              Lorem ipsum, or lipsum as it is sometimes known, is dummy text
              used in laying out print, graphic or web designs. The passage is
              attributed to an unknown typesetter in the 15th century who is
              thought to have scrambled parts of Cicero's De Finibus Bonorum et
              Malorum for use in a type specimen book.Lorem ipsum, or lipsum as
              it is sometimes known, is dummy text used in laying out print,
              graphic or web designs. The passage is attributed to an unknown
              typesetter in the 15th century who is thought to have scrambled
              parts of Cicero's De Finibus Bonorum et Malorum for use in a type
              specimen book.
            </p>
          </div>
          <Rightsidenav {...this.props} />
        </div>
      </div>
    );
  }
}

export default App;
