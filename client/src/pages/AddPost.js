import React from "react";

import CategoryMenu from "../components/CategoryMenu";
import AddPost from "../components/Posts/addPost";

const Home = () => {
  return (
    <div className="container">
      <CategoryMenu />
      <AddPost />
    </div>
  );
};

export default Home;
