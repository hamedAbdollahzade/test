// src/CreateProduct.tsx
import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addProduct, Product } from "../state/productSlice";
import axios, { GenericFormData } from "axios";
import ReactDropZonePractice from "../components/ReactDropZonePractice";
import TinyMCEEditor from "../components/TinyMCEEditor";
import FormRepeater from "../components/FormRepeater";
import { Attribute } from "../state/attributeSlice";
import { Price } from "../state/priceSlice";
import { useTypedSelector } from "../main";

const CreateProduct: React.FC = () => {
  const dispatch = useDispatch();
  const { attribute, price } = useTypedSelector((state) => state);

  const [attributes, setAtributes] = useState<
    { attId: number; value: number }[]
  >([{ attId: 0, value: 0 }]);
  const [attributesPrice, setAtributesPrice] = useState([
    { attId: 0, value: 0 },
  ]);

  const [productName, setProductName] = useState("");
  const [productId, setProductId] = useState("");
  const [productCategory, setProductCategory] = useState("");
  // const [productPrice, setProductPrice] = useState(0);

  const [activeTab, setActiveTab] = useState("general");
  const [disabledButton, setDisabledButton] = useState(false);

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  // Ref for storing uploaded files
  const fileInputRef = useRef<File[]>([]);

  const handleFileChange = (files: File[]) => {
    fileInputRef.current = files; // Update the ref with uploaded files
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setDisabledButton(true);

    const formData = new FormData<GenericFormData>(e.target);

    // Append uploaded files to the FormData
    fileInputRef.current.forEach((file) => {
      formData.append("files[]", file);
    });

    // Append attributes to FormData
    attributes.forEach((attribute, index) => {
      formData.append(`attribute[${index}][attId]`, attribute.attId);
      formData.append(`attribute[${index}][value]`, attribute.value);
    });

    // Append Price to FormData
    attributesPrice.forEach((attribute, index) => {
      formData.append(`price[${index}][attId]`, attribute.attId);
      formData.append(`price[${index}][value]`, attribute.value);
    });

    // Create the product object
    const product: Product = {
      id: parseInt(productId), // ID باید به عدد تبدیل شود
      name: productName,
      category: productCategory,
      attribute: attributes.map<Attribute>((attribute) => ({
        id: attribute.attId, // فرض کنید این ID درست است
        name: "test",
        value: attribute.value,
        value_id: 1111,
      })),
      price: attributesPrice.map<Price>((attributePrice) => ({
        id: attributePrice.attId,
        type: 1111, // یا هر نوع دیگری که دارید
        name: "test", // می‌توانید این نام را از نام محصول استفاده کنید
        value: attributePrice.value,
      })),
    };

    console.log("product ====>>>>>>>>>", product);

    // Dispatch the action to Redux
    dispatch(addProduct(product));

    axios({
      method: "POST",
      data: formData,
      url: "http://192.168.100.15:2000",
    })
      .then((response) => {
        console.log(response.data);
        // alert(response.status === 200 ? "با موفقیت ثبت شد" : "Error");

        setDisabledButton(false);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <form
      style={{
        width: "800px",
        display: "flex",
        margin: "0 auto",
        flexDirection: "column",
        gap: "20px",
      }}
      onSubmit={handleSubmit}
    >
      <h2>ساخت محصول جدید </h2>

      <div style={{ display: "flex", gap: "10px" }}>
        <span
          style={
            activeTab == "general" ? { borderBottom: "1px solid black" } : {}
          }
          onClick={() => handleTabClick("general")}
        >
          General
        </span>
        <span
          style={
            activeTab == "advanced"
              ? {
                  borderBottom: "1px solid black",
                }
              : {}
          }
          onClick={() => handleTabClick("advanced")}
        >
          Advanced
        </span>
      </div>

      {activeTab === "general" && (
        <div>
          <input
            type="text"
            name="name"
            placeholder="نام محصول"
            value={productName}
            onChange={(e) => setProductName(e.target.value)}
            required
          />
          <input
            type="number"
            name="id"
            placeholder="ایدی محصول"
            value={productId}
            onChange={(e) => setProductId(e.target.value)}
            required
          />
          <input
            type="text"
            name="category"
            placeholder="نام دسته بندی محصول"
            onChange={(e) => setProductCategory(e.target.value)}
            value={productCategory}
          />
          {/* 
          <input
            type="number"
            name="price"
            placeholder="قیمت محصول"
            value={productPrice}
            onChange={(e) => setProductPrice(parseFloat(e.target.value))}
            required
          /> */}

          {/* Form Repeater */}
          <h2>فرم ریپیتر اتریبیوت</h2>
          <FormRepeater
            menu={attribute}
            attributes={attributes}
            setAtributes={setAtributes}
          />

          <h2>فرم ریپیتر قیمت</h2>
          <FormRepeater
            menu={price}
            attributes={attributesPrice}
            setAtributes={setAtributesPrice}
          />
          {/* Form Repeater */}
        </div>
      )}
      {activeTab === "advanced" && <h1>Tab advanced</h1>}

      <div>
        <ReactDropZonePractice onFilesAdded={handleFileChange} />
      </div>

      <div>
        <h1>ویرایشگر TinyMCE</h1>
        <TinyMCEEditor />
      </div>
      {/* 
      <div>
        <ReactSelect options={options} />
      </div> */}
      <div>
        <button disabled={disabledButton} type="submit">
          ثبت سفارش{" "}
        </button>
      </div>
    </form>
  );
};

export default CreateProduct;
