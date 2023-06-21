class noteClient {
  loadNotes(callback, error_msg) {
    fetch("http://localhost:3000/notes")
      .then((response) => response.json())
      .then((data) => callback(data))
      .catch((error) => error_msg(error));
  }

  async createNote(data, error_msg) {
    const convertEmojiShortcodes = async (content) => {
      const response = await fetch("https://makers-emojify.herokuapp.com/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ text: content }),
      });

      const { status, emojified_text, message } = await response.json();

      if (status === "OK") {
        return emojified_text;
      } else {
        throw new Error(message);
      }
    };

    const convertedData = {
      content: await convertEmojiShortcodes(data.content),
    };

    return fetch("http://localhost:3000/notes", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(convertedData),
    }).then((response) => response.json());
  }
}

module.exports = noteClient;
