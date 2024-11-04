import { FaDeleteLeft } from "react-icons/fa6";

const Cart = () => {
  return (
    <div className="flex justify-between gap-5 bg-gray-100 p-5 mt-10 rounded-xl">
      <div className="flex gap-5">
        <div className="w-52 h-28">
          <img
            src=""
            className="bg-gray-400 rounded-xl w-full h-full object-cover"
            alt=""
          />
        </div>
        <div className="space-y-5">
          <h1 className="font-bold text-2xl">Samsung Galaxy S23 Ultra</h1>
          <p>
            Ultra-slim, high-performance laptop with 13.4-inch Infinity Edge
            display.
          </p>
          <span className="font-bold text-lg mt-5">Price:$999.99</span>
        </div>
      </div>

      <button className="cursor-pointer ">
        <FaDeleteLeft className="text-3xl text-red-500 mx-10  " />
      </button>
    </div>
  );
};

export default Cart;
