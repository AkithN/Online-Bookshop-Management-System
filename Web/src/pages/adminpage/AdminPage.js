import React from 'react';
import '../../components/layouts/showcase/showcase.styles.css';
import AdminNavbar from '../../components/layouts/navbar/AdminNavbar';

const AdminPage = () => {
  return (
    
      <section className="showcase-container">
      
      <div className="overlay-admin"> 
      <AdminNavbar darkTheme={false} />  
      </div>
      </section>
  );
};

export default AdminPage;
