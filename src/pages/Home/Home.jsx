import Category from "../../layout/Categories/Category";
import Products from "../Product/Products";

const Home = () => {
  return (
    <div className="mt-72">
      <h1 className="text-3xl font-bold text-center">
        Explore Cutting-Edge Gadgets
      </h1>

      {/* main category and cards section */}
      <div className="flex lg:flex-row flex-col gap-5 mt-10 ">
        <Category />
        <Products />
      </div>
    </div>
  );
};

export default Home;
