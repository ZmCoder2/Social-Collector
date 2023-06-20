import React from "react";
import shoes from "../assets/shoes.jpeg";
import anime from "../assets/anime.webp";
import workout from "../assets/workout.webp";
import CategoryMenu from "../components/CategoryMenu";
import CategoryList from "../components/Categories/categoryCard";
import PostList from "../components/Posts/postsCard";
import AddCategory from "../components/Categories/categoryCard";
import './home.css';

const Home = () => {
  
    return (
      <div className="background"> 
    <div className="card" id= "category">
        { /*<h2>Categories</h2>*/ }
        
        <CategoryList />
        {/* <AddCategory /> */} 
    </div>
    
<div className="card-group">
  <div className="card cards">
    <img src= {shoes} className="card-img-top" alt="..." />
    <div className="card-body">
      <h5 className="card-title">Shoe Collects</h5>
      <p className="card-text">
        Click Here For Shoes
      </p>
      <a href="#" className="btn btn-primary">
        Go somewhere
      </a>
      <p className="card-text">
        <small className="text-body-secondary">Last updated 3 mins ago</small>
      </p>
    </div>
  </div>
  <div className="card cards">
    <img src= {anime} className="card-img-top" alt="..." />
    <div className="card-body">
      <h5 className="card-title">Anime Social</h5>
      <p className="card-text">
        Click here for Anime
      </p>
      <a href="#" className="btn btn-primary">
        Go somewhere
      </a>
      <p className="card-text">
        <small className="text-body-secondary">Last updated 3 mins ago</small>
      </p>
    </div>
  </div>
  <div className="card cards">
    <img src= {workout} className="card-img-top" alt="..." />
    <div className="card-body">
      <h5 className="card-title">Workout Social</h5>
      <p className="card-text">
        Click here for Workout
      </p>
      <a href="#" className="btn btn-primary">
        Go somewhere
      </a>
      <p className="card-text">
        <small className="text-body-secondary">Last updated 3 mins ago</small>
      </p>
    </div>
  </div>
</div>
<div className="card-group">
  <div className="card cards">
    <img src="..." className="card-img-top" alt="..." />
    <div className="card-body">
      <h5 className="card-title">Card title</h5>
      <p className="card-text">
        This is a wider card with supporting text below as a natural lead-in to
        additional content. This content is a little bit longer.
      </p>
      <a href="#" className="btn btn-primary">
        Go somewhere
      </a>
      <p className="card-text">
        <small className="text-body-secondary">Last updated 3 mins ago</small>
      </p>
    </div>
  </div>
  <div className="card cards">
    <img src="..." className="card-img-top" alt="..." />
    <div className="card-body">
      <h5 className="card-title">Card title</h5>
      <p className="card-text">
        This card has supporting text below as a natural lead-in to additional
        content.
      </p>
      <a href="#" className="btn btn-primary">
        Go somewhere
      </a>
      <p className="card-text">
        <small className="text-body-secondary">Last updated 3 mins ago</small>
      </p>
    </div>
  </div>
  <div className="card cards">
    <img src="..." className="card-img-top" alt="..." />
    <div className="card-body">
      <h5 className="card-title">Card title</h5>
      <p className="card-text">
        This is a wider card with supporting text below as a natural lead-in to
        additional content. This card has even longer content than the first to
        show that equal height action.
      </p>
      <a href="#" className="btn btn-primary">
        Go somewhere
      </a>
      <p className="card-text">
        <small className="text-body-secondary">Last updated 3 mins ago</small>
      </p>
    </div>
  </div>
</div>
<footer className="bg-dark text-white-50 py-5 mt-5" id="sticky-footer">
  <div className="footer text-lighter text-center">
    <p className="display-5 mb-3">SocialCollectors</p>
    <small className="text-center">
      © Copyright by Group 12. All Rights Reserved
    </small>
  </div>
</footer>
  </div>
  );
};

export default Home;

