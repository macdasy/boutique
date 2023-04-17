import './App.css';

import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Home from '../Components/Home/Home';
import CollectionsPage from '../Components/Collections/CollectionsPage';
import Admin from '../Components/Admin/Admin';
import Wishlist from '../Components/Bag/Wishlist';
import Cart from '../Components/Bag/Cart';


function App() {
  return (
    <div className="App">
     <Router>
        <Routes>
            <Route exact path="/" element={<Home /> }/>
            <Route exact path="/favourites" element={<Wishlist /> }/>
            <Route exact path="/cart" element={<Cart /> }/>
            <Route exact path="/collections" element={<CollectionsPage /> }/>
            <Route exact path="/admin" element={<Admin /> }/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
