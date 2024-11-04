import { useEffect } from "react";
import WishlistCompo from "../../components/Carts/WishlistCompo";
import Heading from "../../components/Heading/Heading";
import Header from "../../layout/Header/Header";

const Wishlist = () => {
  useEffect(() => {
    document.title = "Wishlist | GadgetHeaven ";
  }, []);
  return (
    <div>
      <Header />
      <div className="bg-purple-600 text-white py-5  rounded-xl">
        <Heading
          title={"Wishlist"}
          p={
            "Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!"
          }
        />
      </div>

      {/* card */}
      <div className="flex justify-between items-center mt-10 ">
        <h3 className="font-bold text-2xl">Your Wishlists Here</h3>
      </div>
      <WishlistCompo />
    </div>
  );
};

export default Wishlist;
