import { useState } from "react";

// کامپوننت ورودی فردی
const InputField = ({ index, value, onChange, onRemove }) => {
  return (
    <div>
      <input
        type="text"
        value={value}
        onChange={(e) => onChange(index, e.target.value)}
        placeholder={`ورودی ${index + 1}`}
      />
      <button type="button" onClick={() => onRemove(index)}>
        حذف
      </button>
    </div>
  );
};

// کامپوننت اصلی
const FormRepeater = () => {
  const [inputs, setInputs] = useState([""]); // حالت اولیه با یک ورودی خالی

  const handleAddInput = () => {
    setInputs([...inputs, ""]); // افزودن ورودی جدید
  };

  const handleInputChange = (index, value) => {
    const newInputs = [...inputs];
    newInputs[index] = value; // به‌روز کردن ورودی موجود
    setInputs(newInputs);
  };

  const handleRemoveInput = (index) => {
    const newInputs = inputs.filter((_, i) => i !== index); // حذف ورودی مشخص
    setInputs(newInputs);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("ورودی‌ها:", inputs); // کار با ورودی‌ها
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>فرم تکرار شونده</h2>
      {inputs.map((input, index) => (
        <InputField
          key={index}
          index={index}
          value={input}
          onChange={handleInputChange}
          onRemove={handleRemoveInput}
        />
      ))}
      <button type="button" onClick={handleAddInput}>
        افزودن ورودی
      </button>
      <button type="submit">ارسال</button>
    </form>
  );
};

export default FormRepeater;
