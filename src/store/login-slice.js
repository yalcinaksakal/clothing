import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	user: null,
};

const loginSlice = createSlice({
	name: "login",
	initialState,
	reducers: {
		setUser(state, action) {
			state.user = action.payload;
		},
	},
});

export const loginActions = loginSlice.actions;

export default loginSlice.reducer;
