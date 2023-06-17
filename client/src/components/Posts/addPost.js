import React, { useState } from 'react';
import { useMutation, useQuery, gql } from '@apollo/client';

// const ADD_POST = gql`
//   mutation AddPost($category: ID!, $title: String!, $description: String!) {
//     addPost(category: $category, title: $title, description: $description) {
//       _id
//       category
//       title
//       description
//     }
//   }
// `;

// const GET_CATEGORIES = gql`
//   query GetCategories {
//     categories {
//       _id
//       title
//     }
//   }
// `;

// const AddPost = () => {
//   const [postTitle, setPostTitle] = useState('');
//   const [postCategory, setPostCategory] = useState('');
//   const [postDescription, setPostDescription] = useState('');
//   const [addPost] = useMutation(ADD_POST);

//   const { loading, error, data } = useQuery(GET_CATEGORIES);

//   const handleAddPost = () => {
//     addPost({
//       variables: {
//         title: postTitle,
//         category: postCategory,
//         description: postDescription
//       },
//     })
//       .then(() => {
//         setPostTitle('');
//         setPostCategory('');
//         setPostDescription('');
//       })
//       .catch((error) => {
//         console.error('Error adding post:', error);
//       });
//   };

//   if (loading) return <p>Loading...</p>;
//   if (error) return <p>Error fetching categories...</p>;

//   const { categories } = data;

//   return (
//     <div>
//       <h2>Add Post</h2>
//       <div>
//         <input
//           type="text"
//           value={postTitle}
//           onChange={(e) => setPostTitle(e.target.value)}
//           placeholder="Enter post title"
//         />
//         <select
//           value={postCategory}
//           onChange={(e) => setPostCategory(e.target.value)}
//           placeholder="Select post category"
//         >
//           <option value="">Select category</option>
//           {categories.map((category) => (
//             <option key={category._id} value={category._id}>
//               {category.title}
//             </option>
//           ))}
//         </select>
//         <input
//           type="text"
//           value={postDescription}
//           onChange={(e) => setPostDescription(e.target.value)}
//           placeholder="Enter post description"
//         />
//         <button onClick={handleAddPost}>Add</button>
//       </div>
//     </div>
//   );
// };





// export default AddPost;


// import { useMutation } from '@apollo/client';
// import { CREATE_POST_MUTATION } from './mutations'; // Replace with the actual mutation file

const CREATE_POST = gql`
mutation CreatePost($title: String!, $description: String!, $category: String!) {
  createPost(title: $title, description: $description, category: $category) {
    id
    title
    description
    category
  }
}
`;



function CreatePostForm() {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [category, setCategory] = useState('');

  const [createPost, { loading, error }] = useMutation(CREATE_POST);

  const handleSubmit = (e) => {
    e.preventDefault();
    createPost({ variables: { title, description, category } })
      .then((response) => {
        // Handle successful post creation
        console.log('Post created:', response.data.createPost);
      })
      .catch((error) => {
        // Handle error
        console.error('Error creating post:', error);
      });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <input
        type="text"
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <input
        type="text"
        placeholder="Category"
        value={category}
        onChange={(e) => setCategory(e.target.value)}
      />
      <button type="submit" disabled={loading}>
        Create Post
      </button>
      {error && <p>Error creating post</p>}
    </form>
  );
}
export default CreatePostForm;