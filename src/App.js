import React from "react";
import Layout_1 from './layouts/Layout_1';

import "./App.css";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import {
  Home_pg,
  Link1_pg_2,
  Link1_pg_3,
  Customize_pg,
  Cart_pg,
} from "./components/comman/page_locations";


export default function App() {
  return (
    <>
      <div>
        <Router>
          <Routes>
            <Route path="/" element={
              <Layout_1 />
            }>
              <Route index element={<Home_pg />} />
              <Route path="Bugers" element={<Link1_pg_2 />} />
              <Route path="Mixed_Rice" element={<Link1_pg_3 />} />
              <Route path="Customize" element={<Customize_pg />} />
              <Route path="cart" element={<Cart_pg />} />
          
            </Route>
          </Routes>
        </Router>
      </div>
    </>
  );
}
