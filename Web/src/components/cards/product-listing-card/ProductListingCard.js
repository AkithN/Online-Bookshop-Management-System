// import React, { useState, useEffect } from "react";
// import './ProductListingCard.styles.css';
// import { Link } from 'react-router-dom';
// import axios from 'axios';

// const ProductListingCard = ({ book }) => {
//     return (
//         <div className="product-listing-card">
//             <div className="product-listing-img-container">
//                 <img src={book.image} alt="product-listing-image" className="product-listing-image"/>
//             </div>
//             <div className="product-listing-details-container">
//                 <h3>{book.title}</h3>
//                 <p className="author-name">{book.author}</p>
//                 <p className="pricing"> &#36; {book.price} </p>
//             </div>
//             <div className="card-btn-container">
//                 <Link to={`/book-details/${book.book_id}`} className="product-listing-button"> Add To Cart</Link>
//             </div>
//         </div>
//     )
// }

// const ProductListing = () => {
//     const [books, setBooks] = useState([]);

//     useEffect(() => {
//         fetchBooks();
//     }, []);

//     const fetchBooks = async () => {
//         try {
//             const response = await axios.get('http://localhost:8081/books');
//             setBooks(response.data);
//         } catch (error) {
//             console.error('Error fetching data:', error);
//         }
//     }

//     return (
//         <div className="product-listing-container">
//             {books.map(book => (                      
//                 // <Paper elevation={6} style={{margin:"10px",padding:"15px", textAlign:"left"}} 
//                 <ProductListingCard 
//                  key={book.book_id}>
//                  Id:{book.book_id}<br/>
//                  Name:{book.title}<br/>
//                  Price:{book.price}<br/>
//                  Description:{book.description}
                
//                 /</ProductListingCard>
                
//             ))}
//         </div>
//     );
// }

// export default ProductListing;



import React, { useState, useEffect } from "react";
import './ProductListingCard.styles.css';
import { Link } from 'react-router-dom';
import axios from 'axios';

const ProductListingCard = ({ book }) => {
    console.log('data',book)
    return (
        <div className="product-listing-card">
            <div className="product-listing-img-container">
            <img src={`data:image/png;base64,${book.image}`} alt="Book Cover" className="product-listing-image"/>

                {/* <img src={book.image}  className="product-listing-image"/> */}
            </div>
            <div className="product-listing-details-container">
                <h3>{book.title}</h3>
                <p className="author-name">{book.author}</p>
                <p className="pricing"> &#36; {book.price} </p>
            </div>
            <div className="card-btn-container">
                <Link to={`/book-details/${book.book_id}`} className="product-listing-button"> Add To Cart</Link>
            </div>
        </div>
    )
}

const  ProductListing = () => {
    const [books, setBooks] = useState([]);

    useEffect(() => {
        fetchBooks();
    }, []);

    const fetchBooks = async () => {
        try {
            const response = await axios.get('http://localhost:8081/books');
            setBooks(response.data);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    }

    return (
        <div className="product-listing-container">
            {books.map(book => (                      
                <ProductListingCard 
                 key={book.book_id}
                 book={book} // Pass the book data to the card component
                />
            ))}
        </div>
    );
}

export default ProductListing;
