import React from "react";
import "./tweets.css";

function Tweets() {
  return (
    <div className="tweets">
      <h2 className="latest">Tweet of the Day</h2>
      <div className="single-tweet">
        <img src="https://picsum.photos/260/150" alt="" />
        <div className="tweet-info">
          <div className="tweet-title">
            <p>Culture</p>
            <p className="date">13 August 2021</p>
          </div>
          <p className="para">
            This!!! Your whole life is ahead of you, everything is gonna be
            fine, I promise!! You have so much time to be who you want to be and
            do what you want to do!
          </p>
        </div>
      </div>
      <div className="single-tweet">
        <img src="https://picsum.photos/260/150" alt="" />
        <div className="tweet-info">
          <div className="tweet-title">
            <p>Culture</p>
            <p className="date">13 August 2021</p>
          </div>
          <p className="para">
            Hey just wanted to say, no matter your sexual or romantic
            orientation, your gender or lack of it, wether you know it or don't,
            wether you're sure or not, it is valid and beautiful. And never let
            anyone tell you otherwise. You're great and you're enough.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Tweets;
