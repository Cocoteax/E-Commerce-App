import React from "react";
import ShopAllHeader from "../components/ShopAllPage/ShopAllHeader";
import ShopAllItems from "../components/ShopAllPage/ShopAllItems";
import { useNavigate } from "react-router-dom";

function ShopAllPage() {
    const navigate = useNavigate()
    const navigateToItemDetail = () => {
        navigate("peasd")
    }
	return (
		<>
			<ShopAllHeader />
			<ShopAllItems />
            <button onClick={navigateToItemDetail}>Clickme to go to item details</button>
		</>
	);
}

export default ShopAllPage;
