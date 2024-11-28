import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { addattribute } from "../state/attributeSlice";
import { Link } from "react-router-dom";
import axios from "axios";

const Attribute = () => {
  const [name, setName] = useState("");
  const [value, setValue] = useState("");

  const dispatch = useDispatch();
  const { attribute } = useSelector((state) => state);
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
          onClick={() => dispatch(addattribute({ name, value }))}
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
            {attribute.map((item) => (
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

export default Attribute;
