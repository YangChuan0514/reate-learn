import { createSlice } from "@reduxjs/toolkit";
const counterSlice = createSlice({
  name: "couter",
  initialState: {
    couter: 0,
    list: [],
  },
  reducers: {
    addNum: (store) => {
      store.couter++;
    },
    delNum: (store) => {
      store.couter--;
    },
    addToNum: (store, action) => {
      store.couter = action.payload;
    },
    asyncFun: (store, action) => {
      store.list = action.payload;
    },
  },
});
const { addNum, delNum, addToNum, asyncFun } = counterSlice.actions;
export { addNum, delNum, addToNum, asyncFun };
export default counterSlice.reducer;
