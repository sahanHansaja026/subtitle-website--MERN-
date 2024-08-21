import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Addsub from "./inputsub";
import "../signup.css";
import Background from "../images/photo.jpg";


export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      newPost: { email: "", password: "" },
      loginSuccess: false,
      userEmail: "", 
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    axios
      .post("http://localhost:9000/login", this.state.newPost)
      .then((res) => {
        if (res.data.success) {
          console.log("Login successful");
          alert("Login successful.");
          this.setState({
            loginSuccess: true,
            userEmail: this.state.newPost.email, // storing user's email in state
          });
        } else {
          console.error("Login failed:", res.data.error);
        }
      })
      .catch((error) => {
        console.error("Error logging in:", error);
        alert("Error. You are unauthorizied.");
      });
  }

  handleChange(event) {
    const { name, value } = event.target;
    this.setState((prevState) => ({
      newPost: {
        ...prevState.newPost,
        [name]: value,
      },
    }));
  }

  render() {
    if (this.state.loginSuccess) {
      return <Addsub email={this.state.userEmail} />;
    }
    return (
        <div className="signup">
          <img src={Background} alt="Background" />
          <div className="container">
            <div className="box1">
              <div className="text-container">
                <h1>LankaSub World</h1>
              </div>
              <div className="para">
                <h1>Welcome</h1>
                <h1>To Our Website</h1>
                <p>
                  SubMagic Lanka: Your go-to for accurate Sinhala , English and
                  Tamil subtitles. Never miss a release with our updates!
                </p>
              </div>
              <a href="https://www.facebook.com" className="fa fa-facebook"></a>
              <a href="https://www.twitter.com" className="fa fa-twitter"></a>
              <a href="https://www.linkedin.com" className="fa fa-linkedin"></a>
              <a href="https://www.youtube.com" className="fa fa-youtube"></a>
              <a href="https://www.instagram.com" className="fa fa-instagram"></a>
            </div>
            <div className="box2">
            <h2>Login</h2>
              <form onSubmit={this.handleSubmit}>
                <br />
                {/* this is email input */}
                <label>
                  Email:
                  <br />
                  <input
                    type="email"
                    name="email"
                    value={this.state.newPost.email}
                    onChange={this.handleChange}
                  />
                </label>
                {/* this is a password input */}
                <label>
                  Password:
                  <input
                    type="password"
                    name="password"
                    value={this.state.newPost.password}
                    onChange={this.handleChange}
                  />
                </label>
                <div className="option">
                <br/>
                  Don't have an account ? `
                  <Link to="/signup">
                    <font color="white">Registar</font>
                  </Link>{" "}
                  
                </div>
                <br />
                <button type="submit">Sign up</button>
              </form>
            </div>
          </div>
        </div>
      );
}

}