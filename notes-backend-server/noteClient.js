class noteClient {
  loadNotes(callback) {
    fetch("./notes")
      .then((response) => response.json())
      .then((data) => callback(data))
      .catch((error) => console.error("Error:", error));
  }
}

module.exports = noteClient;
