class NotesModel {
  constructor() {
    this.array = [];
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
