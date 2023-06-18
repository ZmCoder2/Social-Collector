import React, { useEffect } from 'react';
import { useMutation, useQuery } from '@apollo/client';
import { Jumbotron } from 'react-bootstrap';
import { SHOW_PROFILE } from '../utils/queries';
import { idbPromise } from '../utils/helpers';

function Profile() {
  const { loading, error, data } = useQuery(SHOW_PROFILE);

  useEffect(() => {
    if (data) {
      const seedData = data.profile; // Adjust this based on your response structure
      console.log(seedData); // Print the retrieved seed data for testing

      // Store the seed data in IndexedDB or other local storage mechanism
      idbPromise('seedData', 'put', seedData); // Assuming you have a helper function for IndexedDB
    }
  }, [data]);

  if (loading) {
    // Render a loading state if the data is still loading
    return <div>Loading...</div>;
  }

  if (error) {
    // Handle the error state if the data fetching encounters an error
    return <div>Error occurred: {error.message}</div>;
  }

  return (
    <div>
      <div className="jumbotron">
        <h1>Success!</h1>
        {/* Access and display the seed data */}
        {data && data.profile && data.profile.map((item) => (
          <div key={item.id}>
            <h2>{item.name}</h2>
            <p>{item.description}</p>
            {/* Render other details as needed */}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Profile;
