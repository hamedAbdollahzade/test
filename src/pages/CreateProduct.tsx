// src/CreateProduct.tsx
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addProduct } from "../state/productSlice";
import axios from "axios";

const CreateProduct: React.FC = () => {
  const dispatch = useDispatch();
  const { products } = useSelector((state) => state);

  const [productName, setProductName] = useState("");
  const [productId, setProductId] = useState("ایدی محصول");
  const [productCategory, setProductCategory] = useState("");
  const [productPrice, setProductPrice] = useState(0);

  const [inputs, setInputs] = useState([
    { id: 1, name: "نام", value: "مقدار", value_id: 123 },
  ]);

  const handleAddInput = () => {
    setInputs([...inputs, { id: 1, name: "", value: "", value_id: 123 }]);
  };
  const handleInputChange = (index: number, field: string, value: string) => {
    const newInputs = [...inputs];
    newInputs[index][field] = value;
    setInputs(newInputs);
  };
  const handleRemoveInput = (index: number) => {
    const newInputs = inputs.filter((_, i) => i !== index);
    setInputs(newInputs);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    // مشاهده‌ی محتوای formData
    // formData.forEach((value, key) => {
    //   console.log(`${key}: ${value}`);
    // });

    axios({
      method: "POST",
      data: formData,
      url: "http://192.168.1.155:2000",
    })
      .then((response) => {
        console.log(response.data);
        alert(response.status === 200 ? "با موفقیت ثبت شد" : "Error");
        // dispatch(addProduct({ ...formData }));
      })
      .catch((error) => {
        console.log(error);
        const product = {};
        formData.forEach((value, key) => {
          product[key] = value;
        });
        dispatch(addProduct(product));
        // console.log(product);
      });
  };

  return (
    <form
      style={{ display: "flex", flexDirection: "column", gap: "20px" }}
      onSubmit={handleSubmit}
    >
      <h2>ساخت محصول جدید </h2>
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
        {inputs.map((input, index) => (
          <div key={index}>
            <input
              key={index}
              type="text"
              placeholder="نام"
              value={input.name}
              name={`attribute[name][${index}]`}
              onChange={(e) => handleInputChange(index, "name", e.target.value)}
            />
            <input
              key={index + "S"}
              type="text"
              placeholder="رنگ"
              name={`attribute[value][${index}]`}
              value={input.value}
              onChange={(e) =>
                handleInputChange(index, "value", e.target.value)
              }
            />
            <button type="button" onClick={() => handleRemoveInput(index)}>
              حذف
            </button>
          </div>
        ))}
        <button type="button" onClick={handleAddInput}>
          افزودن ورودی
        </button>
      </div>

      {/* Form Repeater */}

      <button type="submit">افزودن محصول</button>
    </form>
  );
};

export default CreateProduct;
