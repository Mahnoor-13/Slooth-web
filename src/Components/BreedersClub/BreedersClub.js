/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import "../../YourGroup.css";
import "./BreedersClub.css";
import Sidenav from "../../SideNav";
import Rightsidenav from "../../RightSideNav";
// import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import FavoriteBorderIcon from "@material-ui/icons/Favorite";
import FavoriteunderliIcon2 from "@material-ui/icons/FavoriteBorder";

import ChatOutlinedIcon from "@material-ui/icons/ChatOutlined";
import ShareOutlinedIcon from "@material-ui/icons/ShareOutlined";
// import BookmarkBorderOutlinedIcon from "@material-ui/icons/BookmarkBorderOutlined";
import BookmarkIcon from "@material-ui/icons/Bookmark";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import ReactStars from "react-stars";
import PetsIcon from "@material-ui/icons/Pets";

import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import SkipPreviousIcon from "@material-ui/icons/SkipPrevious";
import Button from "@material-ui/core/Button";

const pets = [
  {
    title: "Pet for sale",
    price: "$100",
    image: require("../../assets/doghouse4.jpg"),
    like: false,
  },
  {
    title: "Pet along with pethouse",
    price: "$300",
    image: require("../../assets/doghouse1.jpg"),
    like: true,
  },
  {
    title: "Puppy",
    price: "$200",
    image: require("../../assets/doghouse6.jpg"),
    like: true,
  },
];

