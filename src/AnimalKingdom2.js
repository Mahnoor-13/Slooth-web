import React from "react";
import "./AnimalKingdom2.css";
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

          <div className="animalKingdomCenter">
            <div className="heading-logo2">
              <img
                className="kingdom-logo2"
                src={require("./assets/icon_kingdom.svg")}
              />
              &nbsp;
              <h4 className="services2">Animal Kingdom Cafe</h4>
            </div>

            <div>
              <img src={require("./assets/petfeed.jpg")} />
            </div>

            <div className="missing-gvy">
              <div>
                <h4 className="color-gr">GVY</h4>
              </div>
              <div className="all-desc">
                <div>
                  <p>Description : </p>

                  <p>Type : </p>

                  <p>Category : </p>

                  <p> Code : </p>

                  <p>Weight : </p>

                  <p>Price : </p>

                  <p>Summary : </p>
                </div>

                <div>
                  <p className="type">Yy </p>

                  <p className="type">MissingPoster </p>

                  <p className="type">Feed Category </p>

                  <p className="type"> FWef </p>

                  <p className="type">45 </p>

                  <p className="type">$250 </p>

                  <p className="type">YYYt </p>
                </div>
              </div>

              <div>
              <button type="button" class="cart-button btn btn-primary">Add To Cart</button>

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
