const express = require("express");
const path = require("path");
const multer = require('multer');

// Apollo-server-express (deprecates in Oct 2023 to @apollo/server. Keep in mind!)
const { ApolloServer } = require('apollo-server-express');
const { typeDefs, resolvers } = require('./schemas');

// mongoose connector
const db = require("./config/connection");
// PORT
const PORT = process.env.PORT || 3001;

// Instantiate new Apolloserver
const apolloServer = new ApolloServer({
  typeDefs,
  resolvers
});

// Express
const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

if (process.env.NODE_ENV === 'production') {
  // To READ the react content when it is deployed on the internet
  app.use(express.static(path.join(__dirname, '../client/build')));
}

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../client/build/index.html'));
});

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/');
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + path.extname(file.originalname));
  },
});

// Create the multer middleware
const upload = multer({ storage: storage });

app.post('/upload', upload.single('image'), (req, res) => {
  // The uploaded file can be accessed using req.file
  // You can store the file path in your database or perform other operations

  res.json({ message: 'File uploaded successfully' });
});

// Set the Apollo Server middleware and add the Apollo-Require-Preflight header
app.use((req, res, next) => {
  res.set('Apollo-Require-Preflight', 'true');
  next();
});

// Start Apolloserver, then connect to express, connect to mongoose, THEN start the app
const startApolloServer = async () => {
  await apolloServer.start();
  apolloServer.applyMiddleware({ app, path: '/graphql' });
  db.once('open', () => {
    app.listen(PORT, () => {
      console.log("Server running on PORT 3001!");
    });
  });
};

startApolloServer();
