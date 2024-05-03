import React from "react";
import {
  Header,
  NotesInput,
  NotesCard,
  Footer,
  Sidebar,
} from "../../Components";
import { useNotes } from "../../Contexts/notes-context";

function Home() {
  const { notes, pinnedNotes } = useNotes();

  return (
    <>
      <Header />

      <div className="container">
        <Sidebar />
        <main>
          <div>
            <NotesInput />
          </div>

          <div>
            <div>{pinnedNotes?.length > 0 ? <h2>Pinned Notes</h2> : <></>}</div>
            {pinnedNotes?.length > 0 ? (
              pinnedNotes.map((note) => <NotesCard note={note} isPinnedIconVisible={true} key={note.id} />)
            ) : (
              <></>
            )}
          </div>

          <div>
            <div>
              {pinnedNotes?.length == 0 && notes?.length > 0 ? (
                <h2>Your Notes</h2>
              ) : pinnedNotes?.length != 0 ? (
                <h2>Other Notes</h2>
              ) : (
                <></>
              )}
            </div>
            {notes?.length > 0 ? (
              notes.map((note) => <NotesCard note={note} isPinnedIconVisible={true} key={note.id} />)
            ) : (
              <>
                <h3>No notes yet.</h3>
              </>
            )}
          </div>
        </main>
      </div>
      <Footer />
    </>
  );
}

export default Home;
