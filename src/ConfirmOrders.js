import React from "react";
import "./ConfirmOrders.css";
import Sidenav from "./SideNav";
import RightSideNav from "./RightSideNav";
import ReactStars from "react-stars";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tab: "cafelist",
      type: "cart",
    };
  }
  render() {
    return (
      <div className="App">
        {/* <img className="logo" src={require("./assets/logo_big.svg" )} alt="slooth" /> */}
        <div className="main">
          <Sidenav {...this.props} />
          {/* ******************* CENTER ********************* */}

          <div className="confirmOrdersCenter">
            <div className="confirm-logo">
              <h4 className="confirm">Animal Kingdom Cafe</h4>
            </div>

            <hr />
            <div className="allinputs">
              <div>
                <h6 className="heading-confirm">
                  Please confirm your delivery details
                </h6>
              </div>

              <div>
                <div class="input-group mb-3">
                  <input
                    type="text"
                    class="conf form-control"
                    placeholder="Enter Phone No"
                    aria-label="Username"
                    aria-describedby="basic-addon1"
                  />
                </div>

                <div class="input-group mb-3">
                  <input
                    type="text"
                    class="conf form-control"
                    placeholder="Enter Phone No"
                    aria-label="Username"
                    aria-describedby="basic-addon1"
                  />
                </div>

                <div class="input-group mb-3">
                  <input
                    type="text"
                    class="conf form-control"
                    placeholder="Enter Phone No"
                    aria-label="Username"
                    aria-describedby="basic-addon1"
                  />
                </div>
              </div>

              <div>
                <button type="button" class="confirm-payment btn btn-primary">
                  Confirm Payment
                </button>
              </div>
            </div>
          </div>

          <RightSideNav {...this.props} />
        </div>
      </div>
    );
  }
}
export default App;
