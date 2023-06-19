const NotesModel = require("./notes.js");
const NotesView = require("./notes_view.js");

const notes = new NotesModel();
notes.addNote('This is an example note');
const view = new NotesView(notes);
view.displayNotes();