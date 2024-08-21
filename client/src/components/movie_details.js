import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import "../movie.css";

const Moviedeatails = () => {
  const [post, setPost] = useState({});
  const { id } = useParams();

  useEffect(() => {
    axios
      .get(`http://localhost:9000/post/${id}`)
      .then((res) => {
        if (res.data.success) {
          setPost(res.data.post);
        }
      })
      .catch((error) => {
        console.error("Error fetching post details:", error);
      });
  }, [id]);

  return (
    <div className="movie">
      <h1>{post.movie}</h1>
      <div className="main_content">
        <div className="content">
          <table>
            <tr>
              <td>
                <b>Movie Name:</b>
              </td>
              <td>{post.movie}</td>
            </tr>
            <tr>
              <td>
                <b>Year:</b>
              </td>
              <td>{post.year}</td>
            </tr>
            <tr>
              <td>
                <b>Author Name:</b>
              </td>
              <td>
                {post.first_name} {post.last_name}
              </td>
            </tr>
            <tr>
              <td>
                <b>Author Email:</b>
              </td>
              <td>{post.email}</td>
            </tr>
            <tr>
              <td>
                <b>Author Phone Number:</b>
              </td>
              <td>{post.phone}</td>
            </tr>
            <tr>
              <td>
                <b>Category</b>
              </td>
              <td>{post.category}</td>
            </tr>
            {post.subtitle && (
              <a
                href={require(`../subtitles/${post.subtitle}`)}
                download
                className="download-button"
              >
                Download Subtitle
              </a>
            )}
          </table>
        </div>
        <div className="content_imgbox">
          <img
            src={post.image ? require(`../uploads/${post.image}`) : ""}
            alt={post.image}
          />
        </div>
      </div>
      <h1> Summery About Movie </h1>
      <br />
      <p>{post.summery}</p>
    </div>
  );
};

export default Moviedeatails;
