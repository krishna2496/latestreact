import React from "react";
import { NotificationsNoneIcon } from "@mui/icons-material";
import PropTypes from "prop-types";

function Topbar(props) {
  return (
    <div className="topbar">
      <div className="topbarWrapper">
        <div className="topLeft">
          <span className="logo">AdminPanel</span>
        </div>
        <div className="topRight">
          <div className="toolbarIconContainer">
            <NotificationsNoneIcon />

            <span className="topIconBagde"></span>
          </div>
        </div>
      </div>
    </div>
  );
}

Topbar.propTypes = {};

export default Topbar;
