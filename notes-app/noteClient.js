class noteClient {
  loadNotes(callback) {
    fetch("http://localhost:3000/notes")
      .then((response) => response.json())
      .then((data) => callback(data))
      .catch((error) => console.error("Error:", error));
  }

  createNote(data) {
    return fetch("http://localhost:3000/notes", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .catch((error) => {
        console.error("Error creating note:", error);
        throw error;
      });
  }
}

module.exports = noteClient;
