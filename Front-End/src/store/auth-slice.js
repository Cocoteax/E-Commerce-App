import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import BASE_URL from "../components/Utility/BaseURL";

const authSlice = createSlice({
	name: "auth",
	initialState: {
		isLoggedIn: false,
	},
	reducers: {
		setLoggedInStatus(state, action) {
			state.isLoggedIn = action.payload.isLoggedIn;
		},
	},
});

// Action thunk with POST request to log user in
export const loginUser = (formData) => {
	return async (dispatch) => {
		try {
			const response = await axios.post(
				`${BASE_URL}/api/v1/auth/login`,
				{
					email: formData.email,
					password: formData.password,
				},
				{ withCredentials: true }
			);
			if (response.status === 200) {
				console.log("successfully login");
				dispatch(authSlice.actions.setLoggedInStatus({ isLoggedIn: true }));
			}
		} catch (e) {
			// If response throws an error, we handle it here (E.g, no user found with credentials)
			// TODO: Build an alert UI to inform user of unsuccessful login
			console.log(e);
		}
	};
};

export const authActions = authSlice.actions;
export default authSlice;
