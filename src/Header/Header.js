import React from "react";
import "./Header.css";
import PersonIcon from "@material-ui/icons/Person";
import IconButton from "@material-ui/core/IconButton";
import ForumIcon from "@material-ui/icons/Forum";

function Header() {
  return (
    <div className="header">
      {/* <h2>Header</h2> */}
      <IconButton>
        <PersonIcon font-size="large" className="header__icon" />
      </IconButton>

      <img
        className="header__logo"
        src="https://p.kindpng.com/picc/s/19-195266_tinder-icon-2017-logo-vector-gradient-tinder-logo.png"
        // src="https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8aHVtYW58ZW58MHx8MHx8&ixlib=rb-1.2.1&w=1000&q=80"
        alt=""
      />
      <IconButton>
        <ForumIcon fontSize="large" className="header__icon" />
      </IconButton>
    </div>
  );
}

export default Header;
