import React, { Component } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom"; // Import Routes from react-router-dom
import NavBar from './components/navbar';
import Signup from "./components/signup";
import Login from "./components/login";
import Addsub from "./components/inputsub";
import Home from "./components/home";
import Movie from "./components/movie_details";
import Search from "./components/search";

export default class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="container">
        <NavBar/>
          <Routes>
            <Route exact path="/" Component={Home}></Route>
            <Route exact path="/signup" Component={Signup} />
            <Route exact path="/login" Component={Login} />
            <Route exact path="/search" Component={Search} />
            <Route exact path="/input" Component={Addsub}></Route>
            <Route path="/post/:id" element={<Movie />} />
          </Routes>
        </div>
      </BrowserRouter>
    );
  }
}
