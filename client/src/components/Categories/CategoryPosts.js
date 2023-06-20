import React from 'react';
import { useParams } from 'react-router-dom';
import { useQuery, gql } from '@apollo/client';
import { Link } from 'react-router-dom';

const GET_CATEGORY_POSTS = gql`
  query CategoryPosts($categoryId: ID!) {
    categoryPosts(categoryId: $categoryId) {
      _id
      title
    }
  }
`;

const CategoryPosts = () => {
  const { categoryId } = useParams();
  const { loading, error, data } = useQuery(GET_CATEGORY_POSTS, {
    variables: { categoryId },
  });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error fetching posts: {error.message}</p>;

  return (
    <div>
      <h2>Posts in this Category</h2>
      {data.categoryPosts.map((post) => (
        <div key={post._id}>
          <Link to={`/posts/${post._id}`}>{post.title}</Link>
        </div>
      ))}
    </div>
  );
};

export default CategoryPosts;
