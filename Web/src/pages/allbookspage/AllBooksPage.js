import React, { useState, useEffect } from 'react';
import axios from 'axios';
import AdminNavbar from '../../components/layouts/navbar/AdminNavbar';

const client = axios.create({
  baseURL: 'http://localhost:8081', // Update with your backend URL
});

const tableStyle = {
  width: '100%',
  borderCollapse: 'collapse',
  marginTop: '20px',
};

const thStyle = {
  backgroundColor: '#f2f2f2',
  borderBottom: '1px solid #dddddd',
  textAlign: 'left',
  padding: '8px',
};

const tdStyle = {
  borderBottom: '1px solid #dddddd',
  textAlign: 'left',
  padding: '8px',
};

const BookList = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    try {
      // Fetch all books from the backend
      client.get('/books').then((response) => {
        setPosts(response.data);
      });
    } catch (err) {
      console.error(err);
    }
  }, []);

  return (
    <body className="body-2">
      <AdminNavbar darkTheme={true} />
      <h1><center><span className="text-primary">All Books</span></center></h1>
      <table style={tableStyle}>
        <thead>
          <tr>
            <th style={thStyle}>Book ID</th>
            <th style={thStyle}>Book Name</th>
            <th style={thStyle}>Author</th>
            <th style={thStyle}>Description</th>
            <th style={thStyle}>Price</th>
            <th style={thStyle}>ISBN</th>
            <th style={thStyle}>Genre</th>
            <th style={thStyle}>Stock</th>
          </tr>
        </thead>
        <tbody>
          {posts.map((post) => (
            <tr key={post.book_id}>
              <td style={tdStyle}>{post.book_id}</td>
              <td style={tdStyle}>{post.title}</td>
              <td style={tdStyle}>{post.author}</td>
              <td style={tdStyle}>{post.description}</td>
              <td style={tdStyle}>{post.price}</td>
              <td style={tdStyle}>{post.isbn}</td>
              <td style={tdStyle}>{post.genre}</td>
              <td style={tdStyle}>{post.stock}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </body>
  );
};

export default BookList;
