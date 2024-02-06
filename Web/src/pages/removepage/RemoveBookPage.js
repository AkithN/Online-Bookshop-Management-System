import { useState } from 'react'
import axios from 'axios'
import AdminNavbar from '../../components/layouts/navbar/AdminNavbar';
import '../addbookpage/addbookpage.style.css';

const client = axios.create({
    baseURL: "http://localhost:8081" 
  });


export default function Removebooks(){

    const [userData, setUserData] = useState({
        book_id: ""
    });

    function handle(e){
        const newUserData = { ...userData }
        newUserData[e.target.id] = e.target.value
        setUserData(newUserData);
        console.log(newUserData);
    }

    function submit(e) {
        e.preventDefault();
        client.delete('/books/' + userData.book_id)
          .then((res) => {
            console.log(res.data);
            // Show an alert box after successful delete
            window.alert('Delete successful');
          })
          .catch((error) => {
            console.error(error);
            // Show an alert box for any errors
            window.alert('Delete failed. Please try again.');
          });
      }

    return (
       <body className='body-1'>
        <section className="add-book-page">
            <AdminNavbar darkTheme={true}/>
            <h1><center><span className="text-primary">Remove Books</span></center></h1>
            <div className="add-container">
                <div className="center-content">
                    <form onSubmit={(e) => submit(e)}>
                        <table>
                            <tbody>
                                <tr>
    
                                    <td>Book Id :</td>

                                    <td><input id="book_id" value={userData.book_id} type="text" onChange={(e) => handle(e)}/></td>
                                
                                </tr>
                                <tr>
                                    <td></td>
                                    <div className='add-button-container'>
                                        <td><button >Remove Book</button></td>
                                    </div>
                                </tr>
                            </tbody>
                        </table>
                    </form>
                </div>
            </div>
            </section>
            </body>
    );
}  