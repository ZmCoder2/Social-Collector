import React from "react";

import CategoryMenu from "../components/CategoryMenu";
import AddCategory from "../components/Categories/categoryCard";

const Home = () => {
  return (
    <div className="container">
      <CategoryMenu />
      <AddCategory />
    </div>
  );
};

export default Home;
