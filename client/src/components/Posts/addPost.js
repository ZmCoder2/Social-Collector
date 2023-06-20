import React, { useState } from 'react';
import { useMutation, useQuery, gql } from '@apollo/client';
import jwt_decode from 'jwt-decode';

const ADD_POST = gql`
  mutation AddPost(
    $title: String!
    $description: String!
    $category: String!
    $user: String!
  ) {
    addPost(
      title: $title
      description: $description
      category: $category
      user: $user
    ) {
      _id
      title
      description
      category {
        _id
      }
      user {
        _id
      }
    }
  }
`;

const GET_CATEGORIES = gql`
  query GetCategories {
    categories {
      _id
      name
    }
  }
`;

const AddPost = () => {
  const [postTitle, setPostTitle] = useState('');
  const [postDescription, setPostDescription] = useState('');
  const [postCategory, setPostCategory] = useState('');
  //const [postImage, setPostImage] = useState(null); // Track the selected image file
  const [addPost] = useMutation(ADD_POST);
  const { loading, error, data } = useQuery(GET_CATEGORIES);

  const handleAddPost = () => {
    console.log('postTitle:', postTitle);
    console.log('postDescription:', postDescription);
    console.log('postCategory:', postCategory);
    //console.log('postImage:', postImage);

    if (!postTitle || !postDescription || !postCategory ) {
      console.error('Please fill in all required fields');
      return;
    }

    const token = localStorage.getItem('id_token') || '';
    const decoded = jwt_decode(token);
    const userId = decoded.data._id;

    addPost({
      variables: {
        title: postTitle,
        description: postDescription,
        category: postCategory,
        user: userId,
     
      },
    })
      .then(() => {
        setPostTitle('');
        setPostCategory('');
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
    <div className="max-w-2xl mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4">Add Post</h2>
      <div className="flex flex-col space-y-4">
        <div className="flex space-x-4">
          <input
            type="text"
            value={postTitle}
            onChange={(e) => setPostTitle(e.target.value)}
            placeholder="Enter post title"
            className="flex-1 px-4 py-2 border border-gray-300 rounded-md"
          />
          <select
            value={postCategory}
            onChange={(e) => setPostCategory(e.target.value)}
            placeholder="Select post category"
            className="w-1/3 px-4 py-2 border border-gray-300 rounded-md"
          >
            <option value="">Select category</option>
            {categories.map((category) => (
              <option key={category._id} value={category._id}>
                {category.name}
              </option>
            ))}
          </select>
        </div>
        <textarea
          value={postDescription}
          onChange={(e) => setPostDescription(e.target.value)}
          placeholder="Enter post description"
          className="h-24 px-4 py-2 border border-gray-300 rounded-md"
          maxLength={250}
        />
        {/* <input
          type="file"
          onChange={(e) => setPostImage(e.target.files[0])}
          accept="image/*" // Accept only image files
          className="border border-gray-300 rounded-md"
        /> */}
        <button
          onClick={handleAddPost}
          className="bg-blue-500 hover:bg-blue-600 text-white px-2 py-1 rounded-md"
        >
          Create Post
        </button>
      </div>
    </div>
  );
};

export default AddPost;