import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";

import Home from "./pages/Home";
import CreateProduct from "./pages/CreateProduct";
import Products from "./pages/Products";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import axios from "axios";
import { addPrice, Price } from "./state/priceSlice";
import { addAttribute, Attribute } from "./state/attributeSlice";
import Store from "./pages/Store";
import Attributes from "./pages/Attribute";

function App() {
  //Address :  Drive D : eshterak / hamed

  const dispatch = useDispatch();
  useEffect(() => {
    const fetchData = async () => {
      const { data: dataAttribute } = await axios({
        method: "GET",
        url: "http://192.168.100.15:2000/attribute",
      });
      console.log("fetchData--dataAttribute === > ", dataAttribute);
      if (dataAttribute) {
        dataAttribute?.map((data: Attribute) =>
          dispatch(
            addAttribute({
              id: data?.id,
              name: data?.name,
              value: 1111,
              value_id: 1111,
            })
          )
        );
      }

      const { data: dataPrice } = await axios({
        method: "GET",
        url: "http://192.168.100.15:2000/price",
      });
      console.log("fetchData--Dataprice === > ", dataPrice);
      if (dataPrice) {
        dataPrice.map((data: Price) =>
          dispatch(
            addPrice({
              id: data?.id,
              name: data?.name,
              type: 1111,
              value: 1111,
            })
          )
        );
      }
    };

    fetchData();
  }, [dispatch]);

  return (
    <>
      <BrowserRouter
        future={{ v7_startTransition: true, v7_relativeSplatPath: true }}
      >
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/attribute" element={<Attributes />} />
          <Route
            path="/admin/management/product/create"
            element={<CreateProduct />}
          />
          <Route path="/Products" element={<Products />} />
          <Route path="/calendar" element={"Calendar Page ..."} />
          <Route path="/store" element={<Store />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
