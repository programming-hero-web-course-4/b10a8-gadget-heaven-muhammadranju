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
          className="rounded-xl w-full h-52 object-cover"
        />
      </figure>
      <div className="card-body ">
        <h2 className="card-title">{card?.product_title}</h2>
        <p>If a dog chews shoes whose shoes does he choose?</p>
        <div className="card-actions">
          <button className="btn btn-outline text-[#9538E2] border-[#9538E2] rounded-full px-6 font-bold">
            View Details
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
