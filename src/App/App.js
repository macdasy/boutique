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
import Shop from '../Components/Shop/Shop';
// import Policy from '../Components/Extras/Policy';
import { useSelector } from 'react-redux';
// import { useEffect, useState } from 'react';
import "react-toastify/dist/ReactToastify.css";
import 'react-toastify/dist/ReactToastify.min.css';
import Lost from '../Components/Lost/404';
import RPay from '../Components/RazorPay/RazorPay';



function App() {

  const count = useSelector((state) => state.cart.cartTotalQuantity);

  return (
    <div className="App">
     <Router>
        <Routes>
            <Route exact path="/" element={<Home /> }/>
            <Route exact path="/contact" element={<Contact /> }/>
            <Route exact path="/cart" element={<Cart /> }/>
            <Route exact path="/shop" element={<Shop /> }/>
            <Route exact path="/collections" element={<CollectionsPage /> }/>
            <Route exact path="/admin" element={<Admin /> }/>
            <Route exact path="/policy" element={<Extras /> }/>
            { count && <Route exact path="/buynow" element={<BuyNow /> }/> }
            <Route exact path="/pay" element={<RPay /> }/>
            <Route exact path="*" element={<Lost /> }/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
