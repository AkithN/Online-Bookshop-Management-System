import React from "react";
import Navbar from "../../components/layouts/navbar/Navbar";
import Footer from "../../components/layouts/footer/Footer";
import CartItemContainer from "../../components/layouts/cart-items-container/CartItemContainer";

const CartPage = () => {
  return(
    <section>
            <Navbar darkTheme={true}/>
            <CartItemContainer/>
            <Footer/>         
    </section>
    )
}

export default CartPage;