import { Outlet } from "react-router-dom";
import React from "react";
import Navigation from "../components/Utility/Navigation";
import Footer from "../components/Utility/Footer";

function NavAndFooterLayout() {
	return (
		<>
			<Navigation />
			<Outlet />
			<Footer />
		</>
	);
}

export default NavAndFooterLayout;
