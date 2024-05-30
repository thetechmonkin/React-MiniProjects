import { useState, createContext, useContext } from "react";

const NotesContext = createContext();

const NotesProvider = ({children}) => {

    const [notes, setNotes] = useState([]);
    const [pinnedNotes, setPinnedNotes] = useState([]);
    const [archiveNotes, setArchiveNotes] = useState([]);
    const [importantNotes, setImportantNotes] = useState([]);
    const [deletedNotes, setDeletedNotes] = useState([]);

    return(
        <NotesContext.Provider value={{ notes, setNotes, pinnedNotes, setPinnedNotes, archiveNotes, setArchiveNotes, importantNotes, setImportantNotes, deletedNotes, setDeletedNotes }}>
            {children}
        </NotesContext.Provider>
    )
}

const useNotes = () => {
    return useContext(NotesContext);
}

export {NotesProvider, useNotes};
