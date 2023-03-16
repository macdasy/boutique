import './App.css';

import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Home from '../Components/Home/Home';
import CollectionsPage from '../Components/Collections/CollectionsPage';


function App() {
  return (
    <div className="App">
     <Router>
        <Routes>
            <Route exact path="/" element={<Home /> }/>
            <Route exact path="/collections" element={<CollectionsPage /> }/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
