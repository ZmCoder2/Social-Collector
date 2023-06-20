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
      <h1 className="mb-4 text-3xl font-extrabold text-gray-900 dark:text-white md:text-5xl lg:text-6xl">
        <span className="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400">Latest Posts</span>
      </h1>
      <p className="text-lg font-normal text-gray-500 lg:text-xl dark:text-gray-400"></p>
      
      <ul className="list-disc pl-6">
        {data.posts.map((post) => (
          <li key={post._id}>
            <a href={`/posts/${post._id}`}>
              <h3>{post.title}</h3>
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PostList;
