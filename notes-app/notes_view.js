class NotesView {
  constructor(model) {
    this.model = model;
    this.buttonEl = document.querySelector("#show-note-button");

    this.buttonEl.addEventListener("click", () => {
      this.displayNotes();
    });
  }

  displayNotes() {
    const newElement = document.createElement("div");
    newElement.id = "note";
    newElement.textContent = document.querySelector("#note_input").value;
    document.body.appendChild(newElement);
    this.model.addNote(document.querySelector("#note_input").value);
  }
}

module.exports = NotesView;
