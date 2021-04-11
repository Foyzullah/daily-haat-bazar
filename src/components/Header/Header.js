import React, { useContext } from "react";
import "./Header.css";
import { Link } from "react-router-dom";
import { UserContext } from "../../App";

const Header = () => {
  const [loggedInClient, setLoggedInClient] = useContext(UserContext);

  return (
    <div className="header-section">
      <div className="container">
        <div className="row">
          <div className="col-md-4 col-12">
            <div className="logo">
              <h2>
                <span>Daily</span>Haat-Bazar
              </h2>
            </div>
          </div>
          <div className="col-md-8 col-12">
            <ul className="mainmenu">
              <li>
                <Link to="/home">Home</Link>
              </li>
              <li>
                <Link to="/orders">Orders</Link>
              </li>
              <li>
                <Link to="/admin">Admin</Link>
              </li>
              <li>
                {loggedInClient.email ? (
                  loggedInClient.name
                ) : (
                  <Link to="/login">Login</Link>
                )}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
