import React from "react";
import { Link } from "react-router-dom";

// * Home 컴포넌트는 <Link> 컴포넌트를 사용해서 Detail 컴포넌트로 이동하도록 하세요.

const Home = () => {
  return (
    <div>
      <h1>Home</h1>
      <Link to="/detail">
        <span>Detail</span>
      </Link>
    </div>
  );
};

export default Home;
