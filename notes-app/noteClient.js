class noteClient {
  loadNotes(callback, error_msg) {
    fetch("http://localhost:3000/notes")
      .then((response) => response.json())
      .then((data) => callback(data))
      .catch((error) => error_msg(error));
  }

  createNote(data, error_msg) {
    return fetch("http://localhost:3000/notes", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    }).then((response) => response.json());
  }
}

module.exports = noteClient;
