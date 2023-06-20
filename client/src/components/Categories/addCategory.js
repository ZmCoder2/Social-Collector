import React, { useState } from 'react';
import { useMutation, gql } from '@apollo/client';

const ADD_CATEGORY = gql`
  mutation AddCategory($name: String!) {
    addCategory(name: $name) {
      _id
      name
    }
  }
`;

const AddCategory = () => {
  const [categoryTitle, setCategoryName] = useState('');
  const [addCategory] = useMutation(ADD_CATEGORY);

  const handleAddCategory = () => {
    addCategory({
      variables: { name: categoryTitle },
    })
      .then(() => {
        setCategoryName('');
      })
      .catch((error) => {
        console.error('Error adding category:', error);
      });
  };

  return (
    <div>
      <h2 className="text-2xl font-bold mb-2">Add Category</h2>
      <div className="flex items-center border-b border-teal-500 py-2">
        <input
          className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
          type="text"
          value={categoryTitle}
          onChange={(e) => setCategoryName(e.target.value)}
          placeholder="Enter category name"
        />
        <button
          className="flex-shrink-0 bg-teal-500 hover:bg-teal-700 border-teal-500 hover:border-teal-700 text-sm text-white py-1 px-2 rounded"
          type="button"
          onClick={handleAddCategory}
        >
          Add
        </button>
        <button
          className="flex-shrink-0 border-transparent border-4 text-teal-500 hover:text-teal-800 text-sm py-1 px-2 rounded"
          type="button"
        >
          Cancel
        </button>
      </div>
    </div>
  );
};

export default AddCategory;
