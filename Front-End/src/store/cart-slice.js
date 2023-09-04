import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import BASE_URL from "../components/Utility/BaseURL";

const cartSlice = createSlice({
	name: "cart",
	initialState: {
		cart: [],
		fetchedCart: false,
		cartChanged: false,
	},
	reducers: {
		loadCart(state, action) {
			state.cart = action.payload.cartItems;
			state.fetchedCart = true;
			console.log(state.cart);
		},
		// Redux reducer for cart updates ONLY IN CART PAGE. (Focus on responsiveness by updating the cart state, then triggering PUT request)
		addToCartReducer(state, action) {
			const newProduct = action.payload.cartItem;
			// Check if product exists in cart
			const existingIndex = state.cart.cartItems.findIndex(
				(cartItem) =>
					cartItem.product._id.toString() === newProduct.product._id.toString()
			);

			// Existing cart item
			if (existingIndex > -1) {
				// Update quantity, subtotal, total quantity and total price
				state.cart.cartItems[existingIndex].quantity += 1;
				state.cart.cartItems[existingIndex].subtotal +=
					newProduct.product.price;
				state.cart.totalQuantity += 1;
				state.cart.totalPrice += newProduct.product.price;
			}
			// New cart item
			else {
				state.cart.cartItems.push({
					product: {
						_id: newProduct.product._id,
						category: newProduct.product.category,
						price: newProduct.product.price,
						title: newProduct.product.title,
					},
					quantity: newProduct.quantity,
					subtotal: newProduct.subtotal,
				});
				// Update total quantity and total price
				state.cart.totalQuantity += 1;
				state.cart.totalPrice += newProduct.product.price;
			}
			state.cartChanged = true;
		},
		// Redux reducer for cart updates ONLY IN CART PAGE. (Focus on responsiveness by updating the cart state, then triggering PUT request)
		removeFromCartReducer(state, action) {
			const productID = action.payload.productID;

			// Get the cart item
			const cartItem = state.cart.cartItems.find(
				(cartItem) => cartItem.product._id.toString() === productID.toString()
			);

			// If only one quantity in cart, delete completely
			if (cartItem.quantity === 1) {
				state.cart.cartItems = state.cart.cartItems.filter(
					(cartItem) => cartItem.product._id.toString() !== productID.toString()
				);
			}
			// More than one quantity in cart
			else {
				cartItem.quantity -= 1;
				cartItem.subtotal -= cartItem.product.price;
			}
			// Update total quantity and total price
			state.cart.totalQuantity -= 1;
			state.cart.totalPrice -= cartItem.product.price;

			state.cartChanged = true;
		},
		resetCartChangedStatus(state, action) {
			state.cartChanged = false;
		},
	},
});

export const fetchCart = () => {
	return async (dispatch) => {
		const response = await axios.get(`${BASE_URL}/api/v1/carts`);
		const cartItems = response.data.data;
		dispatch(cartSlice.actions.loadCart({ cartItems: cartItems }));
	};
};

// PUT request that triggers whenever we change the cart state ONLY IN THE CART PAGE (For responsiveness). 
// NOTE: This request executes because of the useEffect() we set up in CartPage that triggers whenever cart state changes
export const updateCart = (cart) => {
	return async (dispatch) => {
		await axios.put(`${BASE_URL}/api/v1/carts`, { cart });
	};
};

// POST request for adding items to the cart from OUTSIDE the cart page
export const addToCart = (productID) => {
	return async (dispatch) => {
		await axios.post(`${BASE_URL}/api/v1/carts/${productID}`);
		const response = await axios.get(`${BASE_URL}/api/v1/carts`);
		const cartItems = response.data.data;
		dispatch(cartSlice.actions.loadCart({ cartItems: cartItems }));
	};
};

// Can remove for refractoring
export const removeFromCart = (productID) => {
	return async (dispatch) => {
		try {
			await axios.delete(`${BASE_URL}/api/v1/carts/${productID}`);
			const response = await axios.get(`${BASE_URL}/api/v1/carts`);
			const cartItems = response.data.data;
			dispatch(cartSlice.actions.loadCart({ cartItems: cartItems }));
		} catch (e) {
			console.log(e);
		}
	};
};

export const cartActions = cartSlice.actions;
export default cartSlice;
