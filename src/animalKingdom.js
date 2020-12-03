import React from "react";
import "./animalKingdom.css";
import Sidenav from "./SideNav";
import RightSideNav from "./RightSideNav";
import ReactStars from "react-stars";
import "./ShowFilter.css";
import "./sortItem.css";

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

          <div className="sloothAlertcenter1">
            <div className="heading-logo">
              <img
                className="kingdom-logo"
                src={require("./assets/icon_kingdom.svg")}
              />
              &nbsp;
              <h4 className="services">Animal Kingdom Cafe</h4>
            </div>

            <div className="all-images-paragraphs">
              <div className="image-showfilter">
                <img
                  className="img-showfilter"
                  data-toggle="modal"
                  data-target="#showfilter"
                  src={require("./assets/icon_filter.svg")}
                />{" "}
                &nbsp;
                <p
                  className="showfilter"
                  data-toggle="modal"
                  data-target="#showfilter"
                >
                  Show Filter
                </p>
              </div>

              <div className="sortby-image">
                <p
                  className="showfilter"
                  data-toggle="modal"
                  data-target="#sortitems"
                >
                  Sort by:Price
                </p>
                <img
                  className="img-sortby"
                  data-toggle="modal"
                  data-target="#sortitems"
                  src={require("./assets/icon_dropdown_white.svg")}
                />
              </div>
            </div>

            <hr />

            <div className="pet-img-paragraph">
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <div>
                <img
                  className="services-pet-img"
                  src={
                    "data:image/jpeg;base64,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"
                  }
                />
              </div>
              <div className="all-description">
                <p>washer</p>
                <p className="small-font">test</p>
                <p className="small-font">2 kg</p>
                <p className="small-font">Not rated yet</p>
              </div>
              <div className="ak-price">
                <p>$12.99</p>
              </div>
            </div>

            <hr />

            <div className="pet-img-paragraph">
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <div>
                <img
                  className="services-pet-img"
                  src={
                    "data:image/jpeg;base64,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"
                  }
                />
              </div>
              <div className="all-description">
                <p>Paul's Groomers</p>
                <p className="small-font">26A Parkway Circle</p>
                <p className="small-font">office@paulsgroomers.com</p>
                <p className="small-font">P1302679012</p>
              </div>
              <div className="ak-price">
                <p>$12.99</p>
              </div>
            </div>

            <hr />

            <div className="pet-img-paragraph">
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <div>
                <img
                  className="services-pet-img"
                  src={require("./assets/services-pet-slooth.jpg")}
                />
              </div>
              <div className="all-description">
                <p>Paul's Groomers</p>
                <p className="small-font">26A Parkway Circle</p>
                <p className="small-font">office@paulsgroomers.com</p>
                <p className="small-font">P1302679012</p>
              </div>
              <div className="ak-price">
                <p>$12.99</p>
              </div>
            </div>

            <hr />

            <div className="pet-img-paragraph">
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <div>
                <img
                  className="services-pet-img"
                  src={require("./assets/services-pet-slooth.jpg")}
                />
              </div>
              <div className="all-description">
                <p>Paul's Groomers</p>
                <p className="small-font">26A Parkway Circle</p>
                <p className="small-font">office@paulsgroomers.com</p>
                <p className="small-font">P1302679012</p>
              </div>
              <div className="ak-price">
                <p>$12.99</p>
              </div>
            </div>

            <hr />

            <div className="pet-img-paragraph">
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <div>
                <img
                  className="services-pet-img"
                  src={require("./assets/services-pet-slooth.jpg")}
                />
              </div>
              <div className="all-description">
                <p>Paul's Groomers</p>
                <p className="small-font">26A Parkway Circle</p>
                <p className="small-font">office@paulsgroomers.com</p>
                <p className="small-font">P1302679012</p>
              </div>
              <div className="ak-price">
                <p>$12.99</p>
              </div>
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
                    <h5 className="heading-h3">Filter Products Prices</h5>
                    <div className="all-div-of-filtered">
                      <button
                        type="button"
                        class="filtered-btn btn btn-primary"
                      >
                        All Prices
                      </button>
                    </div>

                    <div className="all-div-of-filtered">
                      <button
                        type="button"
                        class="filtered-btn btn btn-primary"
                      >
                        $1 - $90
                      </button>
                    </div>

                    <div className="all-div-of-filtered">
                      <button
                        type="button"
                        class="filtered-btn btn btn-primary"
                      >
                        $100 - $200
                      </button>
                    </div>

                    <div className="all-div-of-filtered">
                      <button
                        type="button"
                        class="filtered-btn btn btn-primary"
                      >
                        $300 - $400
                      </button>
                    </div>

                    <div className="all-div-of-filtered">
                      <button
                        type="button"
                        class="filtered-btn btn btn-primary"
                      >
                        $500+
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="modal" id="sortitems">
              <div class="modal-dialog">
                <div class="modal-content modl-con">
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
                    <h5 className="heading-h3">Sort Items By</h5>
                    <div className="all-div-of-filtered">
                      <button
                        type="button"
                        class="filtered-btn btn btn-primary"
                      >
                        Name
                      </button>
                    </div>

                    <div className="all-div-of-filtered">
                      <button
                        type="button"
                        class="filtered-btn btn btn-primary"
                      >
                        Price
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <hr />
          </div>

          <RightSideNav {...this.props} />
        </div>
      </div>
    );
  }
}
export default App;
