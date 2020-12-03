import React from "react";
import "./MarketPlaceItem.css";
import Rightsidenav from "../../RightSideNav";
import Sidenav from "../../SideNav";
import ReactStars from "react-stars";
import * as firebase from "firebase";
import { connect } from "react-redux";
import {
  getMarketPlaceItemRatings,
  getMarketPlaceItemIsRated,
} from "../../store/actions/authActions";
import { bindActionCreators } from "redux";

class MarketPlaceItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      marketplaceItem: this.props.location.state.marketPlaceItem,
      getMarketPlaceItemRatings: [],
      fullName: "",
      email: "",
      phone: "",
      zip: "",
      userId: firebase.auth().currentUser
        ? firebase.auth().currentUser.uid
        : "rC38RLj73eT3yBhiia1xK9Efqwh2",
    };
    this.myRef = React.createRef();
  }
  componentDidMount() {
    firebase
      .database()
      .ref(`users/${this.props.location.state.marketPlaceItem.userId}`)
      .on("value", (value) => {
        this.setState({
          fullName: value.val().fullName,
          email: value.val().email,
          phone: value.val().ProfileDetails
            ? value.val().ProfileDetails.phone
            : "",
          zip: value.val().ProfileDetails ? value.val().ProfileDetails.zip : "",
        });
      });

    this.props.getMarketPlaceItemIsRated(
      this.state.marketplaceItem.key,
      this.state.userId
    );

    this.props.getMarketPlaceItemRatings(this.state.marketplaceItem.key);
  }

  componentWillReceiveProps(nextProps) {
    console.log("nextProps.state.auth", nextProps.state.auth.getMarketPlaceItemRatings);
    this.setState({
      getMarketPlaceItemIsRated: nextProps.state.auth.getMarketPlaceItemIsRated,
      getMarketPlaceItemRatings: nextProps.state.auth.getMarketPlaceItemRatings,
    });
  }

  render() {
    return (
      <div className="App">
        {/* <img className="logo" src={require("./assets/logo_big.svg" )} alt="slooth" /> */}
        <div className="main">
          <Sidenav {...this.props} />
          {/* ******************* CENTER ********************* */}
          <div className="marketcenter">
            <div className="heading-logo">
              <h4 className="services">Marketplace</h4>
            </div>

            <hr />

            <div>
              <img
                className="market-dog-image"
                src={this.state.marketplaceItem.images[0]}
              />
            </div>

            <div className="main-product">
              <br />
              <div className="main-product-details">
                <div>
                  <h5 className="heading-product">Product Details</h5>
                </div>

                <br />
                <div>
                  <p className="paragraph">Product Title :</p>
                  <small>{this.state.marketplaceItem.productName}</small>
                </div>

                <br />

                <div>
                  <p className="paragraph">Product Description :</p>
                  <small>{this.state.marketplaceItem.description}</small>
                </div>

                <br />

                <div>
                  <p className="paragraph">Product Price :</p>
                  <small>${this.state.marketplaceItem.price}</small>
                </div>
              </div>

              <br />
              <div className="main-product-details">
                <div>
                  <h5 className="heading-product">Seller Informations</h5>
                </div>

                <br />
                <div>
                  <p className="paragraph">Seller Name :</p>
                  <small>{this.state.fullName}</small>
                </div>

                <br />

                <div>
                  <p className="paragraph">Seller Email Address :</p>
                  <small>{this.state.email}</small>
                </div>

                <br />

                <div>
                  <p className="paragraph">Seller Phone Number :</p>
                  <small>{this.state.phone}</small>
                </div>

                <br />

                <div>
                  <p className="paragraph">Seller Zip Code :</p>
                  <small>{this.state.zip}</small>
                </div>
              </div>

              <br />

              <div>
                <button
                  type="button"
                  class="btn btn-success button-conversation"
                >
                  Start Conversation
                </button>
              </div>

              <br />

              <div>
                <label className="heading-product">Rate Your Experience</label>
              </div>

              <div className="stars">
                <label>Rate Your Experience</label>

                <ReactStars
                  count={5}
                  //   onChange={ratingChanged}
                  size={40}
                  color2={"#ffd700"}
                />
              </div>

              <div className="feedback">
                <label className="feed-label">feedback</label>
                <label>(optional</label>
              </div>

              <div className="complete">
                <p>complete</p>
              </div>

              <div className="main-product-details">
                <div>
                  <h5 className="heading-product">Buyer Feedback :</h5>
                </div>

                <br />
                {console.log("this.state.getMarketPlaceItemRatings",this.state.getMarketPlaceItemRatings)}

                {this.state.getMarketPlaceItemRatings && this.state.getMarketPlaceItemRatings.length > 0
                  ? this.state.getMarketPlaceItemRatings.map((val, ind) => {
                      return (
                        <div key={ind} className="star-para-items">
                          <div>
                            <p>Product : Seller Name</p>
                            <p className="small-paragraph">
                              Buyer: Parent {val.name}
                            </p>
                            <p className="small-paragraph">{val.feedback}</p>
                          </div>
                          <div>
                            <ReactStars
                              count={5}
                              value={val.rating}
                              //   onChange={ratingChanged}
                              size={20}
                              color2={"#ffd700"}
                            />
                          </div>
                        </div>
                      );
                    })
                  : null}
              </div>

              <br />
              <div>
                <small
                  onClick={() => this.props.history.push("AllFeedbackItem")}
                  className="heading-product"
                >
                  View all feedbacks
                </small>
              </div>

              <br />

              <div className="main-product-details">
                <div>
                  <h5 className="heading-product">Seller Previous History :</h5>
                </div>

                <br />

                <div className="star-para-items">
                  <div>
                    <p>Product Name : Collars</p>
                    <p className="small-paragraph">
                      Description : Bling Collars
                    </p>
                    <p className="small-paragraph">Category: Accessories</p>
                  </div>
                  <div>
                    <ReactStars
                      count={5}
                      //   onChange={ratingChanged}
                      value={5}
                      size={20}
                      color2={"#ffd700"}
                    />
                  </div>
                </div>
                <br />
                <div className="star-para-items">
                  <div>
                    <p>Product Name : ASF</p>
                    <p className="small-paragraph">Description : Addds</p>
                    <p className="small-paragraph">Category: Pet Toys</p>
                  </div>
                  <div>
                    <ReactStars
                      count={5}
                      value={4.5}
                      size={20}
                      color2={"#ffd700"}
                    />
                  </div>
                </div>
              </div>

              <br />
              <div>
                <small
                  onClick={() => {
                    this.props.history.push("AllMarketPlaceItems")
                  }}
                  className="heading-product"
                >
                  View all feedbacks
                </small>
              </div>
            </div>
          </div>
          <Rightsidenav {...this.props} />
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  state: state,
});
const mapDispatchToProps = (dispatch) => ({
  getMarketPlaceItemIsRated: bindActionCreators(
    getMarketPlaceItemIsRated,
    dispatch
  ),
  getMarketPlaceItemRatings: bindActionCreators(
    getMarketPlaceItemRatings,
    dispatch
  ),
});

export default connect(mapStateToProps, mapDispatchToProps)(MarketPlaceItem);
