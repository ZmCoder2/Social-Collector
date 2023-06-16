import React, { useState } from 'react';
import { useMutation, gql } from '@apollo/client';

const ADD_CATEGORY = gql`
  mutation AddCategory($title: String!) {
    addCategory(title: $title) {
      _id
      title
    }
  }
`;

const AddCategory = () => {
  const [categoryTitle, setCategoryTitle] = useState('');
  const [addCategory] = useMutation(ADD_CATEGORY);

  const handleAddCategory = () => {
    addCategory({
      variables: { title: categoryTitle },
    })
      .then(() => {
        setCategoryTitle('');
      })
      .catch((error) => {
        console.error('Error adding category:', error);
      });
  };

  return (
    <div>
      <h2>Add Category</h2>
      <div>
        <input
          type="text"
          value={categoryTitle}
          onChange={(e) => setCategoryTitle(e.target.value)}
          placeholder="Enter category title"
        />
        <button onClick={handleAddCategory}>Add</button>
      </div>
    </div>
  );
};

export default AddCategory;
