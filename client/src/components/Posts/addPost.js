import React, { useState } from 'react';
import { useMutation, useQuery, gql } from '@apollo/client';

const ADD_POST = gql`
  mutation AddPost( $title: String!, $description: String!) {
    addPost( title: $title, description: $description) {
      _id
     
      title
      description
    }
  }
`;

const GET_CATEGORIES = gql`
  query GetCategories {
    categories {
      _id
      title
    }
  }
`;

const AddPost = () => {
  const [postTitle, setPostTitle] = useState('');
  
  const [postDescription, setPostDescription] = useState('');
  const [addPost] = useMutation(ADD_POST);

  const { loading, error, data } = useQuery(GET_CATEGORIES);

  const handleAddPost = () => {
    addPost({
      variables: {
        title: postTitle,
        
        description: postDescription
      },
    })
      .then(() => {
        setPostTitle('');
        
        setPostDescription('');
      })
      .catch((error) => {
        console.error('Error adding post:', error);
      });
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error fetching categories...</p>;

  const { categories } = data;

  return (
    <div>
      <h2>Add Post</h2>
      <div>
        <input
          type="text"
          value={postTitle}
          onChange={(e) => setPostTitle(e.target.value)}
          placeholder="Enter post title"
        />
        <select
         
         
          placeholder="Select post category"
        >
          <option value="">Select category</option>
          {categories.map((category) => (
            <option key={category._id} value={category._id}>
              {category.title}
            </option>
          ))}
        </select>
        <input
          type="text"
          value={postDescription}
          onChange={(e) => setPostDescription(e.target.value)}
          placeholder="Enter post description"
        />
        <button onClick={handleAddPost}>Add</button>
      </div>
    </div>
  );
};





export default AddPost;
