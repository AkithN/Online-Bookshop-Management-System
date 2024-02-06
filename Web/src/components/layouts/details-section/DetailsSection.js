// import React,{useState , useEffect,useContext} from "react";
// import './detailsSection.styles.css';
// import {useParams , useNavigate} from 'react-router-dom';
// import { CartContext } from "../../../App";
// import axios from "axios";


// const DetailsSection = (books) => {
//   const{id} = useParams();
//   const[books , setBookData] = useState({});
//   const {cartItem , setCartItem} = useContext(CartContext);

// const navigate = useNavigate();

//   useEffect (() => {
//     let newData = books.filter((book) => book.id === parseInt(id));
//     setBookData(newData[0])
//   },[])

//   const handleAddToCart = () => {
//     setCartItem([...cartItem, books]);
//     alert(`The Book ${book.book_name} Is Added To The Cart`);
//   }

//   return(
//     <section className="detail-section-container">
//           <div className="container">
//               <div className="flex-container">
//                 <div className="book-img-container">
//                     <img src={book.book_url} alt="book"/>
//                 </div>

//                 <div className="book-detail-container">
//                   <h2>{book.book_name}</h2>
//                   <p className="text-primary">{book.author_name}</p>
//                   <p className="book-description">{book.book_description} </p>
//                   <p><b>Language : </b> {book.language}</p>
//                   <p><b>Book Length : </b>{book.print_length}</p>
//                   <h3>&#36;{book.price}</h3>

//                   <a onClick={handleAddToCart} className="cart-button">Add To Cart</a>
//                 </div>
//               </div>
//           </div>     
//     </section>
//     )
// }

// export default DetailsSection;



// import React, { useEffect, useState, useContext } from "react";
// import "./detailsSection.styles.css";
// import { useParams, useNavigate } from "react-router-dom";
// import { CartContext } from "../../../App";
// import axios from "axios";

// const DetailsSection = () => {
//     const { id } = useParams();
//     const [book, setBook] = useState({});
//     const { cartItem, setCartItem } = useContext(CartContext);
//     const navigate = useNavigate();

//     useEffect(() => {
//         // Define your API endpoint for fetching book details by ID
//         const apiUrl = 'http://localhost:8081/books/${id}';

//         // Make a GET request to the API
//         axios
//             .get(apiUrl)
//             .then((response) => {
//                 // Assuming your API returns book details as an object
//                 const bookData = response.data;

//                 setBook(bookData);
//             })
//             .catch((error) => {
//                 console.error("Error fetching book details:", error);
//             });
//     }, [id]);

//     const handleAddToCart = () => {
//         setCartItem([...cartItem, book]);
//         alert(`The Book ${book.book_name} Is Added To The Cart`);
//     };

//     return (
//         <section className="detail-section-container">
//             <div className="container">
//                 <div className="flex-container">
//                     <div className="book-img-container">
//                         <img src={book.book_url} alt="book" />
//                     </div>

//                     <div className="book-detail-container">
//                         <h2>{book.book_name}</h2>
//                         <p className="text-primary">{book.author_name}</p>
//                         <p className="book-description">{book.book_description}</p>
//                         <p>
//                             <b>Language : </b> {book.language}
//                         </p>
//                         <p>
//                             <b>Book Length : </b>
//                             {book.print_length}
//                         </p>
//                         <h3>&#36;{book.price}</h3>

//                         <a onClick={handleAddToCart} className="cart-button">Add To Cart</a>
//                     </div>
//                 </div>
//             </div>
//         </section>
//     );
// };

// export default DetailsSection;


import React, { useEffect, useState, useContext } from "react";
import "./detailsSection.styles.css";
import { useParams, useNavigate } from "react-router-dom";
import { CartContext } from "../../../App";
import axios from "axios";

const DetailsSection = () => {
    const { id } = useParams();
    const [book, setBook] = useState({});
    const { cartItem, setCartItem } = useContext(CartContext);
    const navigate = useNavigate();

    useEffect(() => {
        // Define your API endpoint for fetching book details by ID using template literals
        const apiUrl = `http://localhost:8081/books/${id}`;

        // Make a GET request to the API
        axios
            .get(apiUrl)
            .then((response) => {
                // Assuming your API returns book details as an object
                const books = response.data;

                setBook(books);
            })
            .catch((error) => {
                console.error("Error fetching book details:", error);
            });
    }, [id]);

    const handleAddToCart = () => {
        setCartItem([...cartItem, book]);
        alert(`The Book ${book.title} Is Added To The Cart`);
    };

    return (
        <section className="detail-section-container">
            <div className="container">
                <div className="flex-container">
                    <div className="book-img-container">
                    <img src={`data:image/png;base64,${book.image}`} alt="book" />
                    </div>

                    <div className="book-detail-container">
                        <h2>{book.title}</h2>
                        <p className="text-primary">{book.author}</p>
                        <p className="book-description">{book.description}</p>
                        
                        <h3>&#36;{book.price}</h3>

                        <a onClick={handleAddToCart} className="cart-button">Add To Cart</a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default DetailsSection;

