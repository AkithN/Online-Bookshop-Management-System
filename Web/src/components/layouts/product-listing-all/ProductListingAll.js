// import React from "react";
// import'./productListingAll.styles.css';
// import ProductListingCard from "../../cards/product-listing-card/ProductListingCard";

// const ProductListingAll = () => {
//     console.log(books)
//   return(
//     <section className="product-listing-all-container">
//         <div className="container">

//             <div className="grid-container">
//                 {books.map((book) => {
//                     return (
//                     <div className="grid-item">
//                         <ProductListingCard book={book}/>
//                     </div>   
//                     )
//                 })} 
//             </div>
//         </div>
//     </section>
//     )
// }

// export default ProductListingAll;


// import React, { useEffect, useState } from "react";
// import axios from "axios"; // Import Axios
// import "./productListingAll.styles.css";
// import ProductListingCard from "../../cards/product-listing-card/ProductListingCard";

// const ProductListingAll = () => {
//     const [books, setBooks] = useState([]);

//     useEffect(() => {
//         // Fetch data from the API when the component mounts
//         fetchBooks();
//     }, []);

//     const fetchBooks = async () => {
//         try {
//             // Make a GET request to your API endpoint
//             const response = await axios.get('http://localhost:8081/books'); // Replace with your API endpoint
//             setBooks(response.data); // Update the state with the fetched data
//             console.log('data',books);
//         } catch (error) {
//             console.error("Error fetching data:", error);
//         }
//     };

//     return (
//         <section className="product-listing-all-container">
//             <div className="container">
//                 <div className="grid-container">
//                     {books.slice(0, 1).map((book) => (
//                         <div className="grid-item" key={book.id}>
//                             <ProductListingCard book={book} />
//                         </div>
//                     ))}
//                 </div>
//             </div>
//         </section>
//     );
// };

// export default ProductListingAll;

import React, { useEffect, useState } from "react";
import axios from "axios";
import "./productListingAll.styles.css";
import ProductListingCard from "../../cards/product-listing-card/ProductListingCard";

const ProductListingAll = () => {
    const [books, setBooks] = useState([]);

    useEffect(() => {
        // Fetch data from the API when the component mounts
        fetchBooks();
    }, []);

    const fetchBooks = async () => {
        try {
            const response = await axios.get('http://localhost:8081/books');
            console.log('data', response.data); // Log the data from the API
            // Remove duplicates based on the 'id' property
            const uniqueBooks = Array.from(new Set(response.data.map(book => book.id))).map(id => {
                return response.data.find(book => book.id === id);
            });
            setBooks(uniqueBooks);
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    };

    return (
        <section className="product-listing-all-container">
            <div className="container">
                <div className="grid-container">
                    {books.map((book) => (
                        <div className="grid-item" key={book.id}>
                            <ProductListingCard book={book} />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ProductListingAll;

