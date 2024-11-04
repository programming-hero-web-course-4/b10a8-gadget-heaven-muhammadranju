import { NavLink, useLoaderData, useParams } from "react-router-dom";
import Categories from "../../layout/Categories/Categories";
import { useContext, useEffect, useState } from "react";
import { ProductContext } from "../../layout/Root/MainRoot";
import Card from "../../components/Card/Card";
import Navbar from "../../layout/Header/Navbar";

const Home = () => {
  const [catProducts, setCatProducts] = useState([]);
  const [isActiveColor, setIsActiveColor] = useState(true);
  const categories = useLoaderData();
  const useProducts = useContext(ProductContext);
  const { categoryId } = useParams();

  const handelIsActive = () => {
    setIsActiveColor(false);
  };
  useEffect(() => {
    if (categoryId === "all-products" || !categoryId) {
      setCatProducts(useProducts);
    } else {
      const findProducts = useProducts.filter((category) => {
        return category.category === categoryId;
      });
      setCatProducts(findProducts);
    }
  }, [categoryId, useProducts]);

  // console.log(catProducts);
  return (
    <>
      <Navbar />
      <div className="mt-72">
        <h1 className="text-3xl font-bold text-center">
          Explore Cutting-Edge Gadgets
        </h1>

        {/* main category and cards section */}
        <div className="flex lg:flex-row flex-col gap-5 mt-10 ">
          <div className="w-[20%] bg-white border rounded-2xl h-full  flex flex-col gap-5 p-5">
            <NavLink
              onClick={handelIsActive}
              to="/category/all-products"
              className={({ isActive }) =>
                `btn   text-white"} ${
                  isActive ? "bg-[#9538E2] text-white" : ""
                }`
              }
            >
              All Products
            </NavLink>

            {categories.map((category, idx) => (
              <Categories
                key={idx}
                category={category}
                handelIsActive={handelIsActive}
              />
            ))}
          </div>
          <div className="w-[80%] grid lg:grid-cols-3 grid-cols-1 gap-4 h-full">
            {catProducts.map((card) => (
              <Card key={card.product_id} card={card} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
