import React from "react";
import { useState } from "react";
import "./RandomTweet.css";
import {useNavigate } from "react-router-dom";


function RandomNavBar() {

   let navigate =  useNavigate();

  const [search, setSearch] = useState("");

  return (
    <nav>
      <div className="btn">
        <button className="btn btn-outline-primary">
          <a href="/">Home</a>
        </button>
        <button className="btn btn-outline">
          <a href="/userTweet">Tweet</a>
        </button>
      </div>
      <form className="search-form">
        <input
          className="search-box"
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Tweet..."
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

export default RandomNavBar;
