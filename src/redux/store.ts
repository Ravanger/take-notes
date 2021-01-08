import { combineReducers, configureStore } from "@reduxjs/toolkit"
import noteReducer from "./modules/note/noteSlice"

const reducer = combineReducers({
  noteReducer,
})

const store = configureStore({
  reducer,
})

export default store
