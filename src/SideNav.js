import React from "react";
import "./SideNav.css";
import Petprofile1 from "./petprofile1";
import Petprofile2 from "./petprofile2";
import Petprofile3 from "./petprofile3";
import Petprofile4 from "./petprofile4";
import Petprofile5 from "./petprofile5";
import Petprofile6 from "./petprofile6";
import Petprofile7 from "./petprofile7";
import PetsIcon from "@material-ui/icons/Pets";

class Sidenav extends React.Component {
  constructor(props) {
    super(props);
    console.log(props);
    this.state = {
      petprofile1: true,
      petprofile2: false,
      petprofile3: false,
      petprofile4: false,
      petprofile5: false,
      petprofile6: false,
      petprofile7: false,
    };
  }

  petprofile1 = () => {
    this.setState({
      petprofile1: false,
      petprofile2: true,
      petprofile3: false,
    });
  };

  petprofile2 = () => {
    this.setState({
      petprofile1: false,
      petprofile2: false,
      petprofile3: true,
    });
  };

  petprofile3 = () => {
    this.setState({
      petprofile1: false,
      petprofile2: false,
      petprofile3: false,
      petprofile4: true,
    });
  };
  petprofile4 = () => {
    this.setState({
      petprofile1: false,
      petprofile2: false,
      petprofile3: false,
      petprofile4: false,
      petprofile5: true,
    });
  };
  petprofile5 = () => {
    this.setState({
      petprofile1: false,
      petprofile2: false,
      petprofile3: false,
      petprofile4: false,
      petprofile5: false,
      petprofile6: true,
    });
  };
  petprofile6 = () => {
    this.setState({
      petprofile1: false,
      petprofile2: false,
      petprofile3: false,
      petprofile4: false,
      petprofile5: false,
      petprofile6: false,
      petprofile7: true,
    });
  };

  render() {
    console.log("///", this.props.profilePic)

    const abc = () => {
      
    }
    return (
      <div className="main-code">
        <div className="fixed">
          <div className="logo-notification">
            <img
            onClick={()=>this.props.history.push("/home")}
              className="logo"
              src={require("./assets/logo_big.svg")}
              alt="slooth"
            />
            <div
              className="notification-icon-div"
              onClick={() => this.props.history.push("notification")}
            >
              <div className="notification-number">1</div>
              <i className="fa fa-bell" aria-hidden="true"></i>
            </div>

            <div
              className="notification-icon-div"
              onClick={() => this.props.history.push("message")}
            >
              {/* <div className="notification-number">1</div> */}
              <i class="fa fa-envelope" aria-hidden="true"></i>
            </div>
          </div>

          <div className="home">
            <div
              className="sidenav sidenav-user"
              onClick={() => this.props.history.push("/profile")}
            >
              <div className="side-icons">
                <img
                  className="user-profile"
                  src={
                    this.props.profilePic !== "" && this.props.profilePic !== undefined
                      ? this.props.profilePic
                      : require("../src/assets/profile.jpg")
                  }
                ></img>{" "}
              </div>
              <div className="side-text">
                <a className="anchor user">USER PROFILE</a>
              </div>
            </div>

            <div
              className="sidenav sidenav-group"
              onClick={() => this.props.history.push("/discovergroups")}
            >
              <div className="side-icons">
                <i className="fa fa-user-o user" aria-hidden="true"></i>
              </div>
              <div className="side-text">
                <a className="anchor">GROUPS</a>
              </div>
            </div>

            <div
              className="sidenav sidenav-alert"
              onClick={() => this.props.history.push("/sloothAlert4")}
            >
              <div className="side-icons">
                <i className="fa fa-bell-o user" aria-hidden="true"></i>
              </div>
              <div className="side-text">
                <a className="anchor">ALERT</a>
              </div>
            </div>
{/* 
            <div
              className="sidenav sidenav-missing"
              onClick={() => this.props.history.push("/missingpets")}
            >
              <div className="side-icons">
                <i className="fa fa-comment-o user" aria-hidden="true"></i>
              </div>
              <div className="side-text">
                <a className="anchor">MISSING PETS</a>
              </div>
            </div> */}
            <div
              className="sidenav sidenav-missing"
              onClick={() => this.props.history.push("/missingpets")}
            >
              <div className="side-icons">
              <PetsIcon />
              </div>
              <div className="side-text">
                <a className="anchor">BREEDERS' CLUB</a>
              </div>
            </div>

            <div
              className="sidenav sidenav-cafe"
              onClick={() => this.props.history.push("/animalKingdom")}
            >
              <div className="side-icons">
                <i className="fa fa-toggle-off user" aria-hidden="true"></i>
              </div>
              <div className="side-text">
                <a className="anchor">CAFE</a>
              </div>
            </div>

            <div
              className="sidenav sidenav-place"
              onClick={() => this.props.history.push("/marketPlace")}
            >
              <div className="side-icons">
                <i className="fa fa-wpexplorer user" aria-hidden="true"></i>
              </div>
              <div className="side-text">
                <a className="anchor markt">MARKETPLACE</a>
              </div>
            </div>

            <div
              className="sidenav sidenav-services"
              onClick={() => this.props.history.push("/services")}
            >
              <div className="side-icons">
                <i className="fa fa-share-square-o user" aria-hidden="true"></i>
              </div>
              <div className="side-text">
                <a className="anchor service">SERVICES</a>
              </div>
            </div>

            <div
              className="sidenav sidenav-events"
              onClick={() => this.props.history.push("/upcomingEvents")}
            >
              <div className="side-icons">
                <i className="fa fa-venus user" aria-hidden="true"></i>
              </div>
              <div className="side-text">
                <a className="anchor">EVENTS</a>
              </div>
            </div>
            <div
              className="sidenav sidenav-out"
              onClick={() => this.props.history.push("/")}
            >
              <div className="side-icons">
                <i className="fa fa-sign-out user" aria-hidden="true"></i>
              </div>
              <div className="side-text">
                <a className="anchor">LOG OUT</a>
              </div>
            </div>

            <div
              className="sidenav sidenav-out"
              onClick={() => this.props.history.push("home")}
            >
              <button type="button" className="main-btn ">
                Slooth
              </button>
            </div>
          </div>
        </div>


        

        <div className="modal fade" id="myModal" role="dialog">
          <div className="modal-dialog">
            {this.state.petprofile1 === true ? (
              <Petprofile1 petprofile1={this.petprofile1} />
            ) : null}

            {this.state.petprofile2 === true ? (
              <Petprofile2 petprofile2={this.petprofile2} />
            ) : null}

            {this.state.petprofile3 === true ? (
              <Petprofile3 petprofile3={this.petprofile3} />
            ) : null}

            {this.state.petprofile4 === true ? (
              <Petprofile4 petprofile4={this.petprofile4} />
            ) : null}
            {this.state.petprofile5 === true ? (
              <Petprofile5 petprofile5={this.petprofile5} />
            ) : null}

            {this.state.petprofile6 === true ? (
              <Petprofile6 petprofile6={this.petprofile6} />
            ) : null}

            {this.state.petprofile7 === true ? <Petprofile7 /> : null}
          </div>
        </div>
      </div>
    );
  }
}

export default Sidenav;
