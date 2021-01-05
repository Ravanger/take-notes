import { createAction, createReducer, PayloadAction } from "@reduxjs/toolkit"
import { NoteState, Note } from "./types"

// FOR TESTING
import { noteData } from "./data/noteData"
const initialState: NoteState = noteData
// ~FOR TESTING

// Types
const LOAD_NOTES = "my-app/note/LOAD_NOTES"
const OPEN_NOTE = "my-app/note/OPEN_NOTE"
const ADD_NOTE = "my-app/note/ADD_NOTE"
const SAVE_NOTE = "my-app/note/SAVE_NOTE"
const CLOSE_NOTE = "my-app/note/CLOSE_NOTE"
const DELETE_NOTE = "my-app/note/DELETE_NOTE"

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
    state.notes = update(state, action.payload)
  })
  builder.addCase(closeNote, (state, action: PayloadAction<Note>) => {
    state.notes = update(state, action.payload)
  })
  builder.addCase(deleteNote, (state, action: PayloadAction<string>) => {
    const deleteId = action.payload
    state.notes.filter((note) => note.id !== deleteId)
  })
})

const update = (state: NoteState, payload: Note) =>
  state.notes.map((note) => (note.id === payload.id ? payload : note))

export default reducer
