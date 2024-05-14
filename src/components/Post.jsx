import React, { useEffect, useState } from "react";

const Post = () => {
  const [caption, setCaption] = useState(null);
  const [submitted, setSubmitted] = useState(false);
  const [image_url, setImage_url] = useState(null);
  // const [userId, setUserId] = useState(null);
  // const [accounts, setAccounts] = useState(null);
  // const [fbPageId, setFbPageId] = useState(null);
  // const [instagramAccountId, setInstagramAccountId] = useState(null);

  // useEffect(() => {
  //   const fetchUserId = async () => {
  //     try {
  //       const response = await fetch(
  //         "https://graph.facebook.com/me?fields=id,name&access_token=EAAQMC9YlcS4BOykqfpO3mZBpbnOGvZAwtDGjRjpj9lDiIzAHnJoZA4rzSNIotCdRk4lzVN27HrEU3zWRLZBShSKzSqqWXVBjW6NH4QXfWUTnVEQDUIB4ovgLba5jGJNcxZBC5noICCcnWsEFNkqED05C0d6FiPPWKyUXs1b3ffZA8ljGcC1bczh8DXZCu9f3spx"
  //       );
  //       const data = await response.json();
  //       setUserId(data.id);
  //     } catch (error) {
  //       console.error("Error fetching user ID:", error);
  //     }
  //   };

  //   fetchUserId();
  // }, []);

  // useEffect(() => {
  //   if (userId) {
  //     const fetchAccounts = async () => {
  //       try {
  //         const response = await fetch(
  //           `https://graph.facebook.com/${userId}/accounts?access_token=EAAQMC9YlcS4BOykqfpO3mZBpbnOGvZAwtDGjRjpj9lDiIzAHnJoZA4rzSNIotCdRk4lzVN27HrEU3zWRLZBShSKzSqqWXVBjW6NH4QXfWUTnVEQDUIB4ovgLba5jGJNcxZBC5noICCcnWsEFNkqED05C0d6FiPPWKyUXs1b3ffZA8ljGcC1bczh8DXZCu9f3spx`
  //         );
  //         const data = await response.json();
  //         setAccounts(data);
  //         if (data.data && data.data.length > 0) {
  //           setFbPageId(data.data[0].id);
  //         }
  //       } catch (error) {
  //         console.error("Error fetching accounts:", error);
  //       }
  //     };

  //     fetchAccounts();
  //   }
  // }, [userId]);

  // useEffect(() => {
  //   if (fbPageId) {
  //     const fetchInstagramAccount = async () => {
  //       try {
  //         const response = await fetch(
  //           `https://graph.facebook.com/${fbPageId}?fields=instagram_business_account&access_token=EAAQMC9YlcS4BOykqfpO3mZBpbnOGvZAwtDGjRjpj9lDiIzAHnJoZA4rzSNIotCdRk4lzVN27HrEU3zWRLZBShSKzSqqWXVBjW6NH4QXfWUTnVEQDUIB4ovgLba5jGJNcxZBC5noICCcnWsEFNkqED05C0d6FiPPWKyUXs1b3ffZA8ljGcC1bczh8DXZCu9f3spx`
  //         );
  //         const data = await response.json();
  //         setInstagramAccountId(data.instagram_business_account);
  //       } catch (error) {
  //         console.error("Error fetching Instagram account:", error);
  //       }
  //     };

  //     fetchInstagramAccount();
  //   }
  // }, [fbPageId]);

  const [containerId, setContainerId] = useState(null);
  // useEffect(() => {
  //   const createContainer = async () => {
  //     try {
  //       const response = await fetch(
  //         `https://graph.facebook.com/v19.0/17841451195008895/media?image_url=https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgJlkNP6p9n_kwIwFSLMtDYdVrD1gSDq_p88yi6PrMwF4AK6Okyy4Zuam5dIF6SUz0jIhdvtjriNgF6_YAcTk4vkjNqCUHFrGxPExx200hWY_vjOcZA8Pu-dqbHVakfzhnIFsX0ksSD17zeYSzllIf1JGxfUhT4oR1ix7l6ksi1jDb6Ed6EuqoB0VbOATCd/s1920/uwp3798573.jpeg&caption=${caption}&access_token=EAAQMC9YlcS4BOykqfpO3mZBpbnOGvZAwtDGjRjpj9lDiIzAHnJoZA4rzSNIotCdRk4lzVN27HrEU3zWRLZBShSKzSqqWXVBjW6NH4QXfWUTnVEQDUIB4ovgLba5jGJNcxZBC5noICCcnWsEFNkqED05C0d6FiPPWKyUXs1b3ffZA8ljGcC1bczh8DXZCu9f3spx`,
  //         {
  //           method: "POST",
  //         }
  //       );
  //       const data = await response.json();
  //       console.log(data);
  //       setContainerId(data.id);
  //       console.log("Container created successfully !!");
  //     } catch (error) {
  //       console.error("Error:", error);
  //     }
  //   };
  
  //   if (caption) {
    //     createContainer();
    //   }
    // }, [caption]);
    
    const handleCaptionChange = (event) => {
      setCaption(event.target.value);
    };
    
    const [sucessfullyposted, setsucessfullyposted] = useState(null)
    
  const handleSubmit = async () => {
    try {
      const response = await fetch(
        `https://graph.facebook.com/v19.0/17841451195008895/media?image_url=${image_url}&caption=${caption}&access_token=EAAQMC9YlcS4BOykqfpO3mZBpbnOGvZAwtDGjRjpj9lDiIzAHnJoZA4rzSNIotCdRk4lzVN27HrEU3zWRLZBShSKzSqqWXVBjW6NH4QXfWUTnVEQDUIB4ovgLba5jGJNcxZBC5noICCcnWsEFNkqED05C0d6FiPPWKyUXs1b3ffZA8ljGcC1bczh8DXZCu9f3spx`,
        {
          method: "POST",
        }
      );
      const data = await response.json();
      const ContainerId= data.id;
      // setContainerId(data.id);
      console.log("Container created successfully !!");
      
      const responsePost = await fetch(
        `https://graph.facebook.com/v19.0/17841451195008895/media_publish?creation_id=${ContainerId}&access_token=EAAQMC9YlcS4BOykqfpO3mZBpbnOGvZAwtDGjRjpj9lDiIzAHnJoZA4rzSNIotCdRk4lzVN27HrEU3zWRLZBShSKzSqqWXVBjW6NH4QXfWUTnVEQDUIB4ovgLba5jGJNcxZBC5noICCcnWsEFNkqED05C0d6FiPPWKyUXs1b3ffZA8ljGcC1bczh8DXZCu9f3spx`,
        {
          method: "POST",
        }
      );
      const postData = await responsePost.json();
      console.log(postData);
      console.log("Image posted successfully !!");
      setsucessfullyposted("image posted sugcessfulli")
      setSubmitted(true);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div>
      <div>
        Input your image_url
        <input
          type="text"
          value={image_url}
          onChange={(e) => setImage_url(e.target.value)}
        />
        <button onClick={handleSubmit} disabled={submitted}>
          Submit
        </button>
      </div>
      <div>
        Input your caption
        <input
          type="text"
          value={caption}
          onChange={(e) => setCaption(e.target.value)}
        />
        <button onClick={handleSubmit} disabled={submitted}>
          Submit
        </button>
      </div>
      {submitted ? (
        <div>
          <div>{sucessfullyposted}</div>
          <div>{containerId}</div>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};
export default Post;
