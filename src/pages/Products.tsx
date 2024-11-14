import DataTable from "react-data-table-component";
import { useSelector } from "react-redux";

const Products = () => {
  const { products } = useSelector((state) => state);
  console.log(products);

  const data = [];
  products.forEach((product) => {
    data.push({
      id: product.id,
      name: product.name,
      price: product.price,
      category: product.category,
      //   attribute: product.attribute,
    });
  });

  const columns = [
    {
      name: "Id",
      selector: (row) => row.id,
      sortable: true,
    },
    {
      name: "Name",
      selector: (row) => row.name,
    },
    {
      name: "Price",
      selector: (row) => row.price,
    },
    {
      name: "Category",
      selector: (row) => row.category,
    },
  ];

  const ExpandedComponent = () => {
    return <div>test</div>;
  };

  return (
    <div>
      DataTable
      <div>
        <DataTable
          expandableRows
          expandableRowsComponent={ExpandedComponent}
          selectableRows
          columns={columns}
          data={data}
        />
      </div>
    </div>
  );
};

export default Products;
