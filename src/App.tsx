import { useDispatch, useSelector } from "react-redux"
import { loadNotes } from "src/redux/modules/note/noteSlice"
import { RootState } from "src/redux/modules/note/noteTypes"

import NotesGrid from "src/note/components/NotesGrid"

const App = () => {
  const dispatch = useDispatch()
  const { notes } = useSelector((state: RootState) => state.noteReducer)

  return (
    <NotesGrid
      notes={notes}
      loadNotesAction={() => {
        dispatch(loadNotes())
      }}
    />
  )
}

export default App
