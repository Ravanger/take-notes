import { configureStore } from "@reduxjs/toolkit"
import { reducer as noteReducer } from "./modules/note/duck"

export default configureStore({
  reducer: { noteReducer },
})
