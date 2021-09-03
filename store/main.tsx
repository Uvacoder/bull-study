import { configureStore } from "@reduxjs/toolkit";
import checkinReducer from "./checkin";
import answersReducer from "./answers";

const store = configureStore({
  reducer: { checkin: checkinReducer, answers: answersReducer },
});

export default store;
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
