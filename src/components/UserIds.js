import React, { useEffect } from 'react';
import apiService from '../apiService'; // Import your apiService here

const UserIds = () => {
  useEffect(() => {
    // Fetch Facebook user ID
    apiService.get('264108143456046?fields=id&access_token=' + process.env.REACT_APP_FACEBOOK_TOKEN)
      .then(response => {
        console.log('Facebook User ID:', response.data.id);
      })
      .catch(error => {
        console.error('Error fetching Facebook User ID:', error);
      });

    // Fetch Instagram user ID
    apiService.get('17841451195008895?fields=id&access_token=' + process.env.REACT_APP_INSTAGRAM_TOKEN)
      .then(response => {
        console.log('Instagram User ID:', response.data.id);
      })
      .catch(error => {
        console.error('Error fetching Instagram User ID:', error);
      });
  }, []);

  return <div>User IDs fetched!</div>;
};

export default UserIds;
