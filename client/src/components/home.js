import React, { Component } from "react";
import axios from "axios";
import "../home.css";

export default class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      posts: [],
      currentPage: 1,
      totalPages: 1,
      postsPerPage: 12,
    };
  }

  componentDidMount() {
    this.retrievePosts();
  }

  retrievePosts(page = 1) {
    const { postsPerPage } = this.state;
    axios
      .get(`http://localhost:9000/posts?page=${page}&limit=${postsPerPage}`)
      .then((res) => {
        if (res.data.success) {
          this.setState({
            posts: res.data.existingPosts,
            currentPage: page,
            totalPages: Math.ceil(res.data.totalPosts / postsPerPage),
          });
        } else {
          console.error("Error fetching posts:", res.data.error);
        }
      })
      .catch((error) => {
        console.error("Error fetching posts:", error);
      });
  }

  renderPagination() {
    const { currentPage, totalPages } = this.state;
    const pages = [];

    for (let i = 1; i <= totalPages; i++) {
      pages.push(
        <button
          key={i}
          className={`pagination-button ${i === currentPage ? "active" : ""}`}
          onClick={() => this.retrievePosts(i)}
        >
          {i}
        </button>
      );
    }

    return (
      <div className="pagination">
        {currentPage > 1 && (
          <button onClick={() => this.retrievePosts(currentPage - 1)}>Previous</button>
        )}
        {pages}
        {currentPage < totalPages && (
          <button onClick={() => this.retrievePosts(currentPage + 1)}>Next</button>
        )}
      </div>
    );
  }

  render() {
    const { posts } = this.state;

    return (
      <div>
        <h2>Top Movies</h2>
        <div className="card-container">
          {posts
            .sort((a, b) => new Date(b.date) - new Date(a.date)) // Sort posts by date in descending order
            .map((post) => (
              <a href={`/post/${post._id}`} className="card" key={post._id}>
                <div className="card-image">
                  <img
                    src={post.image ? require(`../uploads/${post.image}`) : ""}
                    alt={post.image}
                  />
                </div>
                <div className="card-header">
                  <h3>
                    {post.movie} ({post.year})
                  </h3>
                </div>
              </a>
            ))}
        </div>
        {this.renderPagination()}
      </div>
    );
  }
}
