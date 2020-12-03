import React from "react";
import Popper from "@material-ui/core/Popper";
import Fade from "@material-ui/core/Fade";
import SettingsOutlinedIcon from "@material-ui/icons/SettingsOutlined";
import { SketchPicker } from "react-color";
import Button from "@material-ui/core/Button";

import { connect } from "react-redux";
import {
  changeThemeColor,
  changeThemeBackground,
} from "../../store/actions/authActions";
import { bindActionCreators } from "redux";
import "./PodcastThemeTooltip.css";

const TransitionsPopper = ({ ...props }) => {
  const [color, setColor] = React.useState("#333");
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [showPicker, setShowPicker] = React.useState(false);
  const [backgroundImage, setBackgroundImage] = React.useState("");

  const handleClick = (event) => {
    setAnchorEl(anchorEl ? null : event.currentTarget);
    if (!anchorEl) {
      setShowPicker(false);
    }
  };

  const open = Boolean(anchorEl);
  const id = open ? "transitions-popper" : undefined;

  const handleColorChange = ({ hex }) => {
    setColor(hex);
    props.changeThemeColor(hex);
  };

  const fileSelectedHandler = (e) => {
    props.changeThemeBackground(URL.createObjectURL(e.target.files[0]));
  };

  return (
    <div>
      <div aria-describedby={id} type="button" onClick={handleClick}>
        <SettingsOutlinedIcon className="podcasts-top-icons" />
      </div>
      <Popper id={id} open={open} anchorEl={anchorEl} transition>
        {({ TransitionProps }) => (
          <Fade {...TransitionProps} timeout={350}>
            {!showPicker ? (
              <div
                style={{
                  backgroundColor: "white",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                }}
              >
                <Button onClick={() => setShowPicker(true)} color="primary">
                  Background color
                </Button>

                <div className="">
                  <label
                    class="btn-file background-image-podcast"
                    for="file-input"
                  >
                    Background image
                  </label>

                  <input
                    id="file-input"
                    type="file"
                    accept="image/*"
                    onChange={(e) => fileSelectedHandler(e)}
                    style={{ display: "none" }}
                  />
                </div>
              </div>
            ) : (
              <div style={{ display: showPicker ? "block" : "none" }}>
                <SketchPicker
                  color={color}
                  onChangeComplete={handleColorChange}
                />
              </div>
            )}
          </Fade>
        )}
      </Popper>
    </div>
  );
};

const mapStateToProps = (state) => ({
  state: state,
});
const mapDispatchToProps = (dispatch) => ({
  changeThemeColor: bindActionCreators(changeThemeColor, dispatch),
  changeThemeBackground: bindActionCreators(changeThemeBackground, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(TransitionsPopper);
