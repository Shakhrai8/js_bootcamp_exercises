const NotesModel = require("./notes.js");
const NotesView = require("./notes_view.js");
const NotesClient = require("./notesClient.js");

const notes = new NotesModel();
notes.addNote("Note from the server");
const client = new NotesClient();
const view = new NotesView(notes, client);
view.displayNotes();
