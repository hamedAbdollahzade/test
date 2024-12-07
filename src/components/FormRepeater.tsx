import { useEffect, useState } from "react";
import Select from "react-select";

const FormRepeater = ({ menu, attributes, setAtributes }) => {
  const [options, setOptions] = useState([]);

  // بارگذاری گزینه‌ها از API
  useEffect(() => {
    // console.log("attribute State ===>", attribute);
    // console.log("price State ===>", price);
    // console.log("product State ===>", product);

    const formattedOptions = menu.map((item) => ({
      value: item.id,
      label: item.name, // یا هر فیلد دیگری برای نمایش
    }));
    setOptions(formattedOptions);
  }, [menu]);

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

  return (
    <div>
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
            value={options.find((option) => option.value === attribute.attId)}
            onChange={(selectedOption) =>
              handleInputChange(index, "attId", selectedOption.value)
            }
            placeholder="محصول خود را انتخاب کنید"
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
          <button type="button" onClick={() => handleRemoveAttribute(index)}>
            حذف
          </button>
        </div>
      ))}
      <button type="button" onClick={handleAddAtribute}>
        افزودن ورودی
      </button>
    </div>
  );
};

export default FormRepeater;
