import React from "react";
import "../Search/search.css";

function Search() {
  return (
    <div className="search">
      <div className="searchForm">
        <input type="text" placeholder="Find a user" />
      </div>

      <div className="userChat">
        <img src="" alt="" />
        <div className="userChatInfo">
          <span></span>
        </div>
      </div>
    </div>
  );
}

export default Search;
