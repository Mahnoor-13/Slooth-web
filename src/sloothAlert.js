import React from "react";
import "./sloothAlert.css";
import Sidenav from "./SideNav";
import Rightsidenav from "./RightSideNav";

function App({ ...props }) {
  return (
    <div className="App">
      {/* <img className="logo" src={require("./assets/logo_big.svg" )} alt="slooth" /> */}
      <div className="main">
        <Sidenav {...props} />

        {/* ******************* CENTER ********************* */}

        <div className="slooth-center">
          <div>
            <h3 className="sloothalert">SLOOTH ALERT</h3>
            <hr />
          </div>

          <div className="slooth-dashed text-center">
            <button
              type="button"
              className="para-alert btn"
              onClick={() => props.history.push("/sloothAlert2")}
            >
              CREATE NEW SLOOTH ALERT
            </button>
          </div>

          <p className="sloothalert-para">
            Lorem ipsum, or lipsum as it is sometimes known, is dummy text used
            in laying out print, graphic or web designs. The passage is
            attributed to an unknown typesetter in the 15th century who is
            thought to have scrambled parts of Cicero's De Finibus Bonorum et
            Malorum for use in a type specimen book.Lorem ipsum, or lipsum as it
            is sometimes known, is dummy text used in laying out print, graphic
            or web designs. The passage is attributed to an unknown typesetter
            in the 15th century who is thought to have scrambled parts of
            Cicero's De Finibus Bonorum et Malorum for use in a type specimen
            book.
          </p>
        </div>

        <Rightsidenav {...props} />
      </div>
    </div>
  );
}

export default App;
