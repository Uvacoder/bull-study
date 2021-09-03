import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "./main";

interface AnswersState {
  answersRecord: any[];
}

const initialState: AnswersState = {
  answersRecord: [],
};

const AnswersSlice = createSlice({
  name: "answers",
  initialState,
  reducers: {
    submit: (state, action: PayloadAction<any>) => {
      state.answersRecord.push(action.payload);
    },
  },
});

export const answersActions = AnswersSlice.actions;

export const AnswersRecord = (state: RootState) => state.answers.answersRecord;

export default AnswersSlice.reducer;
