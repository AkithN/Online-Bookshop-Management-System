import React from "react";
import ShowCase from "../../components/layouts/showcase/ShowCase";
import ProductListing from "../../components/layouts/product-listing/ProductListing";
import Footer from "../../components/layouts/footer/Footer";
 
const HomePage = () => {
  return(
    <section>
            <ShowCase/> 
            <ProductListing/>
            <Footer/>           
    </section>
    )
}

export default HomePage;