import {BrowserRouter, Route, Routes, Link} from "react-router-dom"
import './App.css';
import Form from "./components/Form";
import TestComponent from "./components/TestComponent";
import Main from "./components/Main";
import Displayproduct from "./components/Displayproduct";
import Updateproduct from "./components/Updateproduct";
import MainRefactor from "./views/MainRefactor";
import CreateUpdate from "./refactorComponent/CreateUpdate";





function App() {
  
  return (
    <div className="App">
      <BrowserRouter>
     
      <Link to="/api">Test Api</Link>
      <Link to="/api/products">All Products</Link>
      <Link to="/api/products/create">Add Products</Link>
      <Link to="/api/products/update/:id">Update Products</Link>

      <Routes>
       <Route path="" element={<MainRefactor />} />
        {/* <Route path="/api" element={<TestComponent />} /> */}
        
        
        <Route path="/api/products/update/:id" element={<CreateUpdate action="update" />} />
        <Route path="/api/products/:id" element={<Displayproduct />} />
        
        <Route path="*" element={<><h1>Error</h1> </>} />

      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
