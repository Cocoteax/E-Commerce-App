import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import BASE_URL from "../components/Utility/BaseURL";

const authSlice = createSlice({
	name: "auth",
	initialState: {
		isLoggedIn: false,
		isAuthenticating: false, // For loading state in login
		isAuthenticated: null, // For displaying toast message for login
		isRegistering: false, // For loading state in register
		isRegistered: null, // For displaying toast message for register
	},
	reducers: {
		setLoggedInStatus(state, action) {
			state.isLoggedIn = action.payload;
		},
		setIsAuthenticating(state, action) {
			state.isAuthenticating = action.payload;
		},
		setIsAuthenticated(state, action) {
			state.isAuthenticated = action.payload;
		},
		setIsRegistering(state, action) {
			state.isRegistering = action.payload;
		},
		setIsRegistered(state, action) {
			state.isRegistered = action.payload;
		},
	},
});

// Action thunk with POST request to log user in
export const loginUser = (formData) => {
	return async (dispatch) => {
		try {
			dispatch(authSlice.actions.setIsAuthenticating(true));
			const response = await axios.post(
				`${BASE_URL}/api/v1/auth/login`,
				{
					email: formData.email,
					password: formData.password,
				},
				{ withCredentials: true }
			);
			if (response.status === 200) {
				console.log("successful login");
				dispatch(authSlice.actions.setLoggedInStatus(true));
				dispatch(authSlice.actions.setIsAuthenticating(false));
				dispatch(authSlice.actions.setIsAuthenticated(true));
			}
		} catch (e) {
			// If response throws an error, we handle it here (E.g, no user found with credentials)
			// TODO: Build an alert UI to inform user of unsuccessful login
			console.log("User not found!");
			console.log(e);
			dispatch(authSlice.actions.setIsAuthenticating(false));
			dispatch(authSlice.actions.setIsAuthenticated(false));
		}
	};
};

// Action thunk to persist user logged in by validating JWT cookies
export const persistUser = () => {
	return async (dispatch) => {
		try {
			const response = await axios.post(
				`${BASE_URL}/api/v1/auth/validateToken`,
				null,
				{ withCredentials: true }
			);
			if (response.status === 200) {
				dispatch(authSlice.actions.setLoggedInStatus(true));
			}
		} catch (e) {
			console.log(e);
		}
	};
};

// Action thunk with POST request to register new user
export const registerUser = (formData) => {
	return async (dispatch) => {
		try {
			dispatch(authSlice.actions.setIsRegistering(true));
			const response = await axios.post(
				`${BASE_URL}/api/v1/auth/register`,
				{
					name: formData.name,
					email: formData.email,
					password: formData.password,
				},
				{ withCredentials: true }
			);
			if (response.status === 200) {
				console.log("successful login");
				dispatch(authSlice.actions.setLoggedInStatus(true));
				dispatch(authSlice.actions.setIsRegistering(false));
				dispatch(authSlice.actions.setIsRegistered(true));
			}
		} catch (e) {
			// If response throws an error, we handle it here (E.g, no user found with credentials)
			// TODO: Build an alert UI to inform user of unsuccessful login
			console.log("User not found!");
			console.log(e);
			dispatch(authSlice.actions.setIsRegistering(false));
			dispatch(authSlice.actions.setIsRegistered(false));
		}
	};
};

export const authActions = authSlice.actions;
export default authSlice;
