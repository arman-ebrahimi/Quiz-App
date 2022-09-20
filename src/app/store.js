import {configureStore} from "@reduxjs/toolkit";
import questionsReducer from "../Component/questionsSlice"

export default configureStore({
    reducer: {
        questions: questionsReducer
    }
})