import { Link } from "react-router-dom";

/* eslint-disable react/prop-types */
const img =
  "https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp";
const Card = ({ card }) => {
  return (
    <div className="card bg-base-100 shadow-xl h-full">
      <figure className="px-6 pt-6">
        <img
          src={card?.product_image || img}
          alt="Shoes"
          className="rounded-xl w-full h-72 object-cover"
        />
      </figure>
      <div className="card-body ">
        <h2 className="card-title">{card?.product_title}</h2>
        <p>{card?.description}</p>
        <div className="card-actions">
          <Link
            to={`/product/${card?.slug}`}
            className="btn btn-outline text-[#9538E2] border-[#9538E2] rounded-full px-6 font-bold"
          >
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Card;
