import React, { useEffect } from "react";
import OrdersHeader from "../components/OrdersPage/OrdersHeader";
import OrdersSection from "../components/OrdersPage/OrdersSection";
import { fetchOrders } from "../store/order-slice";
import { useDispatch, useSelector } from "react-redux";

function OrdersPage() {
	const dispatch = useDispatch();
	const fetchedOrders = useSelector((state) => state.orderSlice.fetchedOrders);
	// useEffect to fetch orders on order page load
	// TODO: Execute fetchOrders() whenever ordersChanged redux state changes due to user adding order or changing status
	useEffect(() => {
		dispatch(fetchOrders());
	}, [dispatch, fetchedOrders]);
	return (
		<>
			<OrdersHeader />
			<OrdersSection />
		</>
	);
}

export default OrdersPage;
