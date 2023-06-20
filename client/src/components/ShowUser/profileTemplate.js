import React from 'react';
import { useQuery, gql } from '@apollo/client';
import AuthService from '../../utils/auth';

const GET_USER = gql`
  query GetUser {
    user {
      _id
      username
      email
    }
  }
`;

const Profile = () => {
  const user = AuthService.getProfile();
  const userId = user.data._id;
  const username = user.data.username;
  const email = user.data.email;
  const { loading, error, data } = useQuery(GET_USER, {
    variables: { userId },
  });

  console.log('User:', user);
  console.log('User ID:', userId);
  console.log('Data:', data);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  // const { username, email } = data.user;

  return (
    <div className="container mx-auto mt-8">
      <div className="flex justify-end space-x-4">
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          <a href="/addcategory">Add Category</a>
        </button>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          <a href="/addpost">Add Post</a>
        </button>
      </div>

      <h2 className="text-xl">Username: {username}</h2>
      <p>Email: {email}</p>
      <h3 className="text-lg">Posts:</h3>
      {/* <ul>
        {posts.map((post, index) => (
          <li key={index}>
            <h4>{post.title}</h4>
            <p>{post.content}</p>
          </li>
        ))}
      </ul> */}
    </div>
  );
};

export default Profile;
