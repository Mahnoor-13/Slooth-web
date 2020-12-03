import React from "react";
import "./discovergroups.css";
import Sidenav from "./SideNav";
import Rightsidenav from "./RightSideNav";
function App({ ...props }) {
  return (
    <div className="App">
      {/* <img className="logo" src={require("./assets/logo_big.svg" )} alt="slooth" /> */}
      <div className="main">
        <Sidenav {...props} />
        {/* ******************* CENTER ********************* */}

        <div className="discover-group-center">
          <div className="heading-logo">
            <h4 className="services">Discover Groups</h4>
          </div>

          <div className="p-1 rounded rounded-pill shadow-sm mb-4 search-bar2 search-group">
            <div className="input-group">
              <div className="input-group-prepend">
                <button
                  id="button-addon2"
                  type="submit"
                  className="btn btn-link text-secondary"
                >
                  <i className="fa2 fa fa-search"></i>
                </button>
              </div>
              <input
                type="search"
                placeholder="search group"
                aria-describedby="button-addon2"
                className="form-control form-control2 "
              />
            </div>
          </div>

          <hr />

          <ul className="nav market-navtab">
            <li>
              <a className="furniture" href="#">
                Your Groups
              </a>
            </li>
            <li className="dropdown">
              <a className="houses" href="#">
                Discover
              </a>
            </li>

            <li>
              <a
                className="furniture"
                href="#"
                onClick={() => props.history.push("/creategroup")}
              >
                {" "}
                + Create Group
              </a>
            </li>
            <li>
              <a className="furniture" href="#">
                Another
              </a>
            </li>
          </ul>
          <hr />

          <div className="pet-img-paragraph">
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <div>
              <img
                className="services-pet-img"
                src={require("./assets/doghouse2.jpg")}
              />
            </div>
            <div className="all-description">
              <p>Paul's Groomers</p>
              <p className="small-font">2 Mutual Friends</p>

              <div className="price">
                <button
                  type="button"
                  className="btn-join btn-primary"
                  onClick={() => props.history.push("/groupDetail")}
                >
                  Join
                </button>
              </div>
            </div>
          </div>

          <hr />

          <div className="pet-img-paragraph">
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <div>
              <img
                className="services-pet-img"
                src={require("./assets/doghouse1.jpg")}
              />
            </div>
            <div className="all-description">
              <p>Paul's Groomers</p>
              <p className="small-font">5 Mutual Friends</p>

              <div className="price">
                <button type="button" className="btn-join btn-primary">
                  Join
                </button>
              </div>
            </div>
          </div>

          <hr />

          <div className="pet-img-paragraph">
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <div>
              <img
                className="services-pet-img"
                src={require("./assets/doghouse4.jpg")}
              />
            </div>
            <div className="all-description">
              <p>Paul's Groomers</p>
              <p className="small-font">7 Mutual Friends</p>

              <div className="price">
                <button type="button" className="btn-join btn-primary">
                  Join
                </button>
              </div>
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
              <p className="small-font">4 Mutual Friends</p>

              <div className="price">
                <button type="button" className="btn-join btn-primary">
                  Join
                </button>
              </div>
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
              <p className="small-font">3 Mutual Friends</p>

              <div className="price">
                <button type="button" className="btn-join btn-primary">
                  Join
                </button>
              </div>
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
              <p className="small-font">4 Mutual Friends</p>

              <div className="price">
                <button type="button" className="btn-join btn-primary">
                  Join
                </button>
              </div>
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
              <p className="small-font">6 Mutual Friends</p>

              <div className="price">
                <button type="button" className="btn-join btn-primary">
                  Join
                </button>
              </div>
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
              <p className="small-font">1 Mutual Friends</p>

              <div className="price">
                <button type="button" className="btn-join btn-primary">
                  Join
                </button>
              </div>
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
              <p className="small-font">12 Mutual Friends</p>

              <div className="price">
                <button type="button" className="btn-join btn-primary">
                  Join
                </button>
              </div>
            </div>
          </div>

          <hr />
        </div>
        <Rightsidenav {...props} />
      </div>
    </div>
  );
}

export default App;
