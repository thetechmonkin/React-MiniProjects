import React from 'react'
import { useNotes } from '../../Contexts/notes-context'
import { NotesCard, Header, Footer, Sidebar } from '../../Components'

function Bin() {

  const { deletedNotes, setDeletedNotes } = useNotes()

  const onClearAllClick = () => {
    if (deletedNotes.length === 0) return;
    else {
      setDeletedNotes([]);
    }
  }

  return (
    <>
      <Header />

      <div className="container">
        <Sidebar />
        <main>
          <div>
            <button onClick={onClearAllClick}>Clear All</button>
          </div>
          <div>
            {deletedNotes?.length > 0 ? (
              deletedNotes.map((note) => <NotesCard note={note} isPinnedIconVisible={false} key={note.id} />)
            ) : (
              <>
                <h3>Nothing here...</h3>
              </>
            )}
          </div>
        </main>
      </div>
      <Footer />
    </>
  )
}

export default Bin