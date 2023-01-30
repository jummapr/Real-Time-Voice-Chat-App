import React, { Children, useState } from "react";
import {
  BrowserRouter,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import Navigation from "./components/shared/navigation/Navigation";
import Activate from "./pages/Activate/Activate";
import Authenticate from "./pages/Authenticate/Authenticate";
import Home from "./pages/Home/Home";
import Room from "./pages/Rooms/Room";
import './App.css'
import { useSelector } from "react-redux";
import { useLoadingWithRefresh } from "./Hooks/useLoadingWithRefresh";
import Loader from "./components/shared/Loader/Loader";

const isAuth = false;
const user = {
  activated : false,
}
const IsNavigate = () => {
  return <Navigate to={"/rooms"} />;
};
const IsHome = () => {
  return <Navigate to={"/"} />;
};
const IsActivated = () => {
  return <Navigate to={"/activate"} />;
};

const App = () => {
  const {loading} = useLoadingWithRefresh()
  const {user,isAuth} = useSelector((state) => state.auth)

  return (
    loading ? <Loader message="loading, please wait..."/> : (
    <>
      <BrowserRouter>
        <Navigation />
        <Routes>
          <Route path="/" element={isAuth ? <IsNavigate /> : <Home />} exact />
          <Route
            path="/authenticate"
            element={isAuth ? <IsNavigate /> : <Authenticate />}
          />
          <Route
            path="/activate"
            element={!isAuth ? <IsHome /> : isAuth && !user.activated ? <Activate /> : <IsNavigate />}
          />
          <Route
            path="/rooms"
            element={!isAuth ? <IsHome /> : isAuth && !user.activated ? <IsActivated /> : <Room />}
          />
        </Routes>
      </BrowserRouter>
    </>
    )
  );
};

export default App;
