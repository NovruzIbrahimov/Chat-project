import React from "react";
import "../Sidebar/sidebar.css";
import Navbar from '../../components/Navbar/Navbar'
import Search from '../../components/Search/Search'
import Chats from '../../components/Chats/Chats'

function Sidebar() {
  return (
    <div className="sidebar">
      <Navbar />
      <Search />
      <Chats />
    </div>
  );
}

export default Sidebar;
