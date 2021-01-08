import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { NoteState, Note } from "./noteTypes"

// FOR TESTING
import noteData from "./data/noteData"
const initialState: NoteState = { notes: [] }
// ~FOR TESTING

const notesSlice = createSlice({
  name: "notes",
  initialState,
  reducers: {
    loadNotes: (state) => {
      state.notes = noteData.notes
    },
    openNote: (state) => state,
    addNote: (state, action: PayloadAction<Note>) => {
      const note = action.payload
      state.notes.push(note)
    },
    saveNote: (state, action: PayloadAction<Note>) => {
      const note = action.payload
      state.notes = update(state, note)
    },
    closeNote: (state, action: PayloadAction<Note>) => {
      const note = action.payload
      state.notes = update(state, note)
    },
    deleteNote: (state, action: PayloadAction<string>) => {
      const deleteId = action.payload
      state.notes.filter((note) => note.id !== deleteId)
    },
  },
})

const update = (state: NoteState, payload: Note) =>
  state.notes.map((note) => (note.id === payload.id ? payload : note))

export const {
  loadNotes,
  openNote,
  addNote,
  saveNote,
  closeNote,
  deleteNote,
} = notesSlice.actions

export default notesSlice.reducer
