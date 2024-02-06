// import React,{useContext} from "react";
// import './cart-items-container.styles.css';
// import CartItemCard from "../../cards/cart-item-card/CartItemCard";
// import { CartContext } from "../../../App";
// import StripeCheckout from "react-stripe-checkout";
// import { useNavigate } from "react-router-dom";


// const CartItemContainer= () => {
//  const {cartItem , totalAmount} = useContext(CartContext);
//  const stripeKey = 'pk_test_51NkkG0SIZkqJ8QxvOfphULXXuD4YMGbM8gISQpnKXehdTPpV8by4TpUzZr0SOE7EriyRTbVAkNsINjNHyCLjnbuI00bb55hf6K';
//  const navigate = useNavigate;

//  const onToken = (token) => {
//     console.log(token);
//     alert('Your Payment Has Been Processed');
//     navigate('/books');
//  }
 
//   return(
//     <section className="cart-items-container">
//         <div className="container">
        
//         <StripeCheckout
//                 name="Book Checkout"
//                 description="Please Fill In The Details Below"
//                 amount={totalAmount}
//                 currency="USD"
//                 stripeKey={stripeKey}
//                 token={onToken}
//                 billingAddress
//             >
//                  <button className="button-primary"> Proceed to checkout</button>
//             </StripeCheckout>

//             {totalAmount === 0 ? (
//                 <h2>Currently Your Cart Is Empty</h2>
                
//             ):(
//                 <React.Fragment>
//                     <h2>cart</h2>
            
//             {cartItem.map((item) => (
//                <CartItemCard key = {item.id} bookData={item} />
//             ))} 

//             <h2>Total Amount =  &#36; {totalAmount} </h2>

            

//             </React.Fragment>
//             )}
//          </div>     
//     </section>
//     )
// }

// export default CartItemContainer;


// import React, { useContext, useEffect, useState } from "react";
// import './cart-items-container.styles.css';
// import CartItemCard from "../../cards/cart-item-card/CartItemCard";
// import { CartContext } from "../../../App";
// import StripeCheckout from "react-stripe-checkout";
// import { useNavigate } from "react-router-dom";
// import axios from "axios"; // Import Axios for making HTTP requests

// const CartItemContainer = () => {
//   const { cartItem, totalAmount, setCartItem } = useContext(CartContext);
//   const stripeKey = 'pk_test_51NkkG0SIZkqJ8QxvOfphULXXuD4YMGbM8gISQpnKXehdTPpV8by4TpUzZr0SOE7EriyRTbVAkNsINjNHyCLjnbuI00bb55hf6K'; // Replace with your Stripe publishable key
//   const navigate = useNavigate();

//   const onToken = (token) => {
//     // Send the token to your server for payment processing
//     axios.post('/api/processPayment', { token, cart: cartItem })
//       .then((response) => {
//         console.log(response.data);
//         alert('Your Payment Has Been Processed');
//         navigate('/books');
//       })
//       .catch((error) => {
//         console.error('Error processing payment:', error);
//       });
//   }

//   // Function to add items to the cart
//   const addItemToCart = (book) => {
//     // Make an API request to add the book to the cart on the server
//     axios.post('http://localhost:8080/orders', { book })
//       .then((response) => {
//         // Update the cart items in the state with the response data
//         setCartItem(response.data);
//       })
//       .catch((error) => {
//         console.error('Error adding item to cart:', error);
//       });
//   }

//   // Fetch cart items when the component mounts
//   useEffect(() => {
//     // Make an API request to fetch cart items from the server
//     axios.get('http://localhost:8080/orders')
//       .then((response) => {
//         // Update the cart items in the state with the response data
//         setCartItem(response.data);
//       })
//       .catch((error) => {
//         console.error('Error fetching cart items:', error);
//       });
//   }, [setCartItem]);

//   return (
//     <section className="cart-items-container">
//       <div className="container">
        

//         {totalAmount === 0 ? (
//           <h2>Currently Your Cart Is Empty</h2>
//         ) : (
//           <React.Fragment>
//             <h2>cart</h2>
//             {cartItem.map((item) => (
//               <CartItemCard key={item.id} bookData={item} />
//             ))}
//             <h2>Total Amount =  &#36; {totalAmount} </h2>
//             <StripeCheckout
//           name="Book Checkout"
//           description="Please Fill In The Details Below"
//           amount={totalAmount}
//           currency="USD"
//           stripeKey={stripeKey}
//           token={onToken}
//           billingAddress
//         >
//           <button className="button-primary"> Proceed to checkout</button>
//         </StripeCheckout>
//           </React.Fragment>
//         )}
//       </div>
//     </section>
//   )
// }

// export default CartItemContainer;


// import React, { useContext, useEffect, useState } from "react";
// import './cart-items-container.styles.css';
// import CartItemCard from "../../cards/cart-item-card/CartItemCard";
// import { CartContext } from "../../../App";
// import StripeCheckout from "react-stripe-checkout";
// import { useNavigate } from "react-router-dom";
// import axios from "axios";

