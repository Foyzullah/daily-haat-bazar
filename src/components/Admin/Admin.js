import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTasks, faPlus } from "@fortawesome/free-solid-svg-icons";
import {
  BrowserRouter as Router,
  Link,
  Route,
  Switch,
  useRouteMatch,
} from "react-router-dom";
import AddProduct from "../AddProduct/AddProduct";
import ManageProduct from "../ManageProduct/ManageProduct";
import "./Admin.css";

const Admin = () => {
  const { path, url } = useRouteMatch();
  return (
    <div className="admin-area">
      <div className="container">
        <div className="row">
          <Router>
            <div className="col-md-3">
              <div className="dash-bar">
                <h2>Dashboard</h2>
                <ul>
                  <li>
                    <FontAwesomeIcon className="icon" icon={faTasks} />
                    <Link to={`${url}/manageProducts`}>Manage Products</Link>
                  </li>
                  <li>
                    <FontAwesomeIcon className="icon" icon={faPlus} />
                    <Link to={`${url}/addProducts`}>Add Product</Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-md-9">
              <Switch>
                <Route path={`${path}/manageProducts`}>
                  <ManageProduct />
                </Route>
                <Route path={`${path}/`}>
                  <AddProduct />
                </Route>
                <Route exact path={`${path}/`}>
                  <AddProduct />
                </Route>
              </Switch>
            </div>
          </Router>
        </div>
      </div>
    </div>
  );
};

export default Admin;
