import React from "react";
import "../Home/Home.css";
import "./MissingPet.css";
import Sidenav from "../../SideNav";
import RightSideNav from "../../RightSideNav";
import * as firebase from "firebase";
import { Map, InfoWindow, Marker, GoogleApiWrapper } from "google-maps-react";
const AnyReactComponent = ({ text }) => <div>{text}</div>;

class MissingPet extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      userId: firebase.auth().currentUser
        ? firebase.auth().currentUser.uid
        : "rC38RLj73eT3yBhiia1xK9Efqwh2",
      fullName: "Puppy",
      profilePic: "",
      show:false,
      id:null,
      petName: "",
      type:"",
      ownerName:"",
      img:require("../../assets/dog.png")
    };
  }

  componentDidMount() {
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

  change = (i) => {
    if(i === 1){
        this.setState({
            show:true,
            id:i,
            petName: "zooro",
            type:"dog",
            ownerName:"Marcus",
            img:require("../../assets/dog.png")
        })
    }
    if(i === 2){
        this.setState({
            show:true,
            id:i,
            petName: "pet 1",
            type:"dog",
            ownerName:"zacy",
            img:require("../../assets/doghouse1.jpg")
        })
    }
    if(i === 3){
        this.setState({
            show:true,
            id:i,
            petName: "tinypet",
            type:"dog",
            ownerName:"M.ZUB",
            img:require("../../assets/doghouse2.jpg")
        })
    }
  }

  close = () => {
      this.setState({show:false})
  }

  render() {
    var points = [
      { lat: 42.02, lng: -77.01 },
      { lat: 42.03, lng: -77.02 },
      { lat: 41.03, lng: -77.04 },
      { lat: 42.05, lng: -77.02 },
    ];
    var bounds = new this.props.google.maps.LatLngBounds();
    for (var i = 0; i < points.length; i++) {
      bounds.extend(points[i]);
    }
    return (
      <div className="App">
        <div className="main">
          <Sidenav {...this.props} profilePic={this.state.profilePic} />
          {/* ******************* CENTER ********************* */}

          <div className="center">
            <div>
              <Map
                style={{ width: "45%", height: "100%" }}
                google={this.props.google}
                initialCenter={{
                  lat: 40.854885,
                  lng: -88.081807,
                }}
                zoom={10}
              >
                <Marker
                  title={"Hello."}
                  name={"SOMA"}
                  position={{ lat: 40.854885, lng: -88.081807 }}
                  options={{ icon: this.state.id === 1? require("../../assets/missing-pet-active.svg"):require("../../assets/missing-pet.svg") }}
                  onClick={() => this.change(1)}
                />

                <Marker
                  onClick={() => {
                    this.change(1);
                  }}
                  title={"The marker`s title will appear as a tooltip."}
                  name={"SOMA"}
                  position={{ lat: 41.85489, lng: -88.081907 }}
                  options={{ icon: this.state.id === 2? require("../../assets/missing-pet-active.svg"):require("../../assets/missing-pet.svg") }}
                  onClick={() => this.change(2)}
                />

                <Marker
                  onClick={() => {
                    this.change(2);
                  }}
                  title={"The marker`s title will appear as a tooltip."}
                  name={"SOMA"}
                  position={{ lat: 41.85495, lng: -88.081920 }}
                  options={{ icon: this.state.id === 3? require("../../assets/missing-pet-active.svg"):require("../../assets/missing-pet.svg") }}
                  onClick={() => this.change(3)}
                />
              </Map>
            </div>
            {this.state.show ?
            <div className="popup" onClick={()=>this.props.history.push("/missingpetdetails")}>
              <div className="selected-pet-img-div">
                <img
                  className="selected-pet-img"
                  src={this.state.img}
                />
              </div>
              <div className="pet-details">
                <div className="individual-pet-details">
                  <div className="details-heading"> Pet Name: </div>
                  <div className="details-description">
                    {this.state.petName}
                  </div>
                </div>

                <div className="individual-pet-details">
                  <div className="details-heading">Pet Type: </div>
                  <div className="details-description">{this.state.type}</div>
                </div>

                <div className="individual-pet-details">
                  <div className="details-heading">Owner Name: </div>
                  <div className="details-description">
                    {this.state.ownerName}
                  </div>
                </div>

                <div className="individual-pet-details">
                  <div className="click-here">
                    Click for more details
                  </div>
                </div>
              </div>
              <div className="cross-button-div">
                <button
                  style={{ fontSize: "30px" }}
                  type="button"
                  class="close"
                  data-dismiss="modal"
                  onClick={()=>this.close()}
                >
                  &times;
                </button>
              </div>
            </div>
            :null}
          </div>

          {/* right hand side */}
          <RightSideNav {...this.props} />
        </div>
      </div>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: "AIzaSyCT10HZ5mDIrMhQrXQbJnkVR3ZJEEm4pYg",
})(MissingPet);
