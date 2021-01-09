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
    addNote: (state, action: PayloadAction<Note>) => {
      const note = action.payload
      state.notes.push(note)
    },
    saveNote: (state, action: PayloadAction<Note>) => {
      const newNote = action.payload
      state.notes = state.notes.map((oldNote) =>
        oldNote.id === newNote.id ? newNote : oldNote
      )
    },
    deleteNote: (state, action: PayloadAction<string>) => {
      const deleteId = action.payload
      state.notes = state.notes.filter((note) => note.id !== deleteId)
    },
  },
})

export const { loadNotes, addNote, saveNote, deleteNote } = notesSlice.actions

export default notesSlice.reducer
