import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { addAttribute, Attribute } from "../state/attributeSlice";
import { Link } from "react-router-dom";
import { useTypedSelector } from "../main";

const Attributes = () => {
  const [name, setName] = useState("");
  const [value, setValue] = useState("");

  const dispatch = useDispatch();
  const { attribute } = useTypedSelector((state) => state);
  // console.log("attribute ==>", attribute);
  return (
    <>
      <div>
        <h6>Name : </h6>
        <input onChange={(e) => setName(e.target.value)} type="text" />
      </div>
      <div>
        <h6>Value : </h6>
        <input onChange={(e) => setValue(e.target.value)} type="text" />
      </div>
      {/* <div>
    <h6>valueId : </h6>
    <input onChange={(e) => setValueId(e.target.value)} type="text" />
  </div> */}
      <br />
      <div>
        <button
          onClick={() =>
            dispatch(addAttribute({ name, value, value_id: 4, id: 5 }))
          }
          type="button"
        >
          ADD
        </button>
      </div>

      <hr />

      <div>
        <table>
          <thead>
            <tr>
              <th>id</th>
              <th>Name</th>
              <th>Value</th>
              <th>ValueId</th>
            </tr>
          </thead>
          <tbody>
            {attribute.map((item: Attribute) => (
              <tr>
                <td key={item.id}>{item.id}</td>
                <td key={item.id}>{item.name}</td>
                <td key={item.id}>{item.value}</td>
                <td key={item.id}>{item.value_id}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <br />
        <Link to={"/createproduct"}>createproduct</Link>
      </div>
    </>
  );
};

export default Attributes;
