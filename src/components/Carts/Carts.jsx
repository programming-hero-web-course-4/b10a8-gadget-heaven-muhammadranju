/* eslint-disable react/prop-types */
import { FaDeleteLeft } from "react-icons/fa6";

const Cart = ({ cart }) => {
  return (
    <div className="flex justify-between gap-5 bg-gray-100 p-5 mt-10 rounded-xl">
      <div className="flex gap-5">
        <div className="w-52 h-28 ">
          <img
            src={cart?.product_image}
            className="bg-gray-400 rounded-xl w-full h-full object-cover"
            alt=""
          />
        </div>
        <div className="space-y-5">
          <h1 className="font-bold text-2xl">{cart?.product_title}</h1>
          <p>{cart?.description}</p>
          <span className="font-bold text-lg mt-5">Price: ${cart?.price}</span>
        </div>
      </div>

      <button className="cursor-pointer ">
        <FaDeleteLeft className="text-3xl text-red-500 mx-10  " />
      </button>
    </div>
  );
};

export default Cart;
