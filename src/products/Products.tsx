import React from 'react';
import Header from '../common/header/Header';
import Sidebar from '../common/sidebar/Sidebar';
import Footer from '../common/footer/Footer';

const Products = () => (
  <div className="page">
    <Header />
    <Sidebar />
    <div className="page-content">Products welcome message</div>
    <Footer />
  </div>
);

export default Products;
