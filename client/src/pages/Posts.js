import React from 'react';
import { useQuery, gql } from '@apollo/client';

const GET_POSTS = gql`
  query {
    posts {
      _id
      title
      description
      user {
        _id
      }
    }
  }
`;

const PostList = () => {
  const { loading, error, data } = useQuery(GET_POSTS);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error fetching posts: {error.message}</p>;

  const truncateDescription = (description, maxLength) => {
    if (description.length > maxLength) {
      return description.substring(0, maxLength) + '...';
    }
    return description;
  };

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Posts</h2>
      {data.posts.map((post) => (
        <div key={post._id} className="mb-4 p-4 border rounded">
          <h3 className="text-lg font-semibold">
            <a href={`/posts/${post._id}`} className="text-blue-500 hover:underline">
              {post.title}
              
            </a>
          </h3>
          <p className="text-gray-600">
            {truncateDescription(post.description, 100)}
          </p>
        </div>
      ))}
    </div>
  );
};

export default PostList;
