import React from "react";
import "./Card.css";
import Footer from "../Footer";

function formatDate(timestamp) {
  const date = new Date(timestamp);
  return date.toLocaleString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
  });
}

function Card({ selectedUser, randomTweet, imgSrc }) {
  return (
    <div className="card-container">
      <img className="card-avatar-img" src={imgSrc} alt="" />
      {selectedUser && (
        <div>
          <h4 className="userName">{selectedUser.name}</h4>

          {randomTweet && (
            <div className="tweet-container">
              <p className="tweet_time">{formatDate(randomTweet.created_at)}</p>
              <p className="tweet_text">{randomTweet.text}</p>
            </div>
          )}
        </div>
      )}

      <Footer />
    </div>
  );
}

export default Card;
