// src/CreateProduct.tsx
import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addProduct } from "../state/productSlice";
import axios from "axios";
import ReactDropZonePractice from "../components/ReactDropZonePractice";
import TinyMCEEditor from "../components/TinyMCEEditor";
import Select from "react-select";

const CreateProduct: React.FC = () => {
  const dispatch = useDispatch();
  const { attribute, price, product } = useSelector((state) => state);

  const [options, setOptions] = useState([]);
  const [attributes, setAtributes] = useState([{ attId: "", value: 0 }]);

  // بارگذاری گزینه‌ها از API
  useEffect(() => {
    console.log("attribute State ===>", attribute);
    console.log("price State ===>", price);
    console.log("product State ===>", product);

    const options = [...attribute, ...price];

    const formattedOptions = options.map((item) => ({
      value: item.id,
      label: item.name, // یا هر فیلد دیگری برای نمایش
    }));
    setOptions(formattedOptions);
  }, [attribute, price, product]);

  const [productName, setProductName] = useState("");
  const [productId, setProductId] = useState("");
  const [productCategory, setProductCategory] = useState("");
  const [productPrice, setProductPrice] = useState(0);

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

  const handleAddAtribute = () => {
    setAtributes([...attributes, { attId: "", value: 0 }]);
  };
  const handleInputChange = (index, field, value) => {
    const newattributes = [...attributes];
    newattributes[index][field] = value;
    setAtributes(newattributes);
  };
  const handleRemoveAttribute = (index) => {
    const newattributes = attributes.filter((_, i) => i !== index);
    setAtributes(newattributes);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setDisabledButton(true);

    const formData = new FormData(e.target);

    // Append uploaded files to the FormData
    fileInputRef.current.forEach((file) => {
      formData.append("files[]", file);
    });

    // Append attributes to FormData
    attributes.forEach((attribute, index) => {
      formData.append(`attribute[${index}][attId]`, attribute.attId);
      formData.append(`attribute[${index}][value]`, attribute.value);
    });

  

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

          <input
            type="number"
            name="price"
            placeholder="قیمت محصول"
            value={productPrice}
            onChange={(e) => setProductPrice(parseFloat(e.target.value))}
            required
          />

          {/* Form Repeater */}
          <div>
            <h2>فرم ریپیتر</h2>
            {attributes.map((attribute, index) => (
              <div key={index}>
                {/* <input
                  key={index}
                  type="text"
                  placeholder="نام"
                  value={input.name}
                  name={`attribute[name][${index}]`}
                  onChange={(e) =>
                    handleInputChange(index, "name", e.target.value)
                  }
                /> */}
                <Select
                  options={options}
                  value={options.find(
                    (option) => option.value === attribute.attId
                  )}
                  onChange={(selectedOption) =>
                    handleInputChange(index, "attId", selectedOption.value)
                  }
                  placeholder="محصول خود را انتخاب کنید..."
                />
                {/* <input
                  key={index + "S"}
                  type="text"
                  placeholder="رنگ"
                  name={`attribute[value][${index}]`}
                  value={input.value}
                  onChange={(e) =>
                    handleInputChange(index, "value", e.target.value)
                  }
                /> */}
                <input
                  type="number"
                  value={attribute.value}
                  onChange={(e) =>
                    handleInputChange(index, "value", parseInt(e.target.value))
                  }
                  placeholder="مقدار"
                />
                <button
                  type="button"
                  onClick={() => handleRemoveAttribute(index)}
                >
                  حذف
                </button>
              </div>
            ))}
            <button type="button" onClick={handleAddAtribute}>
              افزودن ورودی
            </button>
          </div>
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
