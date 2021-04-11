import React, { useContext } from "react";
import "./Login.css";
import { useHistory, useLocation } from "react-router";
import { UserContext } from "../../App";
import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from "./firebase.config";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faFileUpload } from "@fortawesome/free-solid-svg-icons";
import { faFacebookF, faGoogle } from "@fortawesome/free-brands-svg-icons";

if (firebase.apps.length === 0) {
  firebase.initializeApp(firebaseConfig);
} else {
  firebase.app();
}

const Login = () => {
  const [loggedInClient, setLoggedInClient] = useContext(UserContext);

  const history = useHistory();
  const location = useLocation();

  let { from } = location.state || { from: { pathname: "/" } };

  // const handleErro = (error) => {
  //   const newClientInfo = { ...client };
  //   newClientInfo.error = error.message;
  //   setClient(newClientInfo);
  // };

  const googleProvider = new firebase.auth.GoogleAuthProvider();
  const handleGoogleSignIn = () => {
    firebase
      .auth()
      .signInWithPopup(googleProvider)
      .then((res) => {
        const { displayName, email } = res.user;
        const signInClient = { name: displayName, email };
        setLoggedInClient(signInClient);
        history.replace(from);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  // const facebookProvider = new firebase.auth.FacebookAuthProvider();
  // const handleFacebookSignIn = () => {
  //   firebase
  //     .auth()
  //     .signInWithPopup(facebookProvider)
  //     .then((res) => {
  //       const clietnInformation = { ...res.user };
  //       clietnInformation.error = "";
  //       clietnInformation.success = true;
  //       setLoggedInClient(clietnInformation);
  //       history.replace(from);
  //     })
  //     .catch((error) => {
  //       handleErro(error);
  //     });
  // };
  return (
    <div className="container">
      <div className="row">
        <div className="col-12">
          <div className="thirdParty-login">
            <h3>Login</h3>
            <p className="login-continue" onClick={handleGoogleSignIn}>
              <FontAwesomeIcon className="icon-inner" icon={faGoogle} />
              Continue with google
            </p>
            {/* <p className="login-continue" onClick={handleFacebookSignIn}>
              <FontAwesomeIcon className="icon-inner" icon={faFacebookF} />
              Continue with Facebook
            </p> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
