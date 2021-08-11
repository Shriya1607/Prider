import React from "react";
import { Col, Row } from "react-bootstrap";
import Health from "../Components/BottomHomePage/Health";
import Header from "../Components/HomePage/Header";
import Navbar from "../Components/HomePage/Navbar";
import Pic from "../Components/HomePage/Pic";
import Tweets from "../Components/HomePage/Tweets";

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
        <Health />
      </div>
    </>
  );
}

export default HomePage;
