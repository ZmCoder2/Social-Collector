import React from "react";

import CategoryMenu from "../components/CategoryMenu";
import CategoryList from "../components/Categories/categoryCard";
import PostList from "../components/Posts/postsCard";
import AddCategory from "../components/Categories/categoryCard";

const Home = () => {
  return (
    <div className="container">
      <CategoryMenu />
      <CategoryList />
      <PostList />
      <AddCategory />
    </div>
  );
};

export default Home;
