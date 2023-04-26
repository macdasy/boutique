import './App.css';

import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Home from '../Components/Home/Home';
import CollectionsPage from '../Components/Collections/CollectionsPage';
import Admin from '../Components/Admin/Admin';
import Cart from '../Components/Bag/Cart';
import Contact from '../Components/Contact/Contact';
import Extras from '../Components/Extras/Extras';
import BuyNow from '../Components/BuyNow/BuyNow';
// import { useEffect, useState } from 'react';


function App() {

  return (
    <div className="App">
     <Router>
        <Routes>
            <Route exact path="/" element={<Home /> }/>
            <Route exact path="/contact" element={<Contact /> }/>
            <Route exact path="/cart" element={<Cart /> }/>
            <Route exact path="/collections" element={<CollectionsPage /> }/>
            <Route exact path="/admin" element={<Admin /> }/>
            <Route exact path="/policy" element={<Extras /> }/>
            <Route exact path="/buynow" element={<BuyNow /> }/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
