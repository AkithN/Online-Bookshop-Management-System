import React, { createContext, useEffect, useState } from "react";
import {Routes, Route} from 'react-router-dom';
import LoginPage  from "./pages/loginpage/LoginPage";
import RegisterPage from "./pages/loginpage/RegisterPage";
import HomePage from "./pages/homepage/HomePage";
import BooksPage from "./pages/bookspage/BooksPage";
import BookDetaisPage from "./pages/bookdetailpage/BookDetails";
import CartPage from "./pages/cartpage/CartPage";
import ScrollToTop from "./components/util/ScrollToTop";
import SearchPage from "./pages/searchpage/SearchPage";
import AdminPage from "./pages/adminpage/AdminPage";
import AddBookPage from "./pages/addbookpage/AddBookPage";
import UpdateBookPage from "./pages/updatepage/UpdateBookPage";
import RemoveBookPage from "./pages/removepage/RemoveBookPage";
import AllBooksPage from "./pages/allbookspage/AllBooksPage";

export const CartContext = createContext([]);

const App = () => {

const [cartItem, setCartItem] = useState([])
const [totalAmount,setTotalAmount] = useState(0);

useEffect(() => {
  let total = 0;
  cartItem.forEach((item) => {
    total = total + parseInt(item.price);
  })

  setTotalAmount(total);
},[cartItem])


  return(
    <ScrollToTop>
      <CartContext.Provider value = {{cartItem ,totalAmount, setCartItem}}>
      <Routes>
        
        <Route path="/" element={<LoginPage/>} /> 
        <Route path="/Admin" element={<AdminPage/>} /> 
        <Route path="/Addbooks" element={<AddBookPage/>} /> 
        <Route path="/Updatebooks" element={<UpdateBookPage/>} /> 
        <Route path="/Removebooks" element={<RemoveBookPage/>} /> 
        <Route path="/BookList" element={<AllBooksPage/>} /> 
        <Route path="/register" element={<RegisterPage/>} /> 
        <Route path="/home" element={<HomePage/>} />
        <Route path="/books" element={<BooksPage/>} />
        <Route path="/cart" element={<CartPage/>}/>
        <Route path="/search" element={<SearchPage/>} />
        <Route path="/book-details/:id" element={<BookDetaisPage/>} />
       
      </Routes>
      </CartContext.Provider>
    </ScrollToTop>
  )
}

export default App;