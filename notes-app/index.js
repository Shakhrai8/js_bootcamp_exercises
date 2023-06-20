const NotesModel = require("./notes.js");
const NotesView = require("./notes_view.js");
const NoteClient = require("./noteClient.js");

const notes = new NotesModel();
const client = new NoteClient();
const view = new NotesView(notes, client);
view.displayNotes();
view.displayNotesFromApi();
