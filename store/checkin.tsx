import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "./main";

interface CheckinState {
  isCheckedin: boolean;
}

const initialState: CheckinState = {
  isCheckedin: false,
};

const CheckinSlice = createSlice({
  name: "checkin",
  initialState,
  reducers: {
    check: (state, action: PayloadAction<boolean>) => {
      state.isCheckedin = action.payload;
    },
  },
});

export const checkinActions = CheckinSlice.actions;

export const checkinStatus = (state: RootState) => state.checkin.isCheckedin;

export default CheckinSlice.reducer;
