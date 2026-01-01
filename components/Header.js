import { useState } from "react";
import { Link } from "react-router";

const Header = () => {
  const [btnName, setBtnName] = useState("login");

  return (
    <div className="Header">
      <div className="Logo-container">
        <img
          className="logo"
          src="https://thumbs.dreamstime.com/b/food-delivery-logo-template-vector-icon-illustration-170869600.jpg"
        ></img>
      </div>

      <div className="Nav-items">
        <ul>
          <li>Home</li>
          <li>
            <Link to="/about">About Us</Link>
          </li>
          <li><Link to="/">Contact Us</Link></li>
          <li>cart</li>
          <li
            className="login-btn"
            onClick={() => {
              btnName == "login" ? setBtnName("logout") : setBtnName("login");
            }}
          >
            {btnName}
          </li>
        </ul>
      </div>
    </div>
  );
};
export default Header;
