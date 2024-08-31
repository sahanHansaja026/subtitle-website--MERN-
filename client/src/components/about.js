import React, { Component } from "react";
import "../about.css";
import wellcome from "../images/Welcome.png";
import Goal from "../images/goal.png";
import Movies from "../images/movie.png";
import Community from "../images/community.png";
import Vison from "../images/vison.png";
import Mark from "../images/mark.png";
import Marks from "../images/mark.png";


export default class about extends Component {
  render() {
    return (
      <div className="about">
        <center>
          <div className="box1">
            <h1>LankaSub World_</h1>
            <h2>The Home of Sinhala Subtitles ™.</h2>
          </div>
        </center>
        <div className="box2">
          <div className="subbox1">
            <h2>Welcome to LankaSub World!</h2>
            <p>
              LankaSub World is dedicated to bringing the joy of media to
              Sinhala-speaking audiences. Our mission is to create a
              community-driven platform where users can contribute and access
              Sinhala subtitles for movies & TV shows.
            </p>
          </div>
          <div className="subbox2">
            <img src={wellcome} alt="Background" />
          </div>
        </div>
        <br />
        <div className="box3">
          <div className="subbox2">
            <img src={Goal} alt="Background" />
          </div>
          <div className="subbox1">
            <h2>Our Mission</h2>
            <p>
              Our mission is to make media more accessible to Sinhala speakers
              by providing high-quality subtitles, allowing everyone to enjoy
              content in their native language.
            </p>
          </div>
        </div>
        <br />
        <div className="box3">
          <div className="subbox1">
            <h2>What We Offer</h2>
            <ul class="a">
              <li>
               <b>Community Contributions:-</b> <i>We empower our users to upload, edit,
                and share Sinhala subtitles, creating a rich library of content
                for the Sinhala-speaking community.</i> 
              </li>
              <br />
              <li>
                <b>User-Friendly Platform:- </b>LankaSub World is designed for ease of
                use, making it simple to find or contribute Sinhala subtitles.
              </li>
              <br />
              <li>
               <b> Sinhala-Focused Content:-</b> Our platform is dedicated exclusively
                to Sinhala subtitles, ensuring that our community can enjoy
                content in their preferred language.
              </li>
            </ul>
          </div>
          <div className="subbox3">
            <img src={Movies} alt="Background" />
          </div>
        </div>
        <br />
        <center>
          <div className="add_sence">Google Ads</div>
        </center>
        <br />
        <div className="box2">
          <div className="subbox1">
            <h2>Join Our Community</h2>
            <p>
              If you're passionate about promoting the Sinhala language or
              simply want to enjoy media in Sinhala, LankaSub World is the
              perfect place for you. Join us today and help make content
              accessible to Sinhala speakers everywhere.
            </p>
          </div>
          <div className="subbox2">
            <img src={Community} alt="Background" />
          </div>
        </div>
        <br />
        <div className="box3">
          <div className="subbox4">
            <img src={Vison} alt="Background" />
          </div>
          <div className="subbox1">
            <h2>Our Vision</h2>
            <p>
              We envision a world where Sinhala speakers can enjoy all forms of
              media in their native language. By building a dedicated community
              of Sinhala subtitle creators and users, LankaSub World is
              committed to making this vision a reality.
            </p>
          </div>
        </div>
        <br />
        <center>
          <div className="mark">
            <img src={Mark} alt="Background" />
          </div>
          <div className="mark">
            <p>
              LankaSub World is proudly powered by MARK Technologies, ensuring a
              seamless and reliable experience for all our users
            </p>
          </div>
        </center>
        <center>
          <div className="add_sence">Google Ads</div>
        </center>
        <br/>
      </div>
    );
  }
}
