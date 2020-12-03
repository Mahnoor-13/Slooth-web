import React from "react";
import "./Comments.css";
import Sidenav from "./SideNav";
import RightSideNav from "./RightSideNav";
import * as firebase from "firebase";
class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      userId: firebase.auth().currentUser
        ? firebase.auth().currentUser.uid
        : "rC38RLj73eT3yBhiia1xK9Efqwh2",

      fullName: "Puppy",
      profilePic: "",
    };
  }

  componentDidMount() {
    // if (!firebase.auth().currentUser) {
    //   this.props.history.pop();
    // }

    firebase
      .database()
      .ref(`users/${this.state.userId}/`)
      .on("value", (val) => {
        console.log(val);
        this.setState({
          fullName: val.val().fullName !== "" ? val.val().fullName : "Puppy",
          profilePic: val.val().profilePic,
        });
      });
  }

  render() {
    return (
      <div className="App">
        {/* <img className="logo" src={require("./assets/logo_big.svg" )} alt="slooth" /> */}
        <div className="main">
          <Sidenav {...this.props} profilePic={this.state.profilePic} />
          {/* ******************* CENTER ********************* */}

          <div className="center-comment">
            <div className="arrow-comment">
              <div className="parent-comment">
                <div className="child-comment">
                  <i className="fa fa-arrow-left back-comment" aria-hidden="true"></i>
                  <span className="slooth-comment">Selected Post</span>
                </div>
              </div>
            </div>
            <hr />
            <div>
              <div className="pup-para-comment">
                <div>
                  <img
                    className="pet3-comment"
                    src={require("./assets/jp.jpg")}
                  />
                </div>

                <div className="anc-y-comment">
                  <a className="pup-anc-comment" href="#">
                    Puppy
                  </a>
                  <p className="pup-comment">1 June, 2020</p>
                </div>
              </div>

              <div>
                <p className="last-p-comment">
                  #Women Empowerment isn't about just featuring successful
                  women, it is about focusing on health, comfort of women across
                  the country.
                </p>
                <div className="img-para-comment">
                  <div>
                    <img
                      className="pet4-comment"
                      src="data:image/jpeg;base64,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"
                    />
                  </div>
                  <div className="para-comment">
                    <p className="para-dog-comnt">
                      The dog is very active and playful. Jack takes rice,other
                      food..
                    </p>
                    <p className="paaragraph-comnt">
                      WomenEmpowerment isn't about just featuring successful
                      women, it is about focusing on health, hygiene & comfort
                      of women across the country.
                    </p>
                  </div>
                </div>
              </div>

              <div className="time-coment">
                <p>06:36 . May 10, 2020 . </p>
                <a href="#">SocialFlow</a>
              </div>

              <hr />

              <div className="time-coment">
                <a href="#" className="retweets-comment">
                  256 <span className="anchor-color-coment">Retweets</span>
                </a>
                &nbsp; &nbsp; &nbsp;
                <a href="#" className="retweets-comment">
                  456 <span className="anchor-color-coment">Likes</span>
                </a>
              </div>
            </div>
            <hr />

            <div className="noti-comment">
              <div className="display-comment">
                <i
                  className="fa fa-comment-o noot-comment"
                  aria-hidden="true"
                ></i>
                &nbsp;
                <p>19</p>
              </div>

              <div className="display-comment">
                <i
                  className="fa fa-heart-o noot-comment"
                  aria-hidden="true"
                ></i>
                &nbsp; <p>23</p>
              </div>

              <div className="display-comment">
                <i
                  className="fa fa-bookmark-o noot-comment"
                  aria-hidden="true"
                ></i>
                &nbsp; <p>49</p>
              </div>

              <div className="display-comment">
                <img
                  className="arrowup noot-comment"
                  src={require("./assets/arrows.png")}
                ></img>
                &nbsp;
                <p>34</p>
              </div>
            </div>

            <hr />
            <div>
              <div className="pup-para-comment-section">
                <div>
                  <img
                    className="pet3-comment-section"
                    src={require("./assets/kitten.jpg")}
                  />
                </div>

                <div className="anc-y-comment-section">
                  <a className="pup-anc-comment-section" href="#">
                    Puppy
                  </a>

                  <span className="small-com">@petr123</span>
                  <span className="small-com"> . </span>
                  <span>
                    <a href="#" className="hours-com">
                      6h
                    </a>
                  </span>
                  <p className="pup-comment-section">
                    Replying to <a href="#">@Puppy</a>
                  </p>
                </div>
              </div>

              <div>
                <p className="last-p-comment-section">
                  #Women Empowerment isn't about just featuring successful
                  women, it is about focusing on health, comfort of women across
                  the country.
                </p>
              </div>
            </div>

            <div className="noti-comment-section">
              <div className="display-comment-section">
                <i
                  className="fa fa-comment-o noot-comment-section"
                  aria-hidden="true"
                ></i>
                &nbsp;
                <p>18</p>
              </div>

              <div className="display-comment-section">
                <i
                  className="fa fa-heart-o nootcomment-section"
                  aria-hidden="true"
                ></i>
                &nbsp; <p>23</p>
              </div>

              <div className="display-comment-section">
                <i
                  className="fa fa-bookmark-o noot-comment-section"
                  aria-hidden="true"
                ></i>
              </div>

              <div className="display-comment-section">
                <img
                  className="arrowup noot-comment-section"
                  src={require("./assets/arrows.png")}
                ></img>
                &nbsp;
                <p>14</p>
              </div>
            </div>
            <hr />
            <div>
              <div className="pup-para-comment-section">
                <div>
                  <img
                    className="pet3-comment-section"
                    src={require("./assets/kitten.jpg")}
                  />
                </div>

                <div className="anc-y-comment-section">
                  <a className="pup-anc-comment-section" href="#">
                    Puppy
                  </a>

                  <span className="small-com">@petr123</span>
                  <span className="small-com"> . </span>
                  <span>
                    <a href="#" className="hours-com">
                      6h
                    </a>
                  </span>
                  <p className="pup-comment-section">
                    Replying to <a href="#">@Puppy</a>
                  </p>
                </div>
              </div>

              <div>
                <p className="last-p-comment-section">
                  #Women Empowerment isn't about just featuring successful
                  women, it is about focusing on health, comfort of women across
                  the country.
                </p>
              </div>
            </div>

            <div className="noti-comment-section">
              <div className="display-comment-section">
                <i
                  className="fa fa-comment-o noot-comment-section"
                  aria-hidden="true"
                ></i>
                &nbsp;
                <p>18</p>
              </div>

              <div className="display-comment-section">
                <i
                  className="fa fa-heart-o nootcomment-section"
                  aria-hidden="true"
                ></i>
                &nbsp; <p>23</p>
              </div>

              <div className="display-comment-section">
                <i
                  className="fa fa-bookmark-o noot-comment-section"
                  aria-hidden="true"
                ></i>
              </div>

              <div className="display-comment-section">
                <img
                  className="arrowup noot-comment-section"
                  src={require("./assets/arrows.png")}
                ></img>
                &nbsp;
                <p>14</p>
              </div>
            </div>
            <hr />
          </div>

          {/* right hand side */}
          <RightSideNav {...this.props} />
        </div>
      </div>
    );
  }
}

export default App;
