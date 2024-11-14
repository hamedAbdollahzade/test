import DataTable from "react-data-table-component";

const columns = [
  {
    name: "Title",
    selector: (row) => row.title,
    sortable: true,
  },
  {
    name: "Year",
    selector: (row) => row.year,
  },
];

const data = [
  {
    id: 1,
    title: "Beetlejuice",
    year: "1988",
  },
  {
    id: 2,
    title: "Ghostbusters",
    year: "1984",
  },
];

const ExpandedComponent = () => {
  return <div>test</div>;
};

const DataTable2 = () => {
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

export default DataTable2;
