import React from "react";
import "../Home/home.css";
import Sidebar from '../../components/Sidebar/Sidebar'
import Chat from '../../components/Chat/Chat'

function Home() {
  return (
    <div className="home">
      <div className="container">
        <Sidebar />
        <Chat />
      </div>
    </div>
  );
}

export default Home;
