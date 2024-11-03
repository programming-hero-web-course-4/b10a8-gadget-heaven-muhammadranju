const Banner = () => {
  return (
    <>
      <div className="flex flex-col items-center justify-center text-center text-white space-y-4 mt-8">
        <h1 className="lg:text-5xl  font-bold w-[70%] ">
          Upgrade Your Tech Accessorize with Gadget Heaven Accessories
        </h1>
        <p className="w-[50%] ">
          Explore the latest gadgets that will take your experience to the next
          level. From smart devices to the coolest accessories, we have it all!
        </p>
        <button className="btn bg-white text-[#9538E2] px-6 font-bold rounded-full">
          Show Now
        </button>
      </div>
      {/* herder banner */}
      <div className="w-[60%] h- mx-auto rounded-2xl p-5 border-2 border-slate-50 bg-white/25 absolute left-0 right-0 mt-8">
        <img
          src="../assets/banner.jpg"
          className="rounded-xl w-full h-[450px] object-cover"
          alt=""
        />
      </div>
    </>
  );
};

export default Banner;
