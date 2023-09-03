import "./App.css";
import HomePage from "./pages/HomePage";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import NavAndFooterLayout from "./pages/NavAndFooterLayout";
import Error from "./pages/Error";
import ShopAllPage from "./pages/ShopAllPage";
import ItemDetails from "./components/Utility/ItemDetails";
import MenPage from "./pages/MenPage";
import WomenPage from "./pages/WomenPage";

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
				path: "products/:productID",
				element: <ItemDetails />,
			},
		],
		errorElement: <Error />,
	},
]);

function App() {
	return <RouterProvider router={router} />;
}

export default App;
