import { createBrowserRouter } from "react-router-dom";
import MainRoot from "../layout/Root/MainRoot";
import Home from "../pages/Home/Home";
import Category from "../layout/Categories/Category";

const MainRouter = createBrowserRouter([
  {
    path: "/",
    element: <MainRoot />,
    errorElement: <div>Error</div>,
    children: [
      {
        path: "/",
        element: <Home />,
        loader: () => fetch("../data/categories.json"),
        children: [
          {
            path: "/category/:categoryId",
            element: <Category />,
          },
        ],
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
      // {
      //   path: "/category/:categoryId",
      //   element: <Category />,
      // },
    ],
  },
]);

export default MainRouter;
