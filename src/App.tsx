import { useSelector } from "react-redux"
import { RootState } from "src/redux/modules/note/noteTypes"

import NotesGrid from "src/note/components/NotesGrid"

const App = () => {
  const { notes } = useSelector((state: RootState) => state.noteReducer)

  return <NotesGrid notes={notes} />
}

export default App
