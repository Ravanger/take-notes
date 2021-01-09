import { useCallback, useMemo } from "react"
import { useDispatch } from "react-redux"
import { Note } from "./noteTypes"
import { addNote, deleteNote, loadNotes, saveNote } from "./noteSlice"

export const useNotesDispatch = () => {
  const dispatch = useDispatch()

  const dispatchLoadNotes = useCallback(() => {
    dispatch(loadNotes())
  }, [dispatch])

  const dispatchAddNote = useCallback(
    (note: Note) => {
      dispatch(addNote(note))
    },
    [dispatch]
  )

  const dispatchSaveNote = useCallback(
    (note: Note) => {
      dispatch(saveNote(note))
    },
    [dispatch]
  )

  const dispatchDeleteNote = useCallback(
    (id: string) => {
      dispatch(deleteNote(id))
    },
    [dispatch]
  )

  return useMemo(
    () => ({
      dispatchLoadNotes,
      dispatchAddNote,
      dispatchSaveNote,
      dispatchDeleteNote,
    }),
    [dispatchAddNote, dispatchLoadNotes, dispatchSaveNote, dispatchDeleteNote]
  )
}

export default useNotesDispatch
