// React Select Weekly Downloads ==> 7,858,071

import axios from "axios";
import { useEffect, useState } from "react";
import Select from "react-select";

// const options = [
//   { value: "published", label: "Published" },
//   { value: "private", label: "Private" },
//   { value: "trash", label: "Trash" },
//   { value: "draft", label: "Draft" },
//   { value: "pending", label: "Pending" },
// ];

export default function ReactSelect({ options }) {
  const [selectedOption, setSelectedOption] = useState(null);

  return (
    <div style={{ width: "300px" }}>
      <Select
        defaultValue={selectedOption}
        onChange={setSelectedOption}
        options={options}
      />
    </div>
  );
}
