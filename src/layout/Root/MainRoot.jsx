import { Outlet } from "react-router-dom";
import Footer from "../Footer/Footer";
import { createContext, useEffect, useState } from "react";

export const ProductContext = createContext();

const MainRoot = () => {
  const [products, setProducts] = useState([]);

  const [cartArray, setCartArray] = useState([]);
  const [wishlistArray, setWishlistArray] = useState([]);

  const handelAddToCart = (cartItem) => {
    setCartArray((prev) => [...prev, cartItem]);
    // console.log("Cart click", cartItem);
  };
  const handelWishlist = (wishlistItem) => {
    setWishlistArray((prev) => [...prev, wishlistItem]);

    // console.log("Wishlist click", wishlistItem);
  };

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
        <ProductContext.Provider
          value={{
            products,
            handelAddToCart,
            handelWishlist,
            cartArray,
            wishlistArray,
            setCartArray,
          }}
        >
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