// const CartItemContainer = () => {
//   const { cartItem, totalAmount, setCartItem } = useContext(CartContext);
//   const stripeKey = 'pk_test_51NkkG0SIZkqJ8QxvOfphULXXuD4YMGbM8gISQpnKXehdTPpV8by4TpUzZr0SOE7EriyRTbVAkNsINjNHyCLjnbuI00bb55hf6K';
//   const navigate = useNavigate();
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState(null);

//   const onToken = (token) => {
//     setLoading(true);
//     setError(null);

//     axios.post('http://localhost:8080/orders', { token, cart: cartItem })
//       .then((response) => {
//         console.log(response.data);
//         alert('Your Payment Has Been Processed');
//         navigate('/books');
//       })
//       .catch((error) => {
//         setError('Error processing payment. Please try again later.');
//         console.error('Error processing payment:', error);
//       })
//       .finally(() => {
//         setLoading(false);
//       });
//   }

//   const fetchCartItems = () => {
//     setLoading(true);
//     setError(null);

//     axios.get('http://localhost:8081/books')
//       .then((response) => {
//         setCartItem(response.data);
//       })
//       .catch((error) => {
//         setError('Error fetching cart items. Please try again later.');
//         console.error('Error fetching cart items:', error);
//       })
//       .finally(() => {
//         setLoading(false);
//       });
//   }

//   useEffect(() => {
//     fetchCartItems();
//   }, [setCartItem]);

//   return (
//     <section className="cart-items-container">
//       <div className="container">
//         {loading ? (
//           <p>Loading...</p>
//         ) : (
//           <React.Fragment>
//             <h2>Cart</h2>
//             {cartItem.length === 0 ? (
//               <h2>Your Cart Is Empty</h2>
//             ) : (
//               <React.Fragment>
//                 {cartItem.map((item) => (
//                   <CartItemCard key={item.id} book={item} />
//                 ))}
//                 <h2>Total Amount =  &#36; {totalAmount} </h2>
//                 <StripeCheckout
//                   name="Book Checkout"
//                   description="Please Fill In The Details Below"
//                   amount={totalAmount}
//                   currency="USD"
//                   stripeKey={stripeKey}
//                   token={onToken}
//                   billingAddress
//                 >
//                   <button className="button-primary">Proceed to checkout</button>
//                 </StripeCheckout>
//               </React.Fragment>
//             )}
//             {error && <p className="error-message">{error}</p>}
//           </React.Fragment>
//         )}
//       </div>
//     </section>
//   )
// }

// export default CartItemContainer;


import React, { useContext, useState } from "react";
import './cart-items-container.styles.css';
import CartItemCard from "../../cards/cart-item-card/CartItemCard";
import { CartContext } from "../../../App";
import StripeCheckout from "react-stripe-checkout";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const CartItemContainer = () => {
  const { cartItem, totalAmount } = useContext(CartContext);
  const stripeKey = 'pk_test_51NkkG0SIZkqJ8QxvOfphULXXuD4YMGbM8gISQpnKXehdTPpV8by4TpUzZr0SOE7EriyRTbVAkNsINjNHyCLjnbuI00bb55hf6K';
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const onToken = (token) => {
    setLoading(true);
    setError(null);

    axios.post('http://localhost:8080/orders', { token, cart: cartItem })
      .then((response) => {
        console.log(response.data);
        alert('Your Payment Has Been Processed');
        navigate('/books');
      })
      .catch((error) => {
        setError('Error processing payment. Please try again later.');
        // console.error('Error processing payment:', error);
      })
      .finally(() => {
        setLoading(false);
      });
  }

  const sendCartItemsToBackend = () => {
    setLoading(true);
    setError(null);
  
    axios
      .post('http://localhost:8080/orders', { cart: cartItem })
      .then((response) => {
        console.log(response.data);
        alert('Your Payment Has Been Processed');
        navigate('/books');
      })
      .catch((error) => {
        setError('Error processing payment. Please try again later.');
        console.error('Error processing payment:', error);
      })
      .finally(() => {
        setLoading(false);
      });
  };
  

  return (
    <section className="cart-items-container">
      <div className="container">
        {loading ? (
          <p>Loading...</p>
        ) : (
          <React.Fragment>
            <h2><center><span className="text-primary">Cart</span></center></h2>
            {cartItem.length === 0 ? (
              <h2>Your Cart Is Empty</h2>
            ) : (
              <React.Fragment>
                {cartItem.map((item) => (
                  <CartItemCard key={item.book_id} book={item} />
                ))}
                <h2>Total Amount =  &#36; {totalAmount} </h2>
                <StripeCheckout
                  name="Book Checkout"
                  description="Please Fill In The Details Below"
                  amount={totalAmount}
                  currency="USD"
                  stripeKey={stripeKey}
                  token={onToken}
                  billingAddress>
                  {/*Call the function when the button is clicked */}
                   <button className="button-primary" onClick={sendCartItemsToBackend} > Proceed to checkout</button>
                </StripeCheckout>
              </React.Fragment>
            )}
            {error && <p className="error-message">{error}</p>}
          </React.Fragment>
        )}
      </div>
    </section>
  )
}

export default CartItemContainer;
