import React from "react";

function Header() {
  return (
    <header>
      <div className="left">
        <div className="header"> Keeper </div>
      </div>

      <div className="mid">
        <ul className="navbar">
          <li>
            <a href="#" className="active">
              Home{" "}
            </a>{" "}
          </li>
          <li>
            <a href="#"> Why Keeper? </a>{" "}
          </li>
          <li>
            <a href="#"> Services </a>{" "}
          </li>
          <li>
            <a href="#"> Features </a>{" "}
          </li>
        </ul>
      </div>

      <div className="right">
        <buttton class="btn">
          <strong>Contact Us</strong>
        </buttton>
      </div>
    </header>
  );
}

export default Header;
