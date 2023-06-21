class NotesView {
  constructor(model, client) {
    this.model = model;
    this.client = client;
    this.buttonEl = document.querySelector("#show-note-button");
    this.inputEl = document.querySelector("#note_input");

    this.buttonEl.addEventListener("click", () => {
      this.client
        .createNote({ content: this.inputEl.value })
        .then(() => {
          this.displayNotesFromApi();
          this.inputEl.value = "";
        })
        .catch((error) => {
          this.displayError(error);
        });
    });
  }

  displayNotes() {
    const notesContainer = document.querySelector("#notes_container");
    notesContainer.innerHTML = ""; // Clear previous notes

    //this.model.addNote(document.querySelector("#note_input").value);
    this.model.getNotes().forEach((element) => {
      const newElement = document.createElement("div");
      newElement.className = "note";
      newElement.textContent = element;
      notesContainer.appendChild(newElement);
    });
  }

  displayNotesFromApi() {
    const callback = (data) => {
      this.model.setNotes(data);
      this.displayNotes();
    };
    this.client.loadNotes(callback, this.displayError);
  }

  displayError(error) {
    const notesContainer = document.querySelector("#notes_container");
    const errorDiv = document.createElement("div");
    errorDiv.className = "error-message";
    errorDiv.textContent = `Oops, something went wrong! Error: ${error}`;
    notesContainer.appendChild(errorDiv);
  }
}

module.exports = NotesView;
