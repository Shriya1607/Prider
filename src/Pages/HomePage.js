import React from "react";
import { Col, Row } from "react-bootstrap";
import Posts from "../Components/BottomHomePage/Posts";
import Header from "../Components/HomePage/Header";
import Navbar from "../Components/HomePage/Navbar";
import Pic from "../Components/HomePage/Pic";
import Tweets from "../Components/HomePage/Tweets";
import "../App.css";

function HomePage() {
  return (
    <>
      <div className="home-page">
        <Header />
        <Navbar />
        <Row>
          <Col md={7}>
            <Pic />
          </Col>
          <Col md={5} style={{ backgroundColor: "black" }}>
            <Tweets />
          </Col>
        </Row>
        <Posts />
        <footer style={{ textAlign: "center", paddingTop: "0.5rem" }}>
          <a href="#" className="header-icon">
            <i class="fab fa-instagram"></i>
          </a>
          <a href="#" className="header-icon">
            <i class="fab fa-twitter-square"></i>
          </a>
          <a href="#" className="header-icon">
            <i class="fab fa-youtube"></i>
          </a>
          <a href="#" className="header-icon">
            <i class="fab fa-facebook-square"></i>
          </a>
          <h4 style={{ color: "white", padding: "1rem 0" }} class="copyright">
            Shriya and Kartik ©2021
          </h4>
        </footer>
      </div>
    </>
  );
}

export default HomePage;
