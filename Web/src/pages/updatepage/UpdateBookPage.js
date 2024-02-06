// import React, { useState } from "react";
// import axios from "axios";
// import AdminNavbar from "../../components/layouts/navbar/AdminNavbar";
// import '../addbookpage/addbookpage.style.css';

// function UpdateBookPage() {
//   const [book_id, setBook_id] = useState("");
//   const [title, setTitle] = useState("");
//   const [author, setAuthor] = useState("");
//   const [description, setDescription] = useState("");
//   const [isbn, setIsbn] = useState("");
//   const [genre, setGenre] = useState("");
//   const [price, setPrice] = useState("");
//   const [stock_qty, setStock_qty] = useState("");

//   async function updateBook() {
//     console.warn(
//       book_id,
//       title,
//       author,
//       description,
//       isbn,
//       genre,
//       price,
//       stock_qty
//     );

//     const formData = new FormData();

//     formData.append("title", title);
//     formData.append("author", author);
//     formData.append("description", description);
//     formData.append("isbn", isbn);
//     formData.append("genre", genre);
//     formData.append("price", price);
//     formData.append("stock_qty", stock_qty);

//     try {
//       const response = await axios.put(
//         `http://localhost:8081/books/${book_id}`, // Update URL with book_id
//         formData,
//         {
//           headers: {
//             "Content-Type": "form-data",
//           },
//         }
//       );
//       console.log(response.data);
//       alert("Book has been updated");
//     } catch (error) {
//       console.error("Error:", error);
//       alert("An error occurred while updating the book");
//     }
//   }

//   return (
//     <section className="add-book-page">
//        <AdminNavbar darkTheme={true} /> 
//        <div className="add-container">
//         <div className="center-content">
//           <div className="col-sm-6-offset-sm-3">
//               <br />
//               <div className="add-input-box">
//               <input type="text" className="form-control" onChange={(e) => setBook_id(e.target.value)} placeholder="book_id"/><br />
//               </div>

//               <div className="add-input-box">
//               <input type="text" className="form-control" onChange={(e) => setTitle(e.target.value)} placeholder="title"/> <br />
//               </div>

//               <div className="add-input-box">
//               <input type="text" className="form-control" onChange={(e) => setAuthor(e.target.value)} placeholder="author"/> <br />
//               </div>

//               <div className="add-input-box">
//               <input type="text" className="form-control" onChange={(e) => setDescription(e.target.value)} placeholder="description"/><br />
//               </div>

//               <div className="add-input-box">
//               <input type="text" className="form-control" onChange={(e) => setIsbn(e.target.value)}  placeholder="isbn"/><br />
//               </div>

//               <div className="add-input-box">
//               <input type="text"className=" form-control" onChange={(e) => setGenre(e.target.value)} placeholder="genre"/><br />
//               </div>

//               <div className="add-input-box">
//               <input type="text" className="form-control" onChange={(e) => setPrice(e.target.value)} placeholder="price"/><br />
//               </div>

//               <div className="add-input-box">
//               <input type="text" className="form-control" onChange={(e) => setStock_qty(e.target.value)} placeholder="stock_qty" /><br />
//               </div>

//               <div className="add-button-container">
//               <button onClick={updateBook} className="btn btn-primary">Update Book</button>
//               </div>
//              </div> 
//         </div>
//       </div>
//     </section>
//   );
// }

// export default UpdateBookPage;

import React, { useState } from "react";
import axios from "axios";
import AdminNavbar from "../../components/layouts/navbar/AdminNavbar";
import '../addbookpage/addbookpage.style.css';

function UpdateBookPage() {
  const [book_id, setBook_id] = useState("");
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [description, setDescription] = useState("");
  const [isbn, setIsbn] = useState("");
  const [genre, setGenre] = useState("");
  const [price, setPrice] = useState("");
  const [stock, setStock] = useState("");

  async function updateBook() {
    try {
      const updatedBookData = {
        title,
        author,
        description,
        isbn,
        genre,
        price,
        stock,
      };

      const response = await axios.put(
        `http://localhost:8081/books/${book_id}`, // Update URL with book_id
        updatedBookData
      );

      console.log(response.data);
      alert("Book has been updated");
    } catch (error) {
      console.error("Error:", error);
      alert("An error occurred while updating the book");
    }
  }

  return (
    <body className='body-1'>
    <section className="add-book-page">
       <AdminNavbar darkTheme={true} /> 
       <h1><center><span className="text-primary">Update Books</span></center></h1>
       <div className="add-container">
        <div className="center-content">
          <div className="col-sm-6-offset-sm-3">
              <br />
              <div className="add-input-box">
              <input type="text" className="form-control" onChange={(e) => setBook_id(e.target.value)} placeholder="book_id"/>
              </div>

              <div className="add-input-box">
              <input type="text" className="form-control" onChange={(e) => setTitle(e.target.value)} placeholder="title"/> 
              </div>

              <div className="add-input-box">
              <input type="text" className="form-control" onChange={(e) => setAuthor(e.target.value)} placeholder="author"/>
              </div>

              <div className="add-input-box">
              <input type="text" className="form-control" onChange={(e) => setDescription(e.target.value)} placeholder="description"/>
              </div>

              <div className="add-input-box">
              <input type="text" className="form-control" onChange={(e) => setIsbn(e.target.value)}  placeholder="isbn"/>
              </div>

              <div className="add-input-box">
              <input type="text"className=" form-control" onChange={(e) => setGenre(e.target.value)} placeholder="genre"/>
              </div>

              <div className="add-input-box">
              <input type="text" className="form-control" onChange={(e) => setPrice(e.target.value)} placeholder="price"/>
              </div>

              <div className="add-input-box">
              <input type="text" className="form-control" onChange={(e) => setStock(e.target.value)} placeholder="stock_qty" />
              </div>

              <div className="add-button-container">
              <button onClick={updateBook} className="btn btn-primary">Update Book</button>
              </div>
             </div> 
        </div>
      </div>
    </section>
    </body>
  );
}

export default UpdateBookPage;

