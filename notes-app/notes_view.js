class NotesView {
  constructor(model) {
    this.model = model;
    this.buttonEl = document.querySelector("#show-note-button");

    this.buttonEl.addEventListener("click", () => {
      this.displayNotes();
    });
  }

  displayNotes() {
    const notesContainer = document.querySelector("#notes_container");
    notesContainer.innerHTML = ""; // Clear previous notes

    this.model.addNote(document.querySelector("#note_input").value);
    this.model.getNotes().forEach((element) => {
      const newElement = document.createElement("div");
      newElement.className = "note";
      newElement.textContent = element;
      notesContainer.appendChild(newElement);
    });
  }
}

module.exports = NotesView;
