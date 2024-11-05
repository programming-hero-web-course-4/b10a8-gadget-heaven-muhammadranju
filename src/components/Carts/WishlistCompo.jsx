/* eslint-disable react/prop-types */
import { FaDeleteLeft } from "react-icons/fa6";

const WishlistCompo = ({ wishlist }) => {
  return (
    <div className="flex lg:flex-row flex-col justify-between gap-5 bg-gray-100 p-5 mt-10 rounded-xl">
      <div className="flex lg:flex-row flex-col gap-5">
        <div className="lg:w-52 lg:h-52 ">
          <img
            src={wishlist?.product_image}
            className="bg-gray-400 rounded-xl w-full h-full object-cover"
            alt=""
          />
        </div>
        <div className="space-y-3 flex justify-center flex-col">
          <h1 className="font-bold text-2xl">{wishlist?.product_title}</h1>
          <p>{wishlist?.description}</p>

          <span className="font-bold text-lg mt-5">
            Price: ${wishlist?.price}.00
          </span>
          <button className="btn w-fit rounded-full text-white bg-purple-600 px-7 ">
            Add To Cart
          </button>
        </div>
      </div>

      <button className="cursor-pointer ">
        <FaDeleteLeft className="text-3xl text-red-500 mx-10  lg:float-start float-right" />
      </button>
    </div>
  );
};

export default WishlistCompo;
