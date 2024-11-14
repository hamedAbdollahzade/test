import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";

import Home from "./pages/Home";
import Attribute from "./pages/Attribute";
import CreateProduct from "./pages/CreateProduct";
import Products from "./pages/Products";

function App() {
  return (
    <>
      <BrowserRouter
        future={{ v7_startTransition: true, v7_relativeSplatPath: true }}
      >
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/attribute" element={<Attribute />} />
          <Route path="/createproduct" element={<CreateProduct />} />
          <Route path="/Products" element={<Products />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
