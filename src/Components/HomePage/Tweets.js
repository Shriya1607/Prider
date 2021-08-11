import React from "react";
import "./tweets.css";

function Tweets() {
  return (
    <div className="tweets">
      <h2 className="latest">Latest Tweets</h2>
      <div className="single-tweet">
        <img src="https://picsum.photos/260/150" alt="" />
        <div className="tweet-info">
          <div className="tweet-title">
            <p>Culture</p>
            <p className="date">10 August 2021</p>
          </div>
          <p className="para">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio, ex
            aperiam?
          </p>
        </div>
      </div>
      <div className="single-tweet">
        <img src="https://picsum.photos/260/150" alt="" />
        <div className="tweet-info">
          <div className="tweet-title">
            <p>Culture</p>
            <p className="date">10 August 2021</p>
          </div>
          <p className="para">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio, ex
            aperiam?
          </p>
        </div>
      </div>
    </div>
  );
}

export default Tweets;
