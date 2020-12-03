import React from "react";
import "./AllMarketPlaceItems.css";
import Rightsidenav from "../../RightSideNav";
import Sidenav from "../../SideNav";
import ReactStars from "react-stars";

class AllMarketPlaceItems extends React.Component {
  render() {
    return (
      <div className="App">
        <div className="main">
          <Sidenav {...this.props} />
          {/* ******************* CENTER ********************* */}
          <div className="allmarketplace-center">
            <div className="heading-logo">
              <h4 className="services">Marketplace</h4>
            </div>
            <h6 className="services" style={{ textAlign: "center" }}>
              Seller listed items
            </h6>

            <hr />

            <div className="main-market-div">
              <div>
                <p className="seller-listed">Seller Listed Items</p>
              </div>

              <div className="star-para">
                <div>
                  <p>Product Name : Collars</p>
                  <p className="small-paragraph">Description : Bling Collars</p>
                  <p className="small-paragraph">Category: Accessories</p>
                </div>
                <div>
                  <ReactStars
                    count={5}
                    value={5}
                    size={20}
                    color2={"#ffd700"}
                  />
                </div>
              </div>

              <br />

              <div className="star-para">
                <div>
                  <p>Product Name : ASDFG </p>
                  <p className="small-paragraph">Description : asdfs</p>
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

              <br />

              <div className="star-para">
                <div>
                  <p>Product Name : ADN </p>
                  <p className="small-paragraph">Description : Tip</p>
                  <p className="small-paragraph">Category: Accessories</p>
                </div>
                <div>
                  <ReactStars
                    count={5}
                    //   onChange={ratingChanged}
                    size={20}
                    color2={"#ffd700"}
                  />
                </div>
              </div>

              <br />

              <div className="star-para">
                <div>
                  <p>Product Name : Ulu </p>
                  <p className="small-paragraph">Description : kmdf</p>
                  <p className="small-paragraph">Category: Furniture</p>
                </div>
                <div>
                  <ReactStars count={5} size={20} color2={"#ffd700"} />
                </div>
              </div>

              <br />

              <div className="star-para">
                <div>
                  <p>Product Name : Njadni </p>
                  <p className="small-paragraph">Description : Ttt</p>
                  <p className="small-paragraph">Category: Furniture</p>
                </div>
                <div>
                  <ReactStars
                    count={5}
                    //   onChange={ratingChanged}
                    size={20}
                    color2={"#ffd700"}
                  />
                </div>
              </div>

              <br />
              <div className="star-para">
                <div>
                  <p>Product Name : Ttt </p>
                  <p className="small-paragraph">Description : AAD</p>
                  <p className="small-paragraph">Category: Furniture</p>
                </div>
                <div>
                  <ReactStars
                    count={5}
                    //   onChange={ratingChanged}
                    size={20}
                    color2={"#ffd700"}
                  />
                </div>
              </div>

              <br />

              <div className="star-para">
                <div>
                  <p>Product Name : GASDF </p>
                  <p className="small-paragraph">Description : bubub</p>
                  <p className="small-paragraph">Category: Pet Toys</p>
                </div>
                <div>
                  <ReactStars
                    count={5}
                    //   onChange={ratingChanged}
                    size={20}
                    color2={"#ffd700"}
                  />
                </div>
              </div>
            </div>
          </div>
          <Rightsidenav {...this.props} />
        </div>
      </div>
    );
  }
}

export default AllMarketPlaceItems;
