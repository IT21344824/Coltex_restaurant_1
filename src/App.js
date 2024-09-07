import React from "react";
import Layout_1 from './layouts/Layout_1';

import "./App.css";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import {
  Link1_pg_1,
  Link1_pg_2,
  Link1_pg_3,
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
              <Route index element={<Link1_pg_1 />} />
              <Route path="link-2" element={<Link1_pg_2 />} />
              <Route path="link-3" element={<Link1_pg_3 />} />
              <Route path="cart" element={<Cart_pg />} />
          
            </Route>
          </Routes>
        </Router>
      </div>
    </>
  );
}
