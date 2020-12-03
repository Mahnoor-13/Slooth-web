import React from "react";
// import logo from './logo.svg';
import "./Message.css";
import MailOutlineOutlinedIcon from "@material-ui/icons/MailOutlineOutlined";
import RightSideNav from "./RightSideNav";
import Message from "./Message";
import Sidenav from "./SideNav";
import Message2 from "./Message2";
import "./message-modal.css";

function App({ ...props }) {
  return (
    <div className="App">
      {/* <img className="logo" src={require("./assets/logo_big.svg" )} alt="slooth" /> */}
      <div className="main">
        <Sidenav {...props} />
        {/* *******************CENTER****************** */}

        <div className="msg-center">
          <div className="msg">
            <h4 className="msg-heading">Mesages</h4>

            <MailOutlineOutlinedIcon
              style={{ color: "#2a2c7c" }}
              data-toggle="modal"
              data-target="#showfilter"
            />
          </div>
          <hr />

          <div class="form-group has-search input-msg">
            <span class="fa fa-search form-control-feedback "></span>
            <input
              type="text"
              class="form-control form-msg"
              placeholder="Search"
            />
          </div>
          <hr />

          <div className="all-msg">
            <div className="msg-width">
              <img className="msg-pet" src={require("./assets/jp.jpg")} />
            </div>
            <div>
              <p>
                Blockchain.comSupport
                <span className="msg-hello">@AskBlo...</span>
              </p>
              <p className="msg-hello">hello</p>
            </div>

            <div className="now">Now</div>
          </div>
          <hr />

          <div className="all-msg">
            <div className="msg-width">
              <img className="msg-pet" src={require("./assets/jp.jpg")} />
            </div>
            <div className="name-mesg">
              <p className="name-msg">
                sdnasfjdnfu <span className="msg-hello">@Askbrih</span>
              </p>
              <p className="msg-hello">Hello</p>
            </div>
            <div className="now">3m</div>
          </div>
          <hr />
        </div>

        <div class="modal" id="showfilter">
          <div class="modal-dialog">
            <div class="modal-content">
              <div class="modal-header">
                <div>
                  <img
                    className="logo-modal-filter"
                    src={require("../src/assets/logo_big.svg")}
                  />
                </div>
                <button type="button" class="close" data-dismiss="modal">
                  &times;
                </button>
              </div>

              <div class="modal-body">
                <div className="msg-modal">
                  <h5 className="heading-h3-modal">Filter Products Prices</h5>
                </div>
                <hr />
                <div class="form-group has-search-modal input-msg-modal">
                  <span class="fa fa-search form-control-feedback-modal"></span>
                  <input
                    type="text"
                    class="form-control form-msg"
                    placeholder="Search"
                  />
                </div>
                <hr />

                <div className="all-msg">
                  <div className="msg-width">
                    <img className="msg-pet" src={require("./assets/jp.jpg")} />
                  </div>
                  <div>
                    <p>
                      Blockchain.comSupport{" "}
                      <span className="msg-hello">@AskBlo...</span>
                    </p>
                    <p className="msg-hello">hello</p>
                  </div>

                  <div className="now">Now</div>
                </div>
                <hr />

                <div className="all-msg">
                <div className="msg-width">
                  <img className="msg-pet" src={require("./assets/jp.jpg")} />
                </div>
                <div className="para-name-modal">
                  <p>
                  sdnasfjdnfu
                    <span className="msg-hello">@Askbrih</span>
                  </p>
                  <p className="msg-hello">Hello</p>
                </div>

                <div className="now">3m</div>
              </div>
              <hr />
              </div>
            </div>
          </div>
        </div>

        <Message2 />
        {/* **********************************right hand side*********************************** */}
      </div>
    </div>
  );
}

export default App;
