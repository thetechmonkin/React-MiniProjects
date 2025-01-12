import React from 'react'
import { useNotes } from '../../Contexts/notes-context'
import { NotesCard, Header, Footer, Sidebar } from '../../Components'

function Archive() {

  const { archiveNotes } = useNotes()
  return (
    <>
      <Header />

      <div className="container">
        <Sidebar />
        <main>
          <div>
            {archiveNotes?.length > 0 ? (
              archiveNotes.map((note) => <NotesCard note={note} isPinnedIconVisible={false} key={note.id} />)
            ) : (
              <>
                <h3>No notes archived yet.</h3>
              </>
            )}
          </div>
        </main>
      </div>
      <Footer />
    </>
  )
}

export default Archive