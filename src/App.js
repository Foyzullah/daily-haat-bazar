import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import Orders from "./components/Orders/Orders";
import Admin from "./components/Admin/Admin";
import Login from "./components/Login/Login";
import NotFound from "./components/NotFound/NotFound";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/Header/Header";
import { createContext, useState } from "react";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";
import CheckOut from "./components/CheckOut/CheckOut";

export const UserContext = createContext();

function App() {
  const [loggedInClient, setLoggedInClient] = useState({});
  return (
    <UserContext.Provider value={[loggedInClient, setLoggedInClient]}>
      <div className="App">
        <Router>
          <Header></Header>
          <Switch>
            <Route path="/home">
              <Home />
            </Route>
            <PrivateRoute path="/orders">
              <Orders />
            </PrivateRoute>
            <PrivateRoute path="/admin">
              <Admin />
            </PrivateRoute>
            <PrivateRoute path="/checkout/:id">
              <CheckOut></CheckOut>
            </PrivateRoute>
            <Route path="/login">
              <Login />
            </Route>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="*">
              <NotFound />
            </Route>
          </Switch>
        </Router>
      </div>
    </UserContext.Provider>
  );
}

export default App;
