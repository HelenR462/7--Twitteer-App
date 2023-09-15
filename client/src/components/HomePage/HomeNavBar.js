import React, { useState } from "react";
import {useNavigate, Link } from "react-router-dom";



function HomeNavBar() {
  const [search, setSearch] = useState("");

let navigate =  useNavigate();

  return (
    <nav>
      <div className="btn">
        <Link className="btn btn-outline-primary" to="/">
          Home
        </Link>
        <Link className="btn btn-outline" to="/UserTweet">
          Tweet
        </Link>
        <Link className="btn-lg" to="/randomTweet">
          Random Tweet
        </Link>
      </div>
      <form className="search-form">
        <input
          className="search-box"
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Enter user name or content..."
        ></input>
        <button className="submit" type="submit"
         onSubmit={()=>{navigate("/UserTweetCard")}}
        >
          Search
        </button>
      </form>
    </nav>
  );
}

export default HomeNavBar;
