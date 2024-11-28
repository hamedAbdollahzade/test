import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <h1>Home Page</h1>
      <div>
        <Link to={"/attribute"}> Attribute Page</Link>
      </div>
      <br />
      <div>
        <Link to={"/admin/management/product/create"}> CreateProduct Page</Link>
      </div>
      <br />
      <div>
        <Link to={"/Products"}> Products Page</Link>
      </div>
    </>
  );
};

export default Home;
