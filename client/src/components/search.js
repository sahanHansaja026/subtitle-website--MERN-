import React, { Component } from "react";
import axios from "axios";
import "../search.css";

export default class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      posts: [], // Hold multiple posts that match the search query
      searchQuery: "",
      errorMessage: "",
    };

    this.handleSearchChange = this.handleSearchChange.bind(this);
  }

  handleSearchChange(event) {
    const searchQuery = event.target.value;
    this.setState({ searchQuery });

    if (searchQuery.length > 0) {
      axios
        .post("http://localhost:9000/search", { movie: searchQuery })
        .then((res) => {
          if (res.data.success) {
            this.setState({ posts: res.data.existingPosts, errorMessage: "" });
          } else {
            this.setState({ errorMessage: res.data.error, posts: [] });
          }
        })
        .catch((error) => {
          console.error("Error searching for movies:", error);
          this.setState({
            errorMessage: "Error. Unable to search for the movies.",
            posts: [],
          });
        });
    } else {
      this.setState({ posts: [], errorMessage: "" }); // Clear results if search query is empty
    }
  }

  render() {
    const { posts, searchQuery, errorMessage } = this.state;

    return (
      <div>
        
        {/* Search Bar */}
        <form className="search-form">
          <input
            type="text"
            placeholder="Search movie Name..."
            value={searchQuery}
            onChange={this.handleSearchChange}
          />
        </form>
        <center>
          <div className="add_sence">Google Ads</div>
        </center>
        {/* Display error message if search fails */}
        {errorMessage && <div className="error">{errorMessage}</div>}

        {/* Display the searched movies details */}
        <div className="card-container">
          {posts.map((post) => (
            <a href={`/post/${post._id}`} className="card" key={post._id}>
              <div className="card-image">
                <img
                  src={post.image ? require(`../uploads/${post.image}`) : ""}
                  alt={post.movie}
                />
              </div>
              <div className="card-header">
                <h3>
                  {post.movie} ({post.year})
                </h3>
                <p>{post.author}</p>
              </div>
            </a>
          ))}
        </div>
      </div>
    );
  }
}
