import React, { Component } from "react";
import "./posts.css";
import TweetEmbed from "react-tweet-embed";

class Posts extends Component {
  render() {
    return (
      <div className="posts" id="">
        <div id="rights">
          <h1>LGBTQ RIGHTS</h1>
          <div className="rights">
            <TweetEmbed
              className="ttt"
              id="1423529117501296641"
              placeholder={"loading"}
              options={{ theme: "dark" }}
            />
            <TweetEmbed
              className="ttt"
              id="1425331450862194689"
              placeholder={"loading"}
              options={{ theme: "dark" }}
            />
            <TweetEmbed
              className="ttt"
              id="1426402714267881473"
              placeholder={"loading"}
              options={{ theme: "dark" }}
            />
          </div>
        </div>
        <div id="lgbtq">
          <h1>LGBTQ+</h1>
          <div className="lgbtq">
            <TweetEmbed
              className="ttt"
              id="1425205350936973313"
              placeholder={"loading"}
              options={{ theme: "dark" }}
            />
            <TweetEmbed
              className="ttt"
              id="1425445450312679436"
              placeholder={"loading"}
              options={{ theme: "dark" }}
            />
            <TweetEmbed
              className="ttt"
              id="1425841039160397829"
              placeholder={"loading"}
              options={{ theme: "dark" }}
            />
          </div>
        </div>
        <div id="pride">
          <h1>PRIDE</h1>
          <div className="pride">
            <TweetEmbed
              className="ttt"
              id="1425950310477008900"
              placeholder={"loading"}
              options={{ theme: "dark" }}
            />
            <TweetEmbed
              className="ttt"
              id="1426186792173252611"
              placeholder={"loading"}
              options={{ theme: "dark" }}
            />
            <TweetEmbed
              className="ttt"
              id="1426283097155424257"
              placeholder={"loading"}
              options={{ theme: "dark" }}
            />
          </div>
        </div>
        <div id="equality">
          <h1>EQUALITY</h1>
          <div className="equality">
            <TweetEmbed
              className="ttt"
              id="1423569985746710530"
              placeholder={"loading"}
              options={{ theme: "dark" }}
            />
            <TweetEmbed
              className="ttt"
              id="1424828330109542401"
              placeholder={"loading"}
              options={{ theme: "dark" }}
            />
            <TweetEmbed
              className="ttt"
              id="1425278331151343618"
              placeholder={"loading"}
              options={{ theme: "dark" }}
            />
          </div>
        </div>
        <div id="coming">
          <h1>COMING OUT STORIES</h1>
          <div className="coming">
            <TweetEmbed
              className="ttt"
              id="1321501816178302976"
              placeholder={"loading"}
              options={{ theme: "dark" }}
            />
            <TweetEmbed
              className="ttt"
              id="1384166417411448844"
              placeholder={"loading"}
              options={{ theme: "dark" }}
            />
            <TweetEmbed
              className="ttt"
              id="840843184230002688"
              placeholder={"loading"}
              options={{ theme: "dark" }}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default Posts;
