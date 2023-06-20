import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import { createUploadLink } from 'apollo-upload-client';
import { setContext } from '@apollo/client/link/context';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Nav from './components/Nav';
import Profile from './pages/Profile';
import AddCategory from './components/Categories/addCategory';
import AddPost from './components/Posts/addPost';
import PrivateRoutes from "./PrivateRoutes";
import RenderPosts from './pages/Posts';
import FullPost from './components/Posts/FullPost';
import CategoryPosts from './components/Categories/CategoryPosts';

const httpLink = createUploadLink({
  uri: 'http://localhost:3000/graphql',
});

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem('id_token');
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
        <div className="container mx-auto">
          <Nav />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route element={<PrivateRoutes />}>
              <Route path="/addcategory" element={<AddCategory />} />
              <Route path="/addpost" element={<AddPost />} />
              <Route path="/profile" element={<Profile />} />
            </Route>
            <Route path="/profile" element={<Profile />} />
            <Route path="/posts" element={<RenderPosts />} />
            <Route path="/posts/:postsId" element={<FullPost />} />
            <Route path="/categories/:categoryId" element={<CategoryPosts />} />
          </Routes>
        </div>
      </Router>
    </ApolloProvider>
  );
}

export default App;