function App({ ...props }) {
  return (
    // <div className="App">
    //   {/* <img className="logo" src={require("../../assets/logo_big.svg" )} alt="slooth" /> */}
    //   <div className="main">
    //     <Sidenav {...props} />
    //     {/* ******************* CENTER ********************* */}

    //     <div className="discover-cntr breeders-club-center">
    //       <div className="heading-logo">
    //         <h4 className="services-discover">
    //           <PetsIcon /> Breeder's Club
    //         </h4>
    //       </div>

    //       <div class="p-1 rounded rounded-pill shadow-sm mb-4 search-breeders-club">
    //         <div class="input-group">
    //           <div class="input-group-prepend">
    //             <button
    //               id="button-addon2"
    //               type="submit"
    //               class="btn btn-link text-secondary"
    //             >
    //               <i class="fa2 fa fa-search"></i>
    //             </button>
    //           </div>
    //           <input
    //             type="search"
    //             placeholder="Search pet to buy.."
    //             aria-describedby="button-addon2"
    //             class="form-control form-control2 "
    //           />
    //         </div>
    //       </div>

    //       <hr />

    //       <ul class="nav market-navtab">
    //         <li>
    //           <a className="your-group" href="#">
    //             BreedersClub Home
    //           </a>
    //         </li>

    //         <li>
    //           <a
    //             className="furniture-discover"
    //             href="#"
    //             onClick={() => props.history.push("/creategroup")}
    //           >
    //             Live Pet Auction
    //           </a>
    //         </li>

    //         <li>
    //           <a
    //             className="furniture-discover"
    //             href="#"
    //             onClick={() => props.history.push("/creategroup")}
    //           >
    //             Sell your pet
    //           </a>
    //         </li>
    //       </ul>
    //       <hr />

    //       <div>
    //         <div className="available-pets">
    //           <p className="furniture-discover">Available for sale </p>
    //         </div>
    //         <div className="carousel-div">
    //           <Carousel>
    //             <div>
    //               <img src={require("../../assets/dog-discover2.jpeg")} />
    //               <div className="legend">
    //                 <div class="legend-details">
    //                   <div>Details</div>
    //                   <div className="inside-legend-div">
    //                     <div>Name: Zooro puppy</div>
    //                     <div>Breed: German</div>
    //                     <div>Type: Dog</div>
    //                     <div>Gender: Male</div>
    //                     <div>Age: 3 years</div>
    //                     <div>Color: light brown</div>
    //                   </div>
    //                 </div>
    //                 <div className="seller-details">
    //                   <div>
    //                     <div>Status: </div>
    //                     <div className="available-for-sale">
    //                       Available for sale
    //                     </div>
    //                   </div>
    //                   <div>
    //                     <div>Seller Ratings</div>
    //                     <ReactStars count={5} size={20} color2={"#ffd700"} />
    //                   </div>
    //                   <div type="button" className="para-alert4 click-here btn">
    //                     Click here
    //                   </div>
    //                 </div>
    //               </div>
    //             </div>
    //             <div>
    //               <img src={require("../../assets/doghouse2.jpg")} />
    //               <p className="legend">Legend 2</p>
    //             </div>
    //             <div>
    //               <img src={require("../../assets/dog-discover2.jpeg")} />
    //               <p className="legend">Legend 3</p>
    //             </div>
    //             <div>
    //               <img src={require("../../assets/dog-discover2.jpeg")} />
    //               <p className="legend">Legend 1</p>
    //             </div>
    //             <div>
    //               <img src={require("../../assets/dog-discover2.jpeg")} />
    //               <p className="legend">Legend 2</p>
    //             </div>
    //             <div>
    //               <img src={require("../../assets/dog-discover2.jpeg")} />
    //               <p className="legend">Legend 3</p>
    //             </div>
    //             <div>
    //               <img src={require("../../assets/dog-discover2.jpeg")} />
    //               <p className="legend">Legend 1</p>
    //             </div>
    //             <div>
    //               <img src={require("../../assets/dog-discover2.jpeg")} />
    //               <p className="legend">Legend 2</p>
    //             </div>
    //             <div>
    //               <img src={require("../../assets/dog-discover2.jpeg")} />
    //               <p className="legend">Legend 3</p>
    //             </div>
    //           </Carousel>
    //         </div>
    //       </div>
    //       <div className="pet-categories-div">
    //         <hr />

    //         <div className="pet-categories-see-all">
    //           <p className="furniture-discover">Pet Categories</p>
    //           <p className="your-group">See All</p>
    //         </div>
    //       </div>
    //       <div class="container hide-scrollbar">
    //         <div className="story-div">
    //           <img
    //             src={require("../../assets/dog-discover2.jpeg")}
    //             alt="Snow"
    //             className="story-imgs"
    //           />

    //           <div class="bottom-left b-l1">Dog</div>
    //         </div>

    //         <div className="story-div">
    //           <img
    //             src={require("../../assets/puppy-disc.jpg")}
    //             className="story-imgs"
    //           />

    //           <div class="bottom-left b-l2">Puppy</div>
    //         </div>

    //         <div className="story-div">
    //           <img src={require("../../assets/aj.jpg")} className="story-imgs" />

    //           <div class="bottom-left b-l3">Cats</div>
    //         </div>
    //       </div>

    //       <div className="no-comments-yet">New Pets for Sale</div>
    //       <div className="individual-posts">
    //         <div className="post-header">
    //           <div className="profile-name">
    //             <div className="pet-discover">
    //               <img
    //                 className="pet-pic"
    //                 src={require("../../assets/profile.jpg")}
    //               />
    //             </div>

    //             <div className="name-puppy">
    //               <h5 className="heading-h4-discover">Sam</h5>
    //               <p className="para-3">@sam23</p>
    //             </div>
    //           </div>
    //           <div>
    //             <p className="discover-dots">...</p>
    //           </div>
    //         </div>

    //         <div className="post-image-relative">
    //           <div>
    //             <img
    //               src={require("../../assets/doghouse4.jpg")}
    //               className="flower-img"
    //             />
    //           </div>

    //           <div class="top-right top-right-fixed">
    //             <div className="icons-all-disc">
    //               <FavoriteBorderIcon
    //                 className="post-icons"
    //                 style={{ color: "red" }}
    //               />
    //             </div>
    //             <div className="icons-all-disc">
    //               <ChatOutlinedIcon className="post-icons" />
    //             </div>
    //             <div className="icons-all-disc">
    //               <ShareOutlinedIcon className="post-icons" />
    //             </div>
    //             <div className="icons-all-disc">
    //               <BookmarkIcon
    //                 style={{ color: "yellow" }}
    //                 className="post-icons"
    //               />
    //             </div>
    //           </div>
    //         </div>

    //         <div className="no-comments-yet">
    //           Its Sam here, Selling my pet with a flexible price, contact for
    //           further infor thanks
    //         </div>
    //       </div>
    //     </div>
    //     <Rightsidenav {...props} />
    //   </div>
    // </div>

    // <div className="App">
    //   {/* <img className="logo" src={require("../../assets/logo_big.svg" )} alt="slooth" /> */}
    //   <div className="main">
    //     <Sidenav {...props} />
    //     {/* ******************* CENTER ********************* */}

    //     <div className="discover-cntr breeders-club-center">
    //       <div className="heading-logo">
    //         <h4 className="services-discover">
    //           <PetsIcon /> Breeder's Club
    //         </h4>
    //       </div>

    //       <div class="p-1 rounded rounded-pill shadow-sm mb-4 search-breeders-club">
    //         <div class="input-group">
    //           <div class="input-group-prepend">
    //             <button
    //               id="button-addon2"
    //               type="submit"
    //               class="btn btn-link text-secondary"
    //             >
    //               <i class="fa2 fa fa-search"></i>
    //             </button>
    //           </div>
    //           <input
    //             type="search"
    //             placeholder="Search pet to buy.."
    //             aria-describedby="button-addon2"
    //             class="form-control form-control2 "
    //           />
    //         </div>
    //       </div>

    //       <hr />

    //       <ul class="nav market-navtab">
    //         <li>
    //           <a className="furniture-discover" href="#">
    //             BreedersClub Home
    //           </a>
    //         </li>

    //         <li>
    //           <a
    //             className="your-group"
    //             href="#"
    //             onClick={() => props.history.push("/creategroup")}
    //           >
    //             Live Pet Auction
    //           </a>
    //         </li>

    //         <li>
    //           <a
    //             className="furniture-discover"
    //             href="#"
    //             onClick={() => props.history.push("/creategroup")}
    //           >
    //             Sell your pet
    //           </a>
    //         </li>
    //       </ul>
    //       <hr />

    //       <div className="pet-categories-div">
    //         <div className=".pet-categories-see-all-auctions">
    //           <p className="furniture-discover">Pet Categories</p>
    //           <p className="your-group">See All</p>
    //         </div>
    //       </div>
    //       <div class="container hide-scrollbar">
    //         <div className="story-div">
    //           <img
    //             src={require("../../assets/dog-discover2.jpeg")}
    //             alt="Snow"
    //             className="story-imgs"
    //           />

    //           <div class="bottom-left b-l1">Dog</div>
    //         </div>

    //         <div className="story-div">
    //           <img
    //             src={require("../../assets/puppy-disc.jpg")}
    //             className="story-imgs"
    //           />

    //           <div class="bottom-left b-l2">Puppy</div>
    //         </div>

    //         <div className="story-div">
    //           <img src={require("../../assets/aj.jpg")} className="story-imgs" />

    //           <div class="bottom-left b-l3">Cats</div>
    //         </div>
    //       </div>

    //       <div>
    //         <hr />

    //         <div className="available-pets">
    //           <p className="furniture-discover">List of auctions</p>
    //         </div>

    //         <div className="card-images-div">
    //           {pets.map((val, ind) => {
    //             return (
    //               <Card className="card-images" key={ind}>
    //                 <div className="inside-card-images">
    //                   <div className="card-image-content">
    //                     <div className="image-padding">
    //                       <CardMedia
    //                         image={val.image}
    //                         title="Live from space album cover"
    //                         className="card-main-image"
    //                       />
    //                     </div>
    //                     <CardContent className="card-content">
    //                       <Typography
    //                         component="h6"
    //                         variant="h6"
    //                         className="text-1"
    //                       >
    //                         {val.title}
    //                       </Typography>
    //                       <Typography
    //                         variant="subtitle1"
    //                         color="textSecondary"
    //                         className="text-2"
    //                       >
    //                         Mac Miller
    //                       </Typography>
    //                     </CardContent>
    //                   </div>
    //                   <div className="card-image-pricing">
    //                     <div className="heart-icon-auction">
    //                       <div className="auction-pet-type1">
    //                         12hrs 32mins rem
    //                       </div>

    //                       {val.like ? (
    //                         <FavoriteBorderIcon
    //                           className="post-icons"
    //                           style={{ color: "red" }}
    //                         />
    //                       ) : (
    //                         <FavoriteunderliIcon2
    //                           className="post-icons"
    //                           style={{ color: "red" }}
    //                         />
    //                       )}
    //                     </div>
    //                     <div className="inside-card-image-pricing">
    //                       <div className="pet-info">{val.price}</div>
    //                       <div className="stars-total-stars">
    //                         <div>
    //                           <ReactStars
    //                             count={5}
    //                             size={15}
    //                             value={5}
    //                             color2={"#ffd700"}
    //                           />
    //                         </div>
    //                         <div className="pet-info non-price"> (4)</div>
    //                       </div>
    //                       <div className="pet-info non-price">$100</div>
    //                       <div className="pet-info non-price">$100</div>
    //                     </div>
    //                   </div>
    //                 </div>

    //                 <div className="live-auction-preview">
    //                   <div className="auction-pet-type">
    //                     Highest Bidder: Marcus ($200)
    //                   </div>
    //                   <div className="live-auction-preview-buttons">
    //                     <Button
    //                       variant="contained"
    //                       color="secondary"
    //                       className="live-auction-button"
    //                     >
    //                       Live Auction
    //                     </Button>
    //                     <Button
    //                       variant="outlined"
    //                       color="primary"
    //                       className="live-preview-button"
    //                     >
    //                       Preview
    //                     </Button>
    //                   </div>
    //                 </div>
    //               </Card>
    //             );
    //           })}
    //         </div>
    //       </div>

    //       <div className="no-comments-yet">New Pets for Sale</div>
    //       <div className="individual-posts">
    //         <div className="post-header">
    //           <div className="profile-name">
    //             <div className="pet-discover">
    //               <img
    //                 className="pet-pic"
    //                 src={require("../../assets/profile.jpg")}
    //               />
    //             </div>

    //             <div className="name-puppy">
    //               <h5 className="heading-h4-discover">Sam</h5>
    //               <p className="para-3">@sam23</p>
    //             </div>
    //           </div>
    //           <div>
    //             <p className="discover-dots">...</p>
    //           </div>
    //         </div>

    //         <div className="post-image-relative">
    //           <div>
    //             <img
    //               src={require("../../assets/doghouse4.jpg")}
    //               className="flower-img"
    //             />
    //           </div>

    //           <div class="top-right top-right-fixed">
    //             <div className="icons-all-disc">
    //               <FavoriteBorderIcon
    //                 className="post-icons"
    //                 style={{ color: "red" }}
    //               />
    //             </div>
    //             <div className="icons-all-disc">
    //               <ChatOutlinedIcon className="post-icons" />
    //             </div>
    //             <div className="icons-all-disc">
    //               <ShareOutlinedIcon className="post-icons" />
    //             </div>
    //             <div className="icons-all-disc">
    //               <BookmarkIcon
    //                 style={{ color: "yellow" }}
    //                 className="post-icons"
    //               />
    //             </div>
    //           </div>
    //         </div>

    //         <div className="no-comments-yet">
    //           Its Sam here, Selling my pet with a flexible price, contact for
    //           further infor thanks
    //         </div>
    //       </div>
    //     </div>
    //     <Rightsidenav {...props} />
    //   </div>
    // </div>

    <div className="App">
      {/* <img className="logo" src={require("../../assets/logo_big.svg" )} alt="slooth" /> */}
      <div className="main">
        <Sidenav {...props} />
        {/* ******************* CENTER ********************* */}

        <div className="discover-cntr breeders-club-center">
          <div className="heading-logo">
            <h4 className="services-discover">
              <PetsIcon /> Breeder's Club
            </h4>
          </div>

          <hr />

          <ul class="nav market-navtab">
            <li>
              <a className="furniture-discover" href="#">
                BreedersClub Home
              </a>
            </li>

            <li>
              <a
                className="your-group"
                href="#"
                onClick={() => props.history.push("/creategroup")}
              >
                Live Pet Auction
              </a>
            </li>

            <li>
              <a
                className="furniture-discover"
                href="#"
                onClick={() => props.history.push("/creategroup")}
              >
                Sell your pet
              </a>
            </li>
          </ul>
          <hr />

          <div class="container hide-scrollbar">
            <div className="story-div">
              <img
                src={require("../../assets/dog-discover2.jpeg")}
                alt="Snow"
                className="story-imgs"
              />

              <div class="bottom-left b-l1">Dog</div>
            </div>

            <div className="story-div">
              <img
                src={require("../../assets/puppy-disc.jpg")}
                className="story-imgs"
              />

              <div class="bottom-left b-l2">Puppy</div>
            </div>

            <div className="story-div">
              <img
                src={require("../../assets/aj.jpg")}
                className="story-imgs"
              />

              <div class="bottom-left b-l3">Cats</div>
            </div>
          </div>

          <div>
            <hr />

            <div className="available-pets">
              <p className="furniture-discover">List of auctions</p>
            </div>

            <div className="card-images-div">
              {pets.map((val, ind) => {
                return (
                  <Card className="card-images" key={ind}>
                    <div className="inside-card-images">
                      <div className="card-image-content">
                        <div className="image-padding">
                          <CardMedia
                            image={val.image}
                            title="Live from space album cover"
                            className="card-main-image"
                          />
                        </div>
                        <CardContent className="card-content">
                          <Typography
                            component="h6"
                            variant="h6"
                            className="text-1"
                          >
                            {val.title}
                          </Typography>
                          <Typography
                            variant="subtitle1"
                            color="textSecondary"
                            className="text-2"
                          >
                            Mac Miller
                          </Typography>
                        </CardContent>
                      </div>
                      <div className="card-image-pricing">
                        <div className="heart-icon-auction">
                          <div className="auction-pet-type1">
                            12hrs 32mins rem
                          </div>

                          {val.like ? (
                            <FavoriteBorderIcon
                              className="post-icons"
                              style={{ color: "red" }}
                            />
                          ) : (
                            <FavoriteunderliIcon2
                              className="post-icons"
                              style={{ color: "red" }}
                            />
                          )}
                        </div>
                        <div className="inside-card-image-pricing">
                          <div className="pet-info">{val.price}</div>
                          <div className="stars-total-stars">
                            <div>
                              <ReactStars
                                count={5}
                                size={15}
                                value={5}
                                color2={"#ffd700"}
                              />
                            </div>
                            <div className="pet-info non-price"> (4)</div>
                          </div>
                          <div className="pet-info non-price">$100</div>
                          <div className="pet-info non-price">$100</div>
                        </div>
                      </div>
                    </div>

                    <div className="live-auction-preview">
                      <div className="auction-pet-type">
                        Highest Bidder: Marcus ($200)
                      </div>
                      <div className="live-auction-preview-buttons">
                        <Button
                          variant="contained"
                          color="secondary"
                          className="live-auction-button"
                        >
                          Live Auction
                        </Button>
                        <Button
                          variant="outlined"
                          color="primary"
                          className="live-preview-button"
                        >
                          Preview
                        </Button>
                      </div>
                    </div>
                  </Card>
                );
              })}
            </div>
          </div>

          <div className="no-comments-yet">New Pets for Sale</div>
          <div className="individual-posts">
            <div className="post-header">
              <div className="profile-name">
                <div className="pet-discover">
                  <img
                    className="pet-pic"
                    src={require("../../assets/profile.jpg")}
                  />
                </div>

                <div className="name-puppy">
                  <h5 className="heading-h4-discover">Sam</h5>
                  <p className="para-3">@sam23</p>
                </div>
              </div>
              <div>
                <p className="discover-dots">...</p>
              </div>
            </div>

            <div className="post-image-relative">
              <div>
                <img
                  src={require("../../assets/doghouse4.jpg")}
                  className="flower-img"
                />
              </div>

              <div class="top-right top-right-fixed">
                <div className="icons-all-disc">
                  <FavoriteBorderIcon
                    className="post-icons"
                    style={{ color: "red" }}
                  />
                </div>
                <div className="icons-all-disc">
                  <ChatOutlinedIcon className="post-icons" />
                </div>
                <div className="icons-all-disc">
                  <ShareOutlinedIcon className="post-icons" />
                </div>
                <div className="icons-all-disc">
                  <BookmarkIcon
                    style={{ color: "yellow" }}
                    className="post-icons"
                  />
                </div>
              </div>
            </div>

            <div className="no-comments-yet">
              Its Sam here, Selling my pet with a flexible price, contact for
              further infor thanks
            </div>
          </div>
        </div>
        <Rightsidenav {...props} />
      </div>
    </div>
  );
}

export default App;
