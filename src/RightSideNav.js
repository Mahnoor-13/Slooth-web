import React from "react";
import "./RightSideNav.css";
import Box from "@material-ui/core/Box";
import Popover from "@material-ui/core/Popover";
import PopupState, { bindTrigger, bindPopover } from "material-ui-popup-state";
import ImageLightBox from "./Components/ImageLightBox/ImageLightBox";
const users = [
  {
    name: "Jackson james",
    img:
      "https://images.unsplash.com/photo-1497316730643-415fac54a2af?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80",
    text: "Hello",
  },
  {
    name: "Kate livingstone",
    img:
      "https://images.statusfacebook.com/profile_pictures/unique-dp/unique-profile-pictures-for-whatsapp-18.jpg",
    text: "Hey",
  },

  {
    name: "Puppy",
    img: require("./assets/jp.jpg"),
    text: "Good evening",
  },
];

class RightSideNav extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeChats: [],
      imagelightBox: false,
    };
  }

  onClose=()=>{
    this.setState({imagelightBox:false});
  }
  render() {
    return (
      <div className="App">
        {/* <img className="logo" src={require("./assets/logo_big.svg" )} alt="slooth" /> */}
        <div className="main-right">
          {/* right hand side */}
          <div className="main-search">
            <div className="p-1 bg-light rounded rounded-pill shadow-sm mb-4 search-bar search-rightside">
              <div className="input-group">
                <div className="input-group-prepend">
                  <button
                    id="button-addon2"
                    type="submit"
                    className="btn btn-link text-secondary"
                  >
                    <i className="fa fa-search"></i>
                  </button>
                </div>
                <input
                  type="search"
                  placeholder="What're you searching for?"
                  aria-describedby="button-addon2"
                  className="form-control border-0 bg-light foam search-right"
                />
              </div>
            </div>
            <div className="bbrr">
              <div className="headings-rightnav1">Photos</div>

              <div className="top-images">
                <img
                  onClick={() => this.setState({ imagelightBox: true })}
                  className="top left"
                  src="http://placekitten.com/1500/1500"
                ></img>
                <img className="top" src={require("./assets/pet.jpg")}></img>
                <img
                  className="top right"
                  src={require("./assets/pet.jpg")}
                ></img>
              </div>
              <div className="down-images">
                <img
                  className="down d-left"
                  src={require("./assets/pet.jpg")}
                ></img>
                <img className="down " src={require("./assets/pet.jpg")}></img>
                <img
                  className="down d-right"
                  src={require("./assets/pet.jpg")}
                ></img>
              </div>

              <div className="headings-rightnav2">Advertisements</div>

              <div
                id="carouselExampleControls"
                class="carousel slide slide"
                data-ride="carousel"
              >
                <div class="carousel-inner">
                  <div class="carousel-item active">
                    <img
                      height="200"
                      class="d-block w-100"
                      src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcT2eCmaugrmtyuCrDGDhRDoZmCB8rzSvzvmO9flpfFZYopbLiGF&usqp=CAU"
                      alt="Second slide"
                    />
                  </div>
                  <div class="carousel-item">
                    <img
                      height="200"
                      class="d-block w-100"
                      src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQQB-24GTTGG3JxaTWK-klj_CR2yQRxjCV8JZ3a63pQ3PK3eU6S&usqp=CAU"
                      alt="Third slide"
                    />
                  </div>
                </div>
                <a
                  class="carousel-control-prev"
                  href="#carouselExampleControls"
                  role="button"
                  data-slide="prev"
                >
                  <span
                    class="carousel-control-prev-icon"
                    aria-hidden="true"
                  ></span>
                  <span class="sr-only">Previous</span>
                </a>
                <a
                  class="carousel-control-next"
                  href="#carouselExampleControls"
                  role="button"
                  data-slide="next"
                >
                  <span
                    class="carousel-control-next-icon"
                    aria-hidden="true"
                  ></span>
                  <span class="sr-only">Next</span>
                </a>
              </div>
            </div>

            <div className="img-chat-div">
              {this.state.activeChats.map((val, ind) => {
                return (
                  <PopupState
                    key={ind}
                    variant="popover"
                    popupId="demo-popup-popover"
                  >
                    {(popupState) => (
                      <div>
                        <div
                          className="chat-fixed-text"
                          onClick={() => {
                            this.state.activeChats.splice(ind, 1);
                            this.setState({
                              activeChats: this.state.activeChats,
                            });
                          }}
                        >
                          <div>x</div>
                        </div>

                        <div
                          className="chat-fixed"
                          variant="contained"
                          color="primary"
                          {...bindTrigger(popupState)}
                        >
                          <img className="img-chat" src={val.img} />
                        </div>
                        <Popover
                          {...bindPopover(popupState)}
                          anchorOrigin={{
                            vertical: "top",
                            horizontal: "top",
                          }}
                          transformOrigin={{
                            vertical: "top",
                            horizontal: "top",
                          }}
                        >
                          <Box p={2} style={{ padding: "3%" }}>
                            <div className="chat-div-1">
                              <div
                                style={{ height: "12%" }}
                                className="chat-div-2"
                              >
                                <div className="chat-div-3">
                                  <img
                                    className="profile-img-chat"
                                    src={val.img}
                                  />
                                  <span className="user-name">{val.name}</span>
                                </div>
                                <div>x</div>
                              </div>
                              <div style={{ height: "60%" }}>
                                <div style={{ display: "flex" }}>
                                  <img
                                    className="profile-img-chat"
                                    src={val.img}
                                  />
                                  <div className="chat-message">{val.text}</div>
                                </div>
                              </div>
                              <div
                                style={{
                                  display: "flex",
                                  height: "9%",
                                  justifyContent: "space-around",
                                }}
                              >
                                <input type="text" className="chat-input" />
                                <span>send</span>
                              </div>
                            </div>
                          </Box>
                        </Popover>
                      </div>
                    )}
                  </PopupState>
                );
              })}
            </div>
           
            <div>
              {/* <h5 className="heading-font">You might like</h5> */}
              <div className="input-group search-contacts">
                {/* <h5 className="heading-font">Contacts</h5> */}
                <div className="headings-rightnav2">Contacts</div>

                <div className="input-group-prepend">
                  <button
                    id="button-addon2"
                    type="submit"
                    className="btn btn-link text-secondary"
                  >
                    <i className="fa fa-search"></i>
                  </button>
                </div>
               
              </div>

              <hr />

              {users.map((val, ind) => {
                return (
                  <div>
                    <div
                      className="images-right"
                      onClick={() =>
                        this.setState({
                          activeChats: [
                            ...this.state.activeChats,
                            { img: val.img, name: val.name, text: val.text },
                          ],
                        })
                      }
                    >
                      <img className="pet10" src={val.img} />

                      <div className="right-border">
                        <a className="name-br">{val.name}</a>
                      </div>
                      <div></div>
                    </div>

                    <hr />
                  </div>
                );
              })}


              <div>
                <a className="down-anc" href="#">
                  show more
                </a>
              </div>
            </div>

            <div className="bottom-border">
              <h5 className="heading-font">Trending on Slooth</h5>

              <hr />

              <div className="full-right">
                <small className="para-down">1. celebrities</small>
                <p className="para-bold">#RightChoiceSid</p>
                <p className="paaa">123k Posts</p>
                <div className="arrow-down">
                  <i className="fa fa-angle-down" aria-hidden="true"></i>
                </div>
                <hr />
              </div>

              <div className="full-right">
                <small className="para-down">1. celebrities</small>
                <p className="para-bold">#RightChoiceSid</p>
                <p className="paaa">123k Posts</p>
                <div className="arrow-down">
                  <i className="fa fa-angle-down" aria-hidden="true"></i>
                </div>
                <hr />
              </div>
              <div className="full-right">
                <small className="para-down">1. celebrities</small>
                <p className="para-bold">#RightChoiceSid</p>
                <p className="paaa">123k Posts</p>
                <div className="arrow-down">
                  <i className="fa fa-angle-down" aria-hidden="true"></i>
                </div>
                <hr />
              </div>

              <div className="full-right">
                <small className="para-down">1. celebrities</small>
                <p className="para-bold">#RightChoiceSid</p>
                <p className="paaa">123k Posts</p>
                <div className="arrow-down">
                  <i className="fa fa-angle-down" aria-hidden="true"></i>
                </div>
                <hr />
              </div>
            </div>
          </div>
        </div>
         <ImageLightBox isOpen={this.state.imagelightBox} onClose={this.onClose} /> 
      </div>
    );
  }
}

export default RightSideNav;
