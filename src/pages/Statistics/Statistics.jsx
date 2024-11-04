import { useEffect } from "react";
import Heading from "../../components/Heading/Heading";
import Header from "../../layout/Header/Header";

const Statistics = () => {
  useEffect(() => {
    document.title = "Statistics | GadgetHeaven ";
  }, []);

  return (
    <>
      <div>
        <Header />
        <div className="bg-purple-600 text-white py-5  rounded-xl">
          <Heading
            title={"Statistics"}
            p={
              "Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!"
            }
          />
        </div>
        <div className="flex justify-between items-center mt-10 ">
          <h3 className="font-bold text-2xl">Statistics</h3>
        </div>
      </div>
    </>
  );
};

export default Statistics;
