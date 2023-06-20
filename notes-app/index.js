const NotesModel = require("./notes.js");
const NotesView = require("./notes_view.js");

const notes = new NotesModel();
const view = new NotesView(notes);
view.displayNotes();
