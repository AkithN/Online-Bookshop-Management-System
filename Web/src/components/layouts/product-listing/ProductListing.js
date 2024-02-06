// import React from "react";
// import './productListing.styles.css';
// import ProductListingCard from "../../cards/product-listing-card/ProductListingCard";

// const ProductListing = (books)=>{
//     return(
//         <div className="product-listning-container">
//             <div className="container">
//                 <h2>Here Are Some <span className="text-primary">Books </span>That You Might Like</h2>
            
//                 <div className="listning-container">
//                  {books.slice(0,4).map((book) => (
//                         <ProductListingCard book={book}/> 
//                 ))} 
//                 </div>
//             </div>
//         </div> 
//     )
// }

// export default ProductListing;


import React, { useEffect, useState } from "react";
import './productListing.styles.css';
import ProductListingCard from "../../cards/product-listing-card/ProductListingCard";
import axios from 'axios';

const ProductListing = () => {
    const [books, setBooks] = useState([]);

    useEffect(() => {
        // Fetch data from the API when the component mounts
        fetchBooks();
    }, []);

    const fetchBooks = async () => {
        try {
            // Make a GET request to your API endpoint
            const response = await axios.get('http://localhost:8081/books'); // Replace with your API endpoint
            setBooks(response.data); // Update the state with the fetched data
            console.log('data',response.data);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    }

    // Filter out duplicate books based on their ID
    const uniqueBooks = books.filter((book, index, self) =>
        index === self.findIndex((b) => b.id === book.id)
    );

    // Slice the unique books and map them to ProductListingCard components
    const displayedBooks = uniqueBooks.slice(0, 3).map((book) => (
        <ProductListingCard key={book.id} book={book} />
    ));

    return (
        <div className="product-listing-container">
            <div className="product-container"> 
                <h2><center>Here Are Some <span className="text-primary">Books </span>That You Might Like</center></h2>
            
                <div className="listning-container">
                    {displayedBooks}
                </div>
            </div>
        </div> 
    );
}

export default ProductListing;












