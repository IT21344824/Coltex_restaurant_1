import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../components/comman/Navbar';
import Footer from '../components/comman/Footer';

const Layout_1 = () => {
  return (
    <div className="">
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
}

export default Layout_1;
