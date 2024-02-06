//import React, {useEffect } from "react";
//import { useLocation } from "react-router-dom";
//import Navbar from "../../components/layouts/navbar/Navbar";
//import Footer from "../../components/layouts/footer/Footer";
//import './searchPage.style.css';
//import { BookData } from "../../util/BookData";
//import BookDetails from "../bookdetailpage/BookDetails";

//const SearchPage = () => {
//    const location = useLocation();
//    
//    useEffect(() => {
 //       let searchValue = [];
 //       searchValue = BookData.filter((data) => data.book_name.toLowerCase().includes(location.state.toLowerCase()));
//
//        console.log(searchValue);
//    }, [])

//  return(
//  <section>
//    <Navbar darkTheme={true}/>

//    <div className="search-result-container">
 //       <div className="container">
 //           <h2>Your Search Result</h2>
 //       </div>
//    </div>
//
 //   <Footer/>
 // </section>
 // )
//}

//export default SearchPage;import React from "react";
import React from "react";
import { useLocation } from "react-router-dom";
import Navbar from "../../components/layouts/navbar/Navbar";
import Footer from "../../components/layouts/footer/Footer";

const SearchResultsPage = () => {
  const location = useLocation();
  const { searchData } = location.state || {}; // Access the searchData object

  return (
    <section>
      <Navbar darkTheme={true} />

      <div className="search-result-container">
        <div className="container">
          <h2>Your Search Result</h2>
          {!searchData || searchData.length === 0 ? (
            <p>No results found</p>
          ) : (
            <ul>
              {searchData.map((result) => (
                <li key={result.title}>
                  <div>
                    <h3>{result.title}</h3>
                    <p>Author: {result.author}</p>
                    <p>Price: ${result.price}</p>
                    {/* Add any other book details here */}
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>

      <Footer />
    </section>
  );
};

export default SearchResultsPage;




