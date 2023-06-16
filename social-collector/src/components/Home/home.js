import React from 'react';
import Navbar from '../../components/Navbar/nav'
function HomePage() {
  return (
    <Navbar />
  );
}



import React from 'react';

const items = [
  {
    title: "Super Mario Odyssey",
    category: "Video Games",
    image: "mario_odyssey.jpg"
  },
  {
    title: "Michael Jordan Autographed Basketball",
    category: "Sports Memorabilia",
    image: "jordan_basketball.jpg"
  },
  {
    title: "One Piece Manga",
    category: "Manga",
    image: "one_piece_manga.jpg"
  },
  {
    title: "Naruto Uzumaki Figure",
    category: "Anime Collectibles",
    image: "naruto_figure.jpg"
  }
  
];

const Homepage = () => {
  const onItemClick = (item) => {
    console.log("Clicked item:", item);
  };

  return (
    <div>
      <h1>Welcome to Social Collector!</h1>
      <div id="item-container">
        {items.map((item, index) => (
          <div
            key={index}
            className="item-card"
            onClick={() => onItemClick(item)}
          >
            <h3>{item.title}</h3>
            <p>{item.category}</p>
            <img src={require(`./images/${item.image}`).default} alt={item.title} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Homepage;
