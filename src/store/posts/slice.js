import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  posts: null,
  details: null,
};

export const postSlice = createSlice({
  name: "posts",
  initialState: initialState,
  reducers: {
    charsFetched: (state, action) => {
      //   console.log("posts-slice action:", action);
      state.posts = action.payload;
    },
  },
});

export const { charsFetched } = postSlice.actions;

export default postSlice.reducer;
