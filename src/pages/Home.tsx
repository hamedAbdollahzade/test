import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <h1>Home Page</h1>
      <hr />
      <div
        style={{
          fontSize: "1.5rem",
          padding: "30px",
          display: "flex",
          flexDirection: "column",
          gap: "20px",
        }}
      >
        <div>
          <Link to={"/attribute"}> Attribute Page</Link>
        </div>
        <div>
          <Link to={"/admin/management/product/create"}>
            {" "}
            CreateProduct Page
          </Link>
        </div>
        <div>
          <Link to={"/Products"}> Products Page</Link>
        </div>
        <div>
          <Link to={"/calendar"}> Calendar Page</Link>
        </div>
        <div>
          <Link to={"/store"}> Store Page</Link>
        </div>
      </div>
    </>
  );
};

export default Home;
