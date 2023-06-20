import React from "react";
import CategoryList from "../components/Categories/categoryCard";
import PostList from "../components/Posts/postsCard";
import "../index.css";

const Home = () => {
  return (
    <div className="container mx-auto flex flex-wrap">
      <div className="card shadow-lg rounded-lg p-4 w-full md:w-1/2 order-2 md:order-1">
        
        <PostList />
      </div>
      <div className="card shadow-lg rounded-lg p-4 w-full md:w-1/2 order-1 md:order-2 mt-4 md:mt-0">
      
        <CategoryList />
      </div>
    </div>
  );
};

export default Home;
