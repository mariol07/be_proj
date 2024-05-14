import React from 'react';
import apiService from '../apiService'; // Import your apiService here

const CreatePost = () => {
  const postToFacebook = () => {
    apiService.post('264108143456046/feed?message=Hello&access_token=' + process.env.REACT_APP_FACEBOOK_TOKEN)
      .then(response => {
        console.log('Post to Facebook successful:', response.data);
      })
      .catch(error => {
        console.error('Error posting to Facebook:', error);
      });
  };

  const postToInstagram = () => {
    apiService.post('17841451195008895/media?caption=Hello&access_token=' + process.env.REACT_APP_INSTAGRAM_TOKEN)
      .then(response => {
        console.log('Post to Instagram successful:', response.data);
      })
      .catch(error => {
        console.error('Error posting to Instagram:', error);
      });
  };

  return (
    <div>
      <button onClick={postToFacebook}>Post to Facebook</button>
      <button onClick={postToInstagram}>Post to Instagram</button>
    </div>
  );
};

export default CreatePost;
