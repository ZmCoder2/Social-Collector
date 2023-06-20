const db = require('./connection.js');
const { User, Posts, Categories } = require('../models');

db.once('open', async () => {
  try {
    const category = await Categories.insertMany([
      { name: 'Vinyls', posts: [] },
      { name: 'Anime', posts: [] },
      { name: 'Shoes', posts: [] },
      { name: 'Vintage Video Games', posts: [] },
      { name: 'Sports', posts: [] }
    ])
    console.log('categories seeded');

    const posts = await Posts.insertMany([
      {
        title: 'Michael Jordan Signed Jersey',
        description: 'Jersey is from 1991.',
        category: category[4]._id,
        userPosts: [],
        comments: [],
        image: null
      },
      {
        title: 'One Piece Figurines',
        description: 'The whole Straw Hat Pirate crew.',
        category: category[1]._id,
        userPosts: [],
        comments: [],
        // image: null
      },
      {
        title: 'Travis Scott Jordan 1 lows',
        description: 'Brand new never worn',
        category: category[2]._id,
        userPosts: [],
        comments: [],
        // image: null
      },
      {
        title: 'Patriots 2019 Super Bowl Ring',
        description:
          'Praesent placerat, odio vel euismod venenatis, lectus arcu laoreet felis, et fringilla sapien turpis vestibulum nisl.',
        category: category[4]._id,
        userPosts: [],
        comments: [],
        // image: null
      },
      {
        title: 'Nirvana Vinyl Collection',
        description: 'The whole set of Nirvana vinyls.',
        category: category[0]._id,
        userPosts: [],
        comments: [],
        // image: null
      },
      {
        title: 'Nintendo 64 Games',
        description:
          'Super Mario 64, The Legend of Zelda: Ocarina of Time, GoldenEye 007, Mario Kart 64, The Legend of Zelda: Majoras Mask, Perfect Dark, Super Smash Bros., Banjo-Kazooie, Donkey Kong 64, Star Fox 64, Pokémon Stadium, Paper Mario, Diddy Kong Racing, Conkers Bad Fur Day, Wave Race 64, Mario Party, F-Zero X, Yoshis Story, Resident Evil 2, Bomberman 64.',
        category: category[3]._id,
        userPosts: [],
        comments: [],
        image: null
      },
      {
        title: 'Vintage Pokemon cards',
        description:
          'Charizard, Blastoise, Venusaur, Pikachu, Mewtwo, Zapdos, Articuno, Moltres, Raichu, Dragonite, Gyarados, Alakazam, Jolteon, Flareon, Vaporeon, Aerodactyl, Arcanine, Lapras, Scyther, Hitmonchan.',
        category: category[1]._id,
        userPosts: [],
        comments: [],
        // image: null
      },
      {
        title: 'Yeezy Boosts Collection',
        description:
          'Yeezy Boost 350 Turtle Dove, Pirate Black, Moonrock, Oxford Tan, Beluga, Zebra, Bred, Cream White, Sesame, Butter, Static Yeezy Boost 350 V2 Black/Red, Blue Tint, Semi Frozen Yellow, Clay, Hyperspace, True Form, Citrin, Antlia, Lundmark.',
        category: category[2]._id,
        userPosts: [],
        comments: [],
        // image: null
      },
      {
        title: 'The Doors Vinyl Collection',
        description:
          'The Doors, Strange Days, Waiting for the Sun, The Soft Parade, Morrison Hotel, Absolutely Live, L.A. Woman, Other Voices, Full Circle, An American Prayer.',
        category: category[0]._id,
        userPosts: [],
        comments: [],
        // image: null
      },
      {
        title: 'Halo Collection',
        description: 'All of the Halo games and master chief xbox 360.',
        category: category[3]._id,
        userPosts: [],
        comments: [],
        // image: 'plastic-horses.jpg'
      },
      {
        title: '2019 LSU Home Game Tickets',
        description: 'All of LSUs Football game tickets from 2019.',
        category: category[4]._id,
        userPosts: [],
        comments: [],
        image: 'teddy-bear.jpg'
      },
      {
        title: 'Jordan Shoe Collection',
        description:
          'Jordan 1, Jordan 3, Jordan 4, Jordan 5, Jordan 6, Jordan 11, Jordan 12, Jordan 13, Jordan 14, Jordan 23, Jordan 33, Jordan 34, Jordan 35, Jordan 36, Jordan 1 Low, Jordan 4 Retro, Jordan 6 Rings, Jordan Spizike, Jordan Son of Mars.',
        category: category[2]._id,
        usersPosts: [],
        comments: [],
        // image: null
      }
    ]);
    console.log('posts seeded');

    await User.deleteMany();

    await User.create({
      username: 'Pamela5',
      email: 'pamela@testmail.com',
      password: 'rootp1234',
      posts: [
        {
          posts: [posts[0]._id, posts[4]._id, posts[5]._id]
        }
      ]
    });

    await User.create({
      username: 'Elijah2',
      email: 'eholt@testmail.com',
      password: 'roote1234',
      posts: [
        {
          posts: [posts[1]._id, posts[2]._id, posts[3]._id]
        }
      ]
    });

    console.log('users seeded');

    process.exit();
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
});

