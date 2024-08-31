import React, { Component } from "react";
import axios from "axios";
import "../signup.css";
import { Link } from "react-router-dom";
import Background from "../images/photo.jpg";
import Login from "./login";

export default class Signup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: [],
      SignupSuccess: false,
      newPost: { name: "", email: "", password: "" },
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    this.retrievePosts();
  }

  retrievePosts() {
    axios
      .get("http://localhost:7800/posts")
      .then((res) => {
        if (res.data.success) {
          this.setState({
            posts: res.data.existingPosts,
          });
          console.log("posts retrieved successfully:", this.state.posts);
        } else {
          console.log("Error fetching posts", res.data.error);
        }
      })
      .catch((error) => {
        console.error("error fetching posts : ", error);
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

  handleSubmit(event) {
    event.preventDefault();
    const { name, email, password } = this.state.newPost;
    if (!name || !email || !password) {
      alert("Please fill in all required fields.");
      return;
    }
    axios
      .post("http://localhost:9000/signup", this.state.newPost)
      .then((res) => {
        if (res.data.success) {
          console.log("post added successfully");
          alert("Signup is successful.");
          this.setState({
            newPost: { name: "", email: "", password: "" },
            SignupSuccess: true,
          });
          this.retrievePosts();
        } else {
          console.error("error adding post:", res.data.error);
        }
      })
      .catch((error) => {
        console.error("error adding post:", error);
        alert("Error. Signup failed.");
      });
  }

  render() {
    if (this.state.SignupSuccess) {
      return <Login />;
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
            <a href="https://www.facebook.com" class="fa fa-facebook"></a>
            <a href="https://www.twitter.com" class="fa fa-twitter"></a>
            <a href="https://www.linkedin.com" class="fa fa-linkedin"></a>
            <a href="https://www.youtube.com" class="fa fa-youtube"></a>
            <a href="https://www.instagram.com" class="fa fa-instagram"></a>
          </div>
          <div className="box2">
          <h2>Sign Up</h2>
            <form onSubmit={this.handleSubmit}>
              <br />
              {/* this is name input */}
              <label>
                User Name:
                <input
                  type="text"
                  name="name"
                  value={this.state.newPost.name}
                  onChange={this.handleChange}
                />
              </label>
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
                Already Have an Account? Let's Get You .
                <Link to="/login">
                  <font color="white">Logged</font>
                </Link>{" "}
                In!
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
