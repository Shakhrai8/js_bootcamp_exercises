/**
 * @jest-environment jsdom
 */

const NotesView = require("./notes_view");
const fs = require("fs");

describe("NotesView", () => {
  it("creates 1 new div element by clicking the button", () => {
    document.body.innerHTML = fs.readFileSync("./index.html");

    const mockNotesModelClass = {
      addNote: (string) => [].push(string),
    };

    const testClass = new NotesView(mockNotesModelClass);
    const buttonEl = document.querySelector("#show-note-button");
    const inputEl = document.querySelector("#note_input");

    inputEl.value = "First note";

    buttonEl.click();

    expect(document.querySelector("#note")).not.toBeNull();
    expect(document.querySelector("#note").innerHTML).toEqual("First note");
  });
});
