import React from 'react';
import { useQuery, gql } from '@apollo/client';
import { Link, useParams } from 'react-router-dom';

const GET_POSTS = gql`
  query {
    posts {
      _id
      title
      description
    }
  }
`;

const PostDetails = () => {
 
  const { loading, error, data } = useQuery(GET_POSTS);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error fetching posts: {error.message}</p>;

  const post = data.posts.find((posts) => posts._id );

  if (!post) return <p>Post not found.</p>;

  return (
    <div>
      <h3>{post.title}</h3>
      <p>{post.description}</p>
      <Link to="/posts">Back to Posts</Link>
    </div>
  );
};

export default PostDetails;
