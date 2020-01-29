import React from "react";

function Header() {
  return (
    <header>
      <div className="header-wrapper">
        <div className="microsite-logo">
          <img src={require("../../assets/images/give-logo.png")} alt="" />
        </div>
      </div>
    </header>
  );
}

export default Header;
