import { Note, Action } from "types"

// Types
const LOAD = "my-app/note/LOAD"
const OPEN = "my-app/note/OPEN"
const ADD = "my-app/note/ADD"
const CLOSE = "my-app/note/CLOSE"
const REMOVE = "my-app/note/REMOVE"

const initialState = {
  notes: [] as Note[],
}

// Reducer
export const reducer = (state = initialState, action: Action) => {
  switch (action.type) {
    case LOAD:
      return state
    case OPEN:
      return state
    case ADD:
      return state
    case CLOSE:
      return state
    case REMOVE:
      return state
    default:
      return state
  }
}

// Action Creators
export const loadNotes = () => {
  return { type: LOAD }
}

export const openNote = (note: Note) => {
  return { type: OPEN, note }
}

export const addNote = (note: Note) => {
  return { type: ADD, note }
}

export const closeNote = (note: Note) => {
  return { type: CLOSE, note }
}

export const removeNote = (note: Note) => {
  return { type: REMOVE, note }
}

export default reducer
