import "./App.css";
import React, { useEffect, useState } from "react";
import HeaderBlock from "./components/HeaderBlock";
import { Controller, Scene } from "react-scrollmagic";

import Header from "./components/Header";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import Menu from "./components/Menu";
import Signup from "./components/Signup";

import Login from "./components/Login";
import { useDispatch, useSelector } from "react-redux";
import { login, logout, selectUser } from "./features/userSlice";
import TeslaAccount from "./components/TeslaAccount";
import { auth } from "./firebase";
import ModelS from "./components/ModelS";
function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  useEffect(() => {
    auth.onAuthStateChanged((userAuth) => {
      if (userAuth) {
        dispatch(
          login({
            email: userAuth.email,
            uid: userAuth.uid,
            displayName: userAuth.displayName,
          })
        );
      } else {
        dispatch(logout);
      }
    });
  }, []);
  return (
    <Router>
      <Switch>
        <div className="App">
          <Route exact path="/">
            <Header isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
            {isMenuOpen && <Menu />}
            <div className="container">
              <Controller globalSceneOptions={{ triggerHook: "onLeave" }}>
                <Scene pin>
                  <HeaderBlock image="https://tesla.com/ns_videos/model-3-social.jpg" />
                </Scene>
                <Scene pin>
                  <HeaderBlock image="https://media.wired.com/photos/5dd82f459ac14a0008116985/master/pass/Transoi_storyone_Screen-Shot-2019-11-22-at-10.38.01-AM.jpg" />
                </Scene>
              </Controller>
            </div>
          </Route>
          <Route exact path="/login">
            {user ? <Redirect to="teslaaccount" /> : <Login />}
          </Route>
          <Route exact path="/models">
            <ModelS></ModelS>
          </Route>
          <Route exact path="/signup">
            {user ? <Redirect to="teslaaccount" /> : <Signup />}
          </Route>
          <Route exact path="/teslaaccount">
            {!user ? (
              <Redirect to="/login" />
            ) : (
              <>
                <TeslaAccount
                  isMenuOpen={isMenuOpen}
                  setIsMenuOpen={setIsMenuOpen}
                />
                {isMenuOpen && <Menu />}
              </>
            )}
          </Route>
        </div>
      </Switch>
    </Router>
  );
}

export default App;
