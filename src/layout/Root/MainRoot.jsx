import { Outlet } from "react-router-dom";
import Footer from "../Footer/Footer";
import { createContext, useEffect, useState } from "react";

export const ProductContext = createContext();
const MainRoot = () => {
  const [products, setProducts] = useState([]);

  const getProducts = async () => {
    const response = await fetch("../data/products.json");
    const data = await response.json();
    setProducts(data);
  };

  useEffect(() => {
    getProducts();
  }, []);
  return (
    <div className="b pt-5">
      <div className="mx-auto xl:container md:w-11/12 lg:w-11/12 w-11/12 ">
        <ProductContext.Provider value={products}>
          <div className="min-h-[calc(100vh-288px)]">
            <Outlet />
          </div>
        </ProductContext.Provider>
      </div>
      <Footer />
    </div>
  );
};

export default MainRoot;
