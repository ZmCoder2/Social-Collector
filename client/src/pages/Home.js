import React from "react";

import CategoryMenu from "../components/CategoryMenu";


const Home = () => {
  const recentPosts = [
    { id: 1, title: 'Recent Post 1' },
    { id: 2, title: 'Recent Post 2' },
    { id: 3, title: 'Recent Post 3' },
  ];

  const popularPosts = [
    { id: 4, title: 'Popular Post 1' },
    { id: 5, title: 'Popular Post 2' },
    { id: 6, title: 'Popular Post 3' },
  ];

  const categories = [
    { id: 1, title: 'Category 1' },
    { id: 2, title: 'Category 2' },
    { id: 3, title: 'Category 3' },
  ];
  return (

    <div className="container">
       <CategoryMenu />
     

    <div>
      <h1>Welcome to the Blog!</h1>

      <div className="card">
        <h2>Recent Posts</h2>
        {recentPosts.map((post) => (
          <div key={post.id}>
            <h3>{post.title}</h3>
          </div>
        ))}
      </div>

      <div className="card">
        <h2>Popular Posts</h2>
        {popularPosts.map((post) => (
          <div key={post.id}>
            <h3>{post.title}</h3>
          </div>
        ))}
      </div>

      <div className="card">
        <h2>Categories</h2>
        {categories.map((category) => (
          <div key={category.id}>
            <h3>{category.title}</h3>
          </div>
        ))}
      </div>
    </div>





    </div>
  );
};

export default Home;
