import React from "react";
import "./Header.css";
// rfce
function Header({ title }) {
  return (
    <div>
      <div className="app-headerlogo">
        <img src={"../Amazonlogo.png"} alt="" />
      </div>
      {/* <div className="App-header">
        <h1> {title} </h1>
      </div> */}
    </div>
  );
}

export default Header;
