const NotesModel = require("./notes");

describe("NotesModel", () => {
  let notes;

  beforeEach(() => {
    notes = new NotesModel();
  });

  it("returns an empty array", () => {
    expect(notes.getNotes()).toEqual([]);
  });

  it("returns 2 notes in the array", () => {
    let note_1 = "Test note";
    let note_2 = "Another test note";

    notes.addNote(note_1);
    notes.addNote(note_2);
    expect(notes.getNotes()).toEqual([note_1, note_2]);
  });

  it("resets the array and returns 1 note", () => {
    let note_1 = "Test note";
    let note_2 = "Another test note";
    let note_3 = "Something else";

    notes.addNote(note_1);
    notes.addNote(note_2);
    notes.reset();
    notes.addNote(note_3);
    expect(notes.getNotes()).toEqual([note_3]);
  });
});
