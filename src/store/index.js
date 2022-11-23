import { configureStore } from "@reduxjs/toolkit";
import feedSlice from "./feed/slice";
import postSlice from "./posts/slice";

const store = configureStore({
  reducer: {
    feeds: feedSlice,
    posts: postSlice,
  },
});

export default store;
