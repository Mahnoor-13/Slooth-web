import React from "react";
import "./petType.css";
import { withRouter } from "react-router-dom";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      check: "usertype",
      isClicked: ""
    };
    console.log(props);
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
                      className="logo-big-2"
                      src={require("../src/assets/logo_big.svg")}
                    ></img>
                  </div>
                </div>
                <div>
                  <button
                    type="button"
                    className="btn-nxt button-next btn btn-primary mb-2 button"
                  >
                    Next
                  </button>
                </div>
              </div>
              <div className="modal-body">
                <div className="main-form">
                  <form className="">
                    <div className="new-account">
                      <div className="create-new-account">
                        Create New Account
                      </div>
                      <div className="btns">
                        <button
                          type="button"
                          className={
                            this.state.isClicked === "petparent"
                              ? "btn btn-primary mb-2 button usertype-button"
                              : "btn btn-primary mb-2 button signup usertype-button"
                          }
                          onClick={() =>
                            this.setState({ isClicked: "petparent" })
                          }
                        >
                          PET PARENT
                        </button>
                        <div className="detail-signup">
                          You have a furry/feathered/coated/scaled, etc...
                          family member
                        </div>
                        <button
                          type="button"
                          className={
                            this.state.isClicked === "businessowner"
                              ? "btn btn-primary mb-2 button usertype-button"
                              : "btn btn-primary mb-2 button signup usertype-button"
                          }
                          onClick={() =>
                            this.setState({ isClicked: "businessowner" })
                          }
                        >
                          BUSINESS OWNER
                        </button>
                        <div className="detail-signup">
                          You offer products and/or services for Pets
                        </div>
                        <button
                          type="button"
                          className={
                            this.state.isClicked === "petpatron"
                              ? "btn btn-primary mb-2 button usertype-button"
                              : "btn btn-primary mb-2 button signup usertype-button"
                          }
                          onClick={() =>
                            this.setState({ isClicked: "petpatron" })
                          }
                        >
                          PET PATRON
                        </button>
                        <div className="detail-signup">
                          You don't have a Pet,nut just love hanging out with
                          us!
                        </div>
                      </div>
                    </div>
                  </form>
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
