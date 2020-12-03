import React from "react";
import "./AllFeedBackItem.css";
import Rightsidenav from "../../RightSideNav";
import Sidenav from "../../SideNav";
import ReactStars from "react-stars";

class AllFeedBackItem extends React.Component {
  constructor(props){
    super(props)
  }

  componentDidMount(){
    window.scroll(0,0);
  }

  render(){
  return (
    <div className="App">
      {/* <img className="logo" src={require("./assets/logo_big.svg" )} alt="slooth" /> */}
      <div className="main">
        <Sidenav {...this.props} />
        {/* ******************* CENTER ********************* */}
        <div className="feedback-center">
          <div className="heading-logo">
            <h4 className="services">All Feedback Of Item</h4>
          </div>

          <hr />

          <div className="all-feedback">
            <div>
              <div className="all-products">
                <span className="products-name">Product Name : </span>
                <span>Jadklfj</span>
              </div>
              <div className="all-products">
                <span className="products-name">Product Category : </span>
                <span>Furniture</span>
              </div>
              <div className="all-products star-products">
                <span className="products-name">Product Net Rating : </span>
                <span className="stars-feedbeck">
                  
                  <ReactStars
                    count={5}
                    //   onChange={ratingChanged}
                    value={5}
                    size={20}
                    color2={"#ffd700"}
                  />
                </span>
              </div>
            </div>
            

            <div>
              <span className="products-name">All Feedbacks :</span>
            </div>

            <br />
            <div>
              <span>Product: Seller Name</span>
              <div className="buyer-parent">
                <small>Buyer : Parent : </small>
                <span className="parent-stars">
          
                <ReactStars
                count={5}
value={4.5}
                size={20}
                color2={"#ffd700"}
              />
                </span>
             
              </div>

              <small>"H"</small>
            </div>
          </div>
        </div>
        <Rightsidenav {...this.props} />
      </div>
    </div>
  );
}
}

export default AllFeedBackItem;
