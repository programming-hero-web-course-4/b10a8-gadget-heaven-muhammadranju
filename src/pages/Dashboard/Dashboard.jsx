import { useContext, useEffect, useState } from "react";
import Carts from "../../components/Carts/Carts";
import Heading from "../../components/Heading/Heading";
import Header from "../../layout/Header/Header";
import { HiAdjustmentsVertical } from "react-icons/hi2";
import WishlistCompo from "../../components/Carts/WishlistCompo";
import { ProductContext } from "../../layout/Root/MainRoot";

const Dashboard = () => {
  const [isCart, setIsCart] = useState(true);
  const [sortPrice, setSortPrice] = useState([]);
  const { cartArray, wishlistArray, handelAddToCart } =
    useContext(ProductContext);

  const handelCartBtn = () => {
    setIsCart(true);
  };
  const handelWishlistBtn = () => {
    setIsCart(false);
  };

  const handelSortByPrice = () => {
    const sortByPriceArray = cartArray.sort((a, b) => b.price - a.price);

    setSortPrice(sortByPriceArray);
  };
  // console.log(sortPrice);

  useEffect(() => {
    document.title = "Dashboard | GadgetHeaven ";
  }, []);

  return (
    <div>
      <Header />
      <div className="bg-purple-600  text-white py-5 rounded-xl h-64">
        <Heading
          title={"Dashboard"}
          p={
            "Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!"
          }
        />
        <div className="flex justify-center items-center gap-2 font-bold ">
          <button
            onClick={handelCartBtn}
            className={`btn rounded-full px-14 ${
              isCart ? "bg-white text-purple-500" : "bg-transparent text-white"
            }`}
          >
            Cart
          </button>
          <button
            onClick={handelWishlistBtn}
            className={`btn border rounded-full px-14  ${
              isCart ? "bg-transparent text-white" : "bg-white text-purple-500"
            }`}
          >
            Wishlist
          </button>
        </div>
      </div>
      <div className="flex justify-between items-center mt-10 ">
        <h3 className="font-bold text-2xl">{isCart ? "Cart" : "Wishlist"}</h3>
        {isCart && (
          <div className="space-x-3">
            <span className="font-bold text-xl">Total cost:$ 999.99</span>
            <button
              onClick={handelSortByPrice}
              className="btn rounded-full border-purple-500 text-purple-500 px-10"
            >
              Sort by Price <HiAdjustmentsVertical className="text-2xl" />
            </button>
            <button className="btn border rounded-full bg-purple-600 text-white px-14">
              Purchase
            </button>
          </div>
        )}
      </div>
      {/* card */}
      {isCart
        ? cartArray.map((cart) => <Carts cart={cart} key={cart.product_id} />)
        : wishlistArray.map((wishlist) => (
            <WishlistCompo
              key={wishlist.product_id}
              wishlist={wishlist}
              handelAddToCart={handelAddToCart}
            />
          ))}
    </div>
  );
};

export default Dashboard;
