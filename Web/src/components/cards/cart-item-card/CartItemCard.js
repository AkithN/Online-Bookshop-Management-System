// import React,{useContext} from "react";
// import './cartitemcard.styles.css';
// import { CartContext } from "../../../App";

// const CartItemCard = ({book}) => {

//     const { cartItem , setCartItem } = useContext(CartContext);

//     const handleRemove = () =>{
//         console.log(book.id);
//         setCartItem(cartItem.filter((item) => item.id !== book.id));
//     }

//   return(
//     <section className="cart-item">
//                 <div className="cart-item-img-container">
//                 <img src={`data:image/png;base64,${book.image}`} alt="cart-item-img" className="cart-item-img"/>
//                 </div>
//                 <div className="cart-item-content-container">
//                     <h2>{book.title}</h2>
//                     <p>{book.author}</p>
//                     <h3 className="cart-item-price">{book.price}</h3>

//                     <button onClick={handleRemove} className="delete_btn">Remove From Cart</button>
//                 </div> 
//     </section>
//     )
// }

// export default CartItemCard;

// import React, { useContext, useEffect, useState } from "react";
// import './cartitemcard.styles.css';
// import axios from 'axios';
// import { useParams } from "react-router-dom";
// import { CartContext } from "../../../App";

// const CartItemCard = ({ books }) => {
//     const { book_id } = useParams();
//     const { cartItem, setCartItem } = useContext(CartContext);
//     const [book, setBook] = useState(null);

//     useEffect(() => {
//         // Make an API request to fetch book information by book.id
//         axios.get(`http://localhost:8081/books/${book_id}`)
//             .then(response => {
//                 setBook(response.data);
//             })
//             .catch(error => {
//                 console.error("Error fetching book data:", error);
//             });
//     }, [book_id]);

//     const handleRemove = () => {
//         console.log(book.book_id);
//         setCartItem(cartItem.filter((item) => item.id !== book.book_id));
//     }

//     if (!book) {
//         // Render a loading indicator or return null while waiting for API response
//         return null;
//     }

//     return (
//         <section className="cart-item">
//             <div className="cart-item-img-container">
//                 <img src={`data:image/png;base64,${book.image}`} alt="cart-item-img" className="cart-item-img" />
//             </div>
//             <div className="cart-item-content-container">
//                 <h2>{book.title}</h2>
//                 <p>{book.author}</p>
//                 <h3 className="cart-item-price">{book.price}</h3>

//                 <button onClick={handleRemove} className="delete_btn">Remove From Cart</button>
//             </div>
//         </section>
//     )
// }

// export default CartItemCard;

import React, { useContext} from "react";
import './cartitemcard.styles.css';
import {} from "react-router-dom";
import { CartContext } from "../../../App";

const CartItemCard = ({ book }) => {

    const { cartItem, setCartItem } = useContext(CartContext);

    const handleRemove = () => {
        console.log(book.book_id);
        setCartItem(cartItem.filter((item) => item.book_id !== book.book_id));
    }

    return (
        <section className="cart-item">
            <div className="cart-item-img-container">
                <img src={`data:image/png;base64,${book.image}`} alt="cart-item-img" className="cart-item-img" />
            </div>
            <div className="cart-item-content-container">
                <h2>{book.title}</h2>
                <p>{book.author}</p>
                <h3 className="cart-item-price">{book.price}</h3>
                <button onClick={handleRemove} className="delete_btn">Remove From Cart</button>
            </div>
        </section>
    )
}

export default CartItemCard;

