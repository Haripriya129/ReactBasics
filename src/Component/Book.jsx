// Import Axios at the top of your component file
import axios from 'axios';
import React, { useEffect, useState } from 'react';

const Book = () => {
  // State to store the fetched data
  const [books, setBooks] = useState([]);

  // useEffect to fetch data when the component mounts
  useEffect(() => {
    // Function to fetch books
    const fetchBooks = async () => {
      try {
        // Make a GET request using Axios
        const response = await axios.get('https://jsonplaceholder.typicode.com/posts');

        // Update the state with the fetched data
        setBooks(response.data);
      } catch (error) {
        // Handle errors
        console.error('Error:', error);
      }
    };

    // Call the fetchBooks function
    fetchBooks();
  }, []); // The empty dependency array ensures this effect runs once when the component mounts

  return (
    <div>
      <h1>Books</h1>
      <ul>
        {/* Display the fetched books */}
        {books.map(book => (
          <li key={book.id}>{book.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default Book;
