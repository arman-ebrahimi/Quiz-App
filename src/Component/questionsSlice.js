import {createSlice, createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios";

export const fetchQuestions = createAsyncThunk("questions/fetchQuestions", async () => {
    return axios.get("https://opentdb.com/api.php?amount=10&category=18&difficulty=medium&type=multiple")
        .then((response) => response.data.results)
})

const initialState = {
    data: [],
    status: "idle"
};
const questionsSlice = createSlice({
    name: "questions",
    initialState,
    reducers: {
        numberOfTrueAnswers: (state, action) => {
            state.numberOfTrueAnswers = action.payload;
        },
        timeOfQuiz: (state, action) => {
            state.timeOfQuiz = Math.floor(action.payload / 1000);
            console.log(action.payload / 1000)
        }
    },
    extraReducers(builder) {
        builder.addCase(fetchQuestions.fulfilled, (state, action) => {
            state.status = "active";
            state.data = state.data.concat(action.payload);
            console.log(action.payload);
        })
    }
})

export default questionsSlice.reducer;