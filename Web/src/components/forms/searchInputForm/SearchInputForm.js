// import React,{useState} from "react";
// import { useNavigate } from "react-router-dom";
// import './searchinputform.styles.css';

// const SearchInputForm = ({darkTheme}) => {
//   const [searchField, setSearchField] = useState('');
//   const navigate = useNavigate();

//   const handleChange = (e) => {
//     setSearchField(e.target.value);
//   }

//   const redirectToSearch = () => {
//       navigate('/search',{state:searchField});
//   }

//   return(
//     <div className={`search-input-form-container ${ darkTheme ? 'dark-box-shadow' : 'light-box-shadow'}`}>
//         <input
//           type="text" 
//           className="search-input" 
//           placeholder="Search Books"
//           value={searchField}
//           onChange={handleChange}
//         /> 
//         <button onClick={redirectToSearch} className="search-button">Search</button>
//     </div>
//     )
// }

// export default SearchInputForm;

// import React, { useState, useEffect } from "react";
// import { useNavigate } from "react-router-dom";
// import './searchinputform.styles.css';

// const SearchInputForm = ({ darkTheme }) => {
//   const [searchField, setSearchField] = useState('');
//   const [searchResults, setSearchResults] = useState([]);
//   const navigate = useNavigate();

//   const handleChange = (e) => {
//     setSearchField(e.target.value);
//   }

//   const redirectToSearch = () => {
//     // Assuming you want to pass the search query as a URL parameter
//     navigate(`/search?query=${searchField}`);
//   }

//   // useEffect to fetch data from the API
//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await fetch("http://localhost:8081/books?title");
//         if (!response.ok) {
//           throw new Error('Network response was not ok');
//         }
//         const data = await response.json();
//         setSearchResults(data); // Update the state with API response data
//       } catch (error) {
//         console.error('Error fetching data:', error);
//       }
//     };

//     // Call the fetchData function when the searchField state changes
//     if (searchField !== '') {
//       fetchData();
//     }
//   }, [searchField]); // Run this effect whenever searchField changes

//   return (
//     <div className={`search-input-form-container ${darkTheme ? 'dark-box-shadow' : 'light-box-shadow'}`}>
//       <input
//         type="text"
//         className="search-input"
//         placeholder="Search Books"
//         value={searchField}
//         onChange={handleChange}
//       />
//       <button onClick={redirectToSearch} className="search-button">Search</button>
//       {/* Display search results */}
//       {searchResults.map((result) => (
//         <div key={result.id}>{result.title}</div>
//         // Replace 'title' with the actual property you want to display
//       ))}
//     </div>
//   )
// }

// export default SearchInputForm;

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import './searchinputform.styles.css';
import axios from 'axios';

const SearchInputForm = ({ darkTheme }) => {
  const [searchField, setSearchField] = useState('');
  const navigate = useNavigate();

  const handleChange = (e) => {
    setSearchField(e.target.value);
  }

  const redirectToSearch = async () => {
    try {
      // Make a GET request to your API endpoint with the searchField value as a query parameter
      const response = await axios.get(`http://localhost:8081/books?title=${searchField}`);
      
      // Handle the API response, e.g., update state with the data
      const searchData = response.data;
      console.log('API Response:', searchData);

      // Redirect to the search results page with search data as state
      navigate('/search', { state: { searchData } });
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  }

  return (
    <div className={`search-input-form-container ${darkTheme ? 'dark-box-shadow' : 'light-box-shadow'}`}>
      <input
        type="text"
        className="search-input"
        placeholder="Search Books"
        value={searchField}
        onChange={handleChange}
      />
      <button onClick={redirectToSearch} className="search-button">Search</button>
    </div>
  )
}

export default SearchInputForm;

