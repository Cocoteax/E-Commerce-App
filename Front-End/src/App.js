import "./App.css";
import HomePage from "./pages/HomePage";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import NavAndFooterLayout from "./pages/NavAndFooterLayout";
import Error from "./pages/Error";
import ShopAllPage from "./pages/ShopAllPage";
import MenPage from "./pages/MenPage";
import WomenPage from "./pages/WomenPage";
import KidsPage from "./pages/KidsPage";
import ItemDetailsPage from "./pages/ItemDetailsPage";
import CartPage from "./pages/CartPage";

const router = createBrowserRouter([
	{
		path: "/",
		element: <NavAndFooterLayout />,
		children: [
			{
				index: true,
				path: "",
				element: <HomePage />,
			},
			{
				path: "products",
				element: <ShopAllPage />,
			},
			{
				path: "products/men",
				element: <MenPage />,
			},
			{
				path: "products/women",
				element: <WomenPage />,
			},
			{
				path: "products/kids",
				element: <KidsPage />,
			},
			{
				path: "products/:productID",
				element: <ItemDetailsPage />,
			},
			{
				path: "cart",
				element: <CartPage />,
			},
		],
		errorElement: <Error />,
	},
]);

function App() {
	return <RouterProvider router={router} />;
}

export default App;
