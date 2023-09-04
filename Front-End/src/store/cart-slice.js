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
		// Redux reducer for adding product to cart (Focus on responsiveness by updating the cart state, then triggering PUT request)
		addToCartReducer(state, action) {
			const newProduct = action.payload.newProduct;
			console.log("New Product");
			console.log(newProduct);
			// Check if product exists in cart
			const existingIndex = state.cart.cartItems.findIndex(
				(cartItem) =>
					cartItem.product._id.toString() === newProduct._id.toString()
			);

			// Existing cart item
			if (existingIndex > -1) {
				// Update quantity, subtotal, total quantity and total price
				state.cart.cartItems[existingIndex].quantity += 1;
				state.cart.cartItems[existingIndex].subtotal += newProduct.price;
				state.cart.totalQuantity += 1;
				state.cart.totalPrice += newProduct.price;
			}
			// New cart item
			else {
				state.cart.cartItems.push({
					product: {
						_id: newProduct._id,
						category: newProduct.category,
						price: newProduct.price,
						title: newProduct.title,
					},
					quantity: 1,
					subtotal: newProduct.price,
				});
				// Update total quantity and total price
				state.cart.totalQuantity += 1;
				state.cart.totalPrice += newProduct.price;
			}
			state.cartChanged = true;
		},
		// Redux reducer for removing products from cart (Focus on responsiveness by updating the cart state, then triggering PUT request)
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

// Action thunk with PUT request that triggers whenever we change the cart state using our redux reducers
// NOTE: This thunk executes whenever our cart changes state because of the useEffect() that we set up in CartPage which triggers whenever cart state changes
export const updateCart = (cart) => {
	return async (dispatch) => {
		await axios.put(`${BASE_URL}/api/v1/carts`, { cart });
	};
};

export const cartActions = cartSlice.actions;
export default cartSlice;
