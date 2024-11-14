import { useState } from "react";
import Select from "react-select";

const options = [
  { value: "chocolate", label: "Chocolate" },
  { value: "strawberry", label: "Strawberry" },
  { value: "vanilla", label: "Vanilla" },
];

const ReactSelectPractice = () => {
  const [selectedOption, setSelectedOption] = useState("null");
  console.log(selectedOption);
  return (
    <div>
      <Select
        defaultValue={selectedOption}
        onChange={setSelectedOption}
        options={options}
      />
    </div>
  );
};

export default ReactSelectPractice;
