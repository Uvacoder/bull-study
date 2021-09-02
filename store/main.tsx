import { configureStore } from "@reduxjs/toolkit";
import checkinReducer from "./checkin";

const store = configureStore({
  reducer: { checkin: checkinReducer },
});

export default store;
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;