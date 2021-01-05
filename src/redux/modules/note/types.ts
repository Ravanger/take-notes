export interface Note {
  id: string
  title: string
  text?: string
  backgroundColor?: string
}

export interface NoteState {
  notes: Note[]
}
