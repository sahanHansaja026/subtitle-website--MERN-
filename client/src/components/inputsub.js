import React, { Component } from "react";
import axios from "axios";
import "../input.css";
import Upload from "../images/Upload-pana.png";

class InputSub extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: [],
      newPost: {
        first_name: "",
        last_name: "",
        email: "",
        phone: "",
        movie: "",
        year: "",
        category: "",
        summery: "",
        image: null,
        subtitle: null,
      },
    };
  }

  componentDidMount() {
    this.retrievePosts();
  }

  retrievePosts() {
    axios
      .get("http://localhost:9000/profile")
      .then((res) => {
        if (res.data.success) {
          this.setState({
            posts: res.data.existingPosts,
          });
          console.log("Posts retrieved successfully:", this.state.posts);
        } else {
          console.log("Error fetching posts", res.data.error);
        }
      })
      .catch((error) => {
        console.error("Error fetching posts:", error);
      });
  }

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState((prevState) => ({
      newPost: {
        ...prevState.newPost,
        [name]: value,
      },
    }));
  };

  handleImageChange = (event) => {
    this.setState({
      newPost: {
        ...this.state.newPost,
        image: event.target.files[0],
      },
    });
  };
  handleSubtitleChange = (event) => {
    this.setState({
      newPost: {
        ...this.state.newPost,
        subtitle: event.target.files[0],
      },
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();

    const formData = new FormData();
    for (let key in this.state.newPost) {
      formData.append(key, this.state.newPost[key]);
    }
    const { first_name, last_name, movie, email, phone, year, image, category,summery,subtitle } = this.state.newPost;
    if (!first_name || !last_name || !movie || !year || !category || !email || !summery || !subtitle || !phone || !image) {
      alert("Please fill in all required fields.");
      return;
    }
    axios
      .post("http://localhost:9000/post/save", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      .then((res) => {
        if (res.data.success) {
          console.log("Post added successfully");
          this.setState({
            newPost: {
              first_name: "",
              last_name: "",
              email: "",
              phone: "",
              movie: "",
              year: "",
              category: "",
              summery: "",
              image: null,
              subtitle: null,
            },
          });
          this.retrievePosts();
        } else {
          console.error("Error adding post:", res.data.error);
        }
      })
      .catch((error) => {
        console.error("Error adding post:", error);
      });
  };

  render() {
    return (
      <div className="input_sub">
        <div className="container">
          <form onSubmit={this.handleSubmit}>
            <div className="box">
              <label>
                First Name:
                <br />
                <input
                  type="text"
                  name="first_name"
                  value={this.state.newPost.first_name}
                  onChange={this.handleChange}
                />
              </label>
              <br />
              <label>
                Last Name:
                <br />
                <input
                  type="text"
                  name="last_name"
                  value={this.state.newPost.last_name}
                  onChange={this.handleChange}
                />
              </label>
            </div>
            <br />
            <div className="box">
              <label>
                Email:
                <br />
                <input
                  type="text"
                  name="email"
                  value={this.state.newPost.email}
                  onChange={this.handleChange}
                />
              </label>
              <br />
              <label>
                Phone:
                <br />
                <input
                  type="text"
                  name="phone"
                  value={this.state.newPost.phone}
                  onChange={this.handleChange}
                />
              </label>
              <br />
            </div>
            <br />
            <label>
              Movie:
              <br />
              <input
                type="text"
                name="movie"
                value={this.state.newPost.movie}
                onChange={this.handleChange}
              />
            </label>
            <br />
            <br />
            <label>
              Year:
              <br />
              <input
                type="text"
                name="year"
                value={this.state.newPost.year}
                onChange={this.handleChange}
              />
            </label>
            <br />
            <br />
            <label>
              Category:
              <br />
              <input
                type="text"
                name="category"
                value={this.state.newPost.category}
                onChange={this.handleChange}
              />
            </label>
            <br />
            <br />
            <label>
              Add Summery about Movie:
              <br/>
              <textarea
              type="text"
                name="summery"
                value={this.state.newPost.summery}
                onChange={this.handleChange}
                placeholder="Add Summery about Movie"
              />
            </label>
            <br />
            <br />
            <label>
              Image:
              <br />
              <input
                type="file"
                name="image"
                placeholder=".png , .jpg , .jpeg only"
                accept=".png, .jpg, .jpeg"
                onChange={this.handleImageChange}
              />
            </label>
            <br />
            <br />
            <label>
              subtitle:
              <br />
              <input
                type="file"
                name="subtitle"
                accept=".srt , .ssa"
                onChange={this.handleSubtitleChange}
              />
            </label>
            <br />
            <br />
            <button type="submit">Store in the System</button>
            <img src={Upload} alt="Example" />
          </form>
        </div>
      </div>
    );
  }
}

export default InputSub;
