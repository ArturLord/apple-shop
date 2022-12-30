import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { fetchApples } from "../../components/services/services";
import { AppleItems, ApplesSliceState, Status } from "./types";

const initialState: ApplesSliceState = {
  items: [],
  status: Status.LOADING,
};

const applesSlice = createSlice({
  name: "apples",
  initialState,
  reducers: {
    setItems(state, action: PayloadAction<AppleItems[]>) {
      state.items = action.payload;
    },
  },

  extraReducers: (builder) => {
    builder.addCase(fetchApples.pending, (state) => {
      state.status = Status.LOADING;
      state.items = [];
    });
    builder.addCase(fetchApples.fulfilled, (state, action) => {
      state.items = action.payload;
      state.status = Status.SUCCESS;
    });
    builder.addCase(fetchApples.rejected, (state) => {
      state.status = Status.ERROR;
      state.items = [];
    });
  },
});

export const { setItems } = applesSlice.actions;

export default applesSlice.reducer;
