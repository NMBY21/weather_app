// src/index.js

// Challenge 2: Fetch comments from the API
axios
  .get("https://jsonplaceholder.typicode.com/comments")
  .then((response) => {
    // Challenge 2: Log the API response
    console.log("API Response:", response.data);

    // Challenge 3: Log the first comment email
    if (response.data.length > 0) {
      console.log("First Comment Email:", response.data[0].email);
    }
  })
  .catch((error) => {
    console.error("Error fetching comments:", error);
  });
