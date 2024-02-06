// //import Navbar from "../../components/layouts/navbar/Navbar";
// import { useState } from "react";

// function AddBookPage() {
//     const [title, setTitle] = useState("");
//     const [image, setImage] = useState("");
//     const [author, setAuthor] = useState("");
//     const [description, setDescription] = useState("");
//     const [isbn, setIsbn] = useState("");
//     const [genre, setGenre] = useState("");
//     const [price, setPrice] = useState("");
//     const [stock_qty, setStock_qty] = useState("");

//    async function addBookPage() {
//         console.warn(title, image, author, description, isbn, genre, price, stock_qty)
//         const formData = new FormData();
//         formData.append('image', image);
//         formData.append('title', title);
//         formData.append('author', author);
//         formData.append('description', description);
//         formData.append('isbn', isbn);
//         formData.append('genre', genre);
//         formData.append('price', price);
//         formData.append('stock_qty', stock_qty);
//         let result = await fetch("http://localhost:8081/books", {
//             method: 'POST',
//             body: formData
//         });
//         alert("Data has been saved")
//     }
//     return (
//         <div>
//             {/* <Navbar darkTheme={false} /> */}
//             <div className="col-sm-6-offset-sm-3">
//                 <br />
//                 <input type="text" className="form-control" onChange={(e) => setTitle(e.target.value)} placeholder="title" /><br />
//                 <input type="file" className="form-control" onChange={(e) => setImage(e.target.files[0])} placeholder="image" /><br />
//                 <input type="text" className="form-control" onChange={(e) => setAuthor(e.target.value)} placeholder="author" /><br />
//                 <input type="text" className="form-control" onChange={(e) => setDescription(e.target.value)} placeholder="description" /><br />
//                 <input type="text" className="form-control" onChange={(e) => setIsbn(e.target.value)} placeholder="isbn" /><br />
//                 <input type="text" className="form-control" onChange={(e) => setGenre(e.target.value)} placeholder="genre" /><br />
//                 <input type="text" className="form-control" onChange={(e) => setPrice(e.target.value)} placeholder="price" /><br />
//                 <input type="text" className="form-control" onChange={(e) => setStock_qty(e.target.value)} placeholder="stock_qty" /><br />

//                 <button onClick={addBookPage} className="btn btn-primary">Add Book</button>

//             </div>
//         </div>
//     )
// }


// export default AddBookPage;

import React, { useState } from "react";
import axios from "axios";
import AdminNavbar from "../../components/layouts/navbar/AdminNavbar";
import './addbookpage.style.css';

function AddBookPage() {
    const [title, setTitle] = useState("");
    const [image, setImage] = useState(null); // Changed initial state to null
    const [author, setAuthor] = useState("");
    const [description, setDescription] = useState("");
    const [isbn, setIsbn] = useState("");
    const [genre, setGenre] = useState("");
    const [price, setPrice] = useState("");
    const [stock, setStock] = useState("");

    async function addBookPage() {
        console.warn(title, image, author, description, isbn, genre, price, stock);

        const formData = new FormData();
        formData.append('image', image);
        formData.append('title', title);
        formData.append('author', author);
        formData.append('description', description);
        formData.append('isbn', isbn);
        formData.append('genre', genre);
        formData.append('price', price);
        formData.append('stock', stock);

        try {
            const response = await axios.post("http://localhost:8081/books", formData, {
                headers: {
                    "Content-Type": "multipart/form-data", // Set the content type for FormData
                },
            });
            console.log(response.data); // Handle the response data as needed
            alert("Data has been saved");
        } catch (error) {
            console.error("Error:", error);
            alert("An error occurred while saving data");
        }
    }

    return (
        <body className="body-1">
        <section className="add-book-page">
            <AdminNavbar darkTheme={true} /> 
            <h1><center><span className="text-primary">Add Books</span></center></h1>
            <div className="add-container">
                <div className="center-content">
                    <div className="col-sm-6-offset-sm-3">
                        <br/>
                        <div className="add-input-box">
                        <input type="text" className="form-control" onChange={(e) => setTitle(e.target.value)} placeholder="title" />
                        </div>

                        <div className="add-input-box">
                        <input type="text" className="form-control" onChange={(e) => setAuthor(e.target.value)} placeholder="author" />
                        </div>

                        <div className="add-input-box">
                        <input type="text" className="form-control" onChange={(e) => setDescription(e.target.value)} placeholder="description" />
                        </div>

                        <div className="add-input-box">
                        <input type="text" className="form-control" onChange={(e) => setIsbn(e.target.value)} placeholder="isbn" />
                        </div>

                        <div className="add-input-box">
                        <input type="text" className="form-control" onChange={(e) => setGenre(e.target.value)} placeholder="genre" />
                        </div>

                        <div className="add-input-box">
                        <input type="text" className="form-control" onChange={(e) => setPrice(e.target.value)} placeholder="price" />
                        </div>

                        <div className="add-input-box">
                        <input type="text" className="form-control" onChange={(e) => setStock(e.target.value)} placeholder="stock_qty" />
                        </div>

                        <div className="add-input-file">
                        <input type="file" className="form-control" onChange={(e) => setImage(e.target.files[0])} placeholder="image" />
                        </div>

                        <div className="add-button-container">
                        <button onClick={addBookPage} className="btn btn-primary">Add Book</button>
                        </div>
                    </div>
                </div>
            </div>
         </section>
         </body>
    );
}

export default AddBookPage;
