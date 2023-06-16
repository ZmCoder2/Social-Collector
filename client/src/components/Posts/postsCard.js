import React from 'react';
import { useQuery, gql } from '@apollo/client';

const GET_POSTS = gql`
  query {
    posts {
      _id
      title
    }
  }
`;

const PostList = () => {
  const { loading, error, data } = useQuery(GET_POSTS);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error fetching posts: {error.message}</p>;

  return (
    <div>
      <h2>Posts</h2>
      {data.posts.map((post) => (
        <div key={post._id}>
          <h3>{post.title}</h3>
        </div>
      ))}
    </div>
  );
};

export default PostList;
