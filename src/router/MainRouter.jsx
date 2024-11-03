import { createBrowserRouter } from "react-router-dom";
import MainRoot from "../layout/Root/MainRoot";
import Home from "../pages/Home/Home";

const MainRouter = createBrowserRouter([
  {
    path: "/",
    element: <MainRoot />,
    errorElement: <div>Error</div>,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/statistics",
        element: <div>Statistics</div>,
      },
      {
        path: "/dashboard",
        element: <div>Dashboard</div>,
      },
      {
        path: "/products",
        element: <div>Products</div>,
      },
      {
        path: "/product/:productId",
        element: <div>Product ID</div>,
      },

      {
        path: "/cart",
        element: <div>Cart</div>,
      },
      {
        path: "/wishlist",
        element: <div>Wishlist</div>,
      },
    ],
  },
]);

export default MainRouter;
