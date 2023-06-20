/**
 * @jest-environment jsdom
 */

const NotesView = require("./notes_view");
const NotesModel = require("./notes");
const noteClient = require("./noteClient");
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

  it("calls fetch and loads repo info", () => {
    const mockClient = {
      loadNotes: jest.fn(),
    };

    const mockModel = {
      setNotes: jest.fn(),
      addNote: jest.fn(),
      getNotes: jest.fn(),
    };

    const view = new NotesView(mockModel, mockClient);

    // Mock the notes returned from the API
    const mockNotes = ["Note 1"];

    // Mock the behavior of loadNotes method to call the callback with the mockNotes
    mockClient.loadNotes.mockImplementationOnce((callback) => {
      callback(mockNotes);
    });

    mockModel.getNotes.mockImplementationOnce(() => {
      return mockNotes;
    });

    // Call the displayNotesFromApi method
    view.displayNotesFromApi();

    // Expect the loadNotes method to be called with the callback
    expect(mockClient.loadNotes).toHaveBeenCalledWith(expect.any(Function));

    // Expect the setNotes method to be called with the mockNotes
    expect(mockModel.setNotes).toHaveBeenCalledWith(mockNotes);

    // Expect the displayNotes method to be called
    expect(document.querySelector(".note").innerHTML).toEqual("Note 1");
  });
});
