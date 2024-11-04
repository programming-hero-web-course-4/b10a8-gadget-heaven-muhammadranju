import Heading from "../../components/Heading/Heading";
import Header from "../../layout/Header/Header";

const Dashboard = () => {
  return (
    <div>
      <Header />
      <div className="bg-[#9538E2] text-white py-5  h-96 ">
        <Heading
          title={"Dashboard"}
          p={
            "Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!"
          }
        />
      </div>
    </div>
  );
};

export default Dashboard;
