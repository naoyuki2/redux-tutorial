import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./counterSlice";

export const store = configureStore({
  //cofigureStoreでstoreを作成
  reducer: {
    //stateを更新するための仕組み
    counter: counterReducer,
  },
});
