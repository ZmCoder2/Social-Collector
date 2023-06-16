import React from 'react';
import { useQuery, gql } from '@apollo/client';

const GET_CATEGORIES = gql`
  query {
    categories {
      _id
      title
    }
  }
`;

const CategoryList = () => {
  const { loading, error, data } = useQuery(GET_CATEGORIES);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error fetching categories: {error.message}</p>;

  return (
    <div>
      <h2>Categories</h2>
      {data.categories.map((category) => (
        <div key={category._id}>
          <h3>{category.title}</h3>
        </div>
      ))}
    </div>
  );
};

export default CategoryList;
