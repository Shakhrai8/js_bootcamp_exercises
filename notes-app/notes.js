class NotesModel {
  constructor() {
    this.array = [];
  }

  setNotes(notes) {
    this.array = notes;
  }

  addNote(string) {
    return this.array.push(string);
  }

  getNotes() {
    return this.array;
  }

  reset() {
    return (this.array = []);
  }
}

module.exports = NotesModel;
