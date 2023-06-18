import React from "react";

import CategoryMenu from "../components/CategoryMenu";
import CategoryList from "../components/Categories/categoryCard";
import PostList from "../components/Posts/postsCard";
import AddCategory from "../components/Categories/categoryCard";
import './home.css';

const Home = () => {
  return (
    <div className="card-container">
      <div className="card">
        {/* <h2>Categories</h2> */}
        <CategoryList />
        {/* <AddCategory /> */}
      </div>
      <div className="card">
        {/* <h2>Posts</h2> */}
        <PostList />
      </div>
    </div>
  );
};

export default Home;

