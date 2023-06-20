class NotesView {
  constructor(model) {
    this.model = model;
  }

  displayNotes() {
    return this.model.getNotes().forEach((note) => {
      const newElement = document.createElement("div");
      newElement.classList.add("note");
      newElement.textContent = note;
      document.body.appendChild(newElement);
    });
  }
}

module.exports = NotesView;
