import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useMutation } from '@apollo/client';
import Auth from '../utils/auth';
import { ADD_USER } from '../utils/mutations';
import Footer from '../components/Footer';

function Signup(props) {
  const [formState, setFormState] = useState({ email: '', password: '', username: '' });
  const [addUser] = useMutation(ADD_USER);

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    const mutationResponse = await addUser({
      variables: {
        email: formState.email,
        password: formState.password,
        username: formState.username,
      },
    });
    const token = mutationResponse.data.addUser.token;
    Auth.login(token);
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormState((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  return (
<form onSubmit={handleFormSubmit} className="max-w-sm mx-auto">
  <div className="mb-4">
    <label htmlFor="username" className="text-gray-700">Username:</label>
    <input
      type="text"
      id="username"
      name="username"
      placeholder="Username"
      value={formState.username}
      onChange={handleChange}
      className="border border-gray-400 p-2 rounded-md w-full focus:outline-none focus:border-blue-500"
    />
  </div>

  <div className="mb-4">
    <label htmlFor="email" className="text-gray-700">Email:</label>
    <input
      type="email"
      id="email"
      name="email"
      placeholder="example@example.com"
      value={formState.email}
      onChange={handleChange}
      className="border border-gray-400 p-2 rounded-md w-full focus:outline-none focus:border-blue-500"
    />
  </div>

  <div className="mb-4">
    <label htmlFor="password" className="text-gray-700">Password:</label>
    <input
      type="password"
      id="password"
      name="password"
      placeholder="******"
      value={formState.password}
      onChange={handleChange}
      className="border border-gray-400 p-2 rounded-md w-full focus:outline-none focus:border-blue-500"
    />
  </div>

  <button type="submit" className="bg-blue-500 text-white font-semibold py-2 px-4 rounded-md">
    Submit
  </button>
</form>


  );
}

export default Signup;
