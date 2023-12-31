import React from "react";
import "./Card.css";
import Footer from "../Footer";

function Card({ faveUsers }) {
  return (
    <div className="card-container">
      <img
        className="card-avatar-img"
        src="./images/icons8-user-avatar-50.png"
        alt=""
      />

      {Array.isArray(faveUsers) && faveUsers.length > 0 ? (
        faveUsers.map((user) => (
          <div className="card" key={user.id}>
            <h4>{user.name}</h4>
            <h5>{user.screen_name}</h5>
            <p>{user.created_at}</p>
            <p>{user.text}</p>
          </div>
        ))
      ) : (
        <p>No tweets available(Card)</p>
      )}

      <hr></hr>
      <Footer />
    </div>
  );
}

export default Card;
