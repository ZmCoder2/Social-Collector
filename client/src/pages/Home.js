import React from "react";

import CategoryMenu from "../components/CategoryMenu";
import CategoryList from "../components/Categories/categoryCard";
import PostList from "../components/Posts/postsCard";

const Home = () => {
  return (
    <div className="container">
      <CategoryMenu />
      <CategoryList />
      <PostList />
    </div>
  );
};

export default Home;
