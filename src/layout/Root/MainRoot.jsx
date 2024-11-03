import { Outlet } from "react-router-dom";
import Navbar from "../Header/Navbar";
import Footer from "../Footer/Footer";

const MainRoot = () => {
  return (
    <div className="bg-gray-50 pt-5">
      <div className="mx-auto xl:container md:w-11/12 lg:w-11/12 w-11/12 ">
        <Navbar />
        <div className="min-h-[calc(100vh-288px)]">
          <Outlet />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default MainRoot;
