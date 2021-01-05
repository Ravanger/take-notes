import { createAction, createReducer, PayloadAction } from "@reduxjs/toolkit"
import {
  LOAD_NOTES,
  OPEN_NOTE,
  ADD_NOTE,
  SAVE_NOTE,
  CLOSE_NOTE,
  DELETE_NOTE,
} from "./types"
import { NoteState, Note } from "./types"

// FOR TESTING
import { noteData } from "./data/noteData"
const initialState: NoteState = noteData
// ~FOR TESTING

// const initialState: NoteState = {
//   notes: [],
// }

// Action Creators
export const loadNotes = createAction(LOAD_NOTES)
export const openNote = createAction<Note>(OPEN_NOTE)
export const addNote = createAction<Note>(ADD_NOTE)
export const saveNote = createAction<Note>(SAVE_NOTE)
export const closeNote = createAction<Note>(CLOSE_NOTE)
export const deleteNote = createAction<string>(DELETE_NOTE)

// Reducer
export const reducer = createReducer(initialState, (builder) => {
  builder.addCase(loadNotes, (state) => state)
  builder.addCase(openNote, (state) => state)
  builder.addCase(addNote, (state, action: PayloadAction<Note>) => {
    const note = action.payload
    state.notes.push(note)
  })
  builder.addCase(saveNote, (state, action: PayloadAction<Note>) => {
    state.notes = save(state, action.payload)
  })
  builder.addCase(closeNote, (state, action: PayloadAction<Note>) => {
    state.notes = save(state, action.payload)
  })
  builder.addCase(deleteNote, (state, action: PayloadAction<string>) => {
    const deleteId = action.payload
    state.notes.filter((note) => note.id !== deleteId)
  })
})

const save = (state: NoteState, payload: Note) => {
  const saveIndex = state.notes.findIndex((note) => note.id === payload.id)
  const notesArray = [...state.notes]
  notesArray[saveIndex] = payload
  return notesArray
}

export default reducer
