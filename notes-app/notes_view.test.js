/**
 * @jest-environment jsdom
 */

const NotesView = require("./notes_view");
const NotesModel = require("./notes");
const fs = require("fs");

describe("NotesView", () => {
  it("creates 1 new div element by clicking the button", () => {
    document.body.innerHTML = fs.readFileSync("./index.html");

    const model = new NotesModel();

    const testClass = new NotesView(model);
    const buttonEl = document.querySelector("#show-note-button");
    const inputEl = document.querySelector("#note_input");

    inputEl.value = "First note";

    buttonEl.click();

    expect(document.querySelector("div.note")).not.toBeNull();
    expect(document.querySelector("div.note").innerHTML).toEqual("First note");
  });

  it("clear the list of previous notes before displaying", () => {
    document.body.innerHTML = fs.readFileSync("./index.html");

    const model = new NotesModel();

    const view = new NotesView(model);

    const buttonEl = document.querySelector("#show-note-button");
    const inputEl = document.querySelector("#note_input");

    inputEl.value = "First note";
    buttonEl.click();

    inputEl.value = "Second note";
    buttonEl.click();
    expect(document.querySelectorAll("div.note").length).toEqual(2);
  });
});
