import React, { useState } from "react";
import DataTable from "react-data-table-component";
import { useSelector } from "react-redux";
import { Price } from "../state/priceSlice";
import { Attribute } from "../state/attributeSlice";
import { Product } from "../state/productSlice";

const Products = () => {
  const { products } = useSelector((state) => state);
  const [filterText, setFilterText] = useState("");

  const filteredData = products.filter((product) => {
    return (
      product?.name?.toLowerCase().includes(filterText.toLowerCase()) ||
      product?.category?.toLowerCase().includes(filterText.toLowerCase())
    );
  });

  const data = filteredData.map((product: Product) => ({
    id: product?.id,
    name: product?.name,
    price: product.price.map((price: Price) => price.value),
    category: product?.category,
    attribute: product?.attribute.map(
      (attribute: Attribute) => attribute.value
    ),
  }));

  const columns = [
    {
      name: "Id",
      selector: (row) => row.id,
      sortable: true,
    },
    {
      name: "Name",
      selector: (row) => row.name,
      sortable: true,
    },
    {
      name: "Price",
      selector: (row) => row.price[0],
      sortable: true,
    },
    {
      name: "Category",
      selector: (row) => row.category,
      sortable: true,
    },
    {
      name: "Attribute",
      selector: (row) => row.attribute[0],
      sortable: true,
    },
  ];

  const ExpandedComponent = () => {
    return <div>More Property ...</div>;
  };

  return (
    <div>
      <h2>Products</h2>
      <input
        type="text"
        placeholder="Search by name, category or attribute"
        value={filterText}
        onChange={(e) => setFilterText(e.target.value)}
      />
      <div>
        <DataTable
          expandableRows
          expandableRowsComponent={ExpandedComponent}
          selectableRows
          columns={columns}
          data={data}
          pagination
          paginationPerPage={10}
          paginationRowsPerPageOptions={[5, 10, 20]}
        />
      </div>
    </div>
  );
};

export default Products;